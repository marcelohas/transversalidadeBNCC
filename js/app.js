/**
 * Lógica de Controle do Portal de Computação Transversal na BNCC
 * Carrega dados dinamicamente, popula filtros e realiza buscas rápidas na BNCC completa.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Referências do DOM
    const searchInput = document.getElementById("search-input");
    const selectSegmento = document.getElementById("filter-segmento");
    const selectAno = document.getElementById("filter-ano");
    const selectComponente = document.getElementById("filter-componente");
    const selectEixo = document.getElementById("filter-eixo");
    const btnClear = document.getElementById("btn-clear");
    const btnPrintAll = document.getElementById("btn-print-all");
    const resultsCount = document.getElementById("results-count");
    const cardsContainer = document.getElementById("cards-container");

    // 1. COMBINAR OS BANCOS DE DADOS
    const FULL_CURRICULUM = [];

    // Adiciona os mapeamentos customizados de referência (Premium)
    BNCC_DATABASE.forEach(item => {
        FULL_CURRICULUM.push({
            ...item,
            isCustom: true
        });
    });

    // Adiciona todas as outras habilidades gerais da BNCC de forma adaptativa
    if (typeof BNCC_ALL_SKILLS !== 'undefined') {
        BNCC_ALL_SKILLS.forEach(item => {
            // Evita duplicar se já foi mapeada manualmente na base premium
            const alreadyMapped = BNCC_DATABASE.some(dbItem => dbItem.habilidade_bncc.codigo === item.codigo);
            if (!alreadyMapped) {
                const compIntegration = getAdaptiveComputingIntegration(item.segmento, item.ano, item.componente);
                
                FULL_CURRICULUM.push({
                    id: `${item.codigo}_AUTO`,
                    segmento: item.segmento,
                    ano: item.ano,
                    componente: item.componente,
                    habilidade_bncc: {
                        codigo: item.codigo,
                        descricao: item.descricao
                    },
                    atividade_tradicional: "Atividade convencional descrita no planejamento de aula regular do professor regente para lecionar a habilidade original da disciplina.",
                    eixo_computacao: compIntegration.eixo,
                    habilidade_computacao: {
                        codigo: compIntegration.codigo,
                        descricao: compIntegration.descricao
                    },
                    atividade_desplugada: compIntegration.atividade_desplugada,
                    atividade_plugada: {
                        plataforma: compIntegration.plataforma,
                        titulo: compIntegration.plugged_titulo,
                        url: compIntegration.url
                    },
                    isCustom: false
                });
            }
        });
    }

    // Inicialização
    initFilters();
    filterData(); // Filtra e carrega o estado inicial (cards premium)

    // Ouvintes de Eventos
    searchInput.addEventListener("input", filterData);
    selectSegmento.addEventListener("change", () => {
        updateAnoOptions(); // Filtra os anos disponíveis com base no segmento para evitar seleções vazias
        filterData();
    });
    selectAno.addEventListener("change", filterData);
    selectComponente.addEventListener("change", filterData);
    selectEixo.addEventListener("change", filterData);
    
    btnClear.addEventListener("click", resetAllFilters);
    btnPrintAll.addEventListener("click", () => {
        window.print();
    });

    /**
     * Inicializa os selects de filtro com valores dinâmicos de toda a base de dados
     */
    function initFilters() {
        const segmentos = [...new Set(FULL_CURRICULUM.map(item => item.segmento))].sort();
        const componentes = [...new Set(FULL_CURRICULUM.map(item => item.componente))].sort();
        const eixos = [...new Set(FULL_CURRICULUM.map(item => item.eixo_computacao))].sort();

        // Popular Segmentos
        segmentos.forEach(seg => {
            const opt = document.createElement("option");
            opt.value = seg;
            opt.textContent = seg;
            selectSegmento.appendChild(opt);
        });

        // Popular Componentes (Disciplinas)
        componentes.forEach(comp => {
            const opt = document.createElement("option");
            opt.value = comp;
            opt.textContent = comp;
            selectComponente.appendChild(opt);
        });

        // Popular Eixos
        eixos.forEach(eixo => {
            const opt = document.createElement("option");
            opt.value = eixo;
            opt.textContent = eixo;
            selectEixo.appendChild(opt);
        });

        updateAnoOptions();
    }

    /**
     * Atualiza o select de anos/séries baseado no segmento selecionado
     */
    function updateAnoOptions() {
        const selectedSegmento = selectSegmento.value;
        
        // Limpar select de anos mantendo apenas a opção "Todos os Anos"
        selectAno.innerHTML = '<option value="">Todos os Anos</option>';

        let filteredItems = FULL_CURRICULUM;
        if (selectedSegmento) {
            filteredItems = FULL_CURRICULUM.filter(item => item.segmento === selectedSegmento);
        }

        const anos = [...new Set(filteredItems.map(item => item.ano))].sort((a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
            return a.localeCompare(b);
        });

        anos.forEach(ano => {
            const opt = document.createElement("option");
            opt.value = ano;
            opt.textContent = ano;
            selectAno.appendChild(opt);
        });
    }

    /**
     * Remove acentos, diacríticos e converte a string para caixa baixa para fins de busca aproximada
     */
    function normalizeString(str) {
        if (!str) return "";
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    /**
     * Realiza a filtragem combinada dos dados com paginação/lazy-loading implícito
     */
    function filterData() {
        const query = normalizeString(searchInput.value).trim();
        const segmento = selectSegmento.value;
        const ano = selectAno.value;
        const componente = selectComponente.value;
        const eixo = selectEixo.value;

        // Se nenhum critério de busca e nenhum filtro estiverem selecionados:
        // Exibimos apenas as habilidades premium mapeadas manualmente para evitar gargalo de performance de render
        if (!query && !segmento && !ano && !componente && !eixo) {
            resultsCount.innerHTML = `Exibindo <strong>${BNCC_DATABASE.length} mapeamentos de referência</strong>. Digite um termo de busca ou use os filtros acima para pesquisar em toda a base da BNCC (1.397 habilidades).`;
            renderCards(FULL_CURRICULUM.filter(item => item.isCustom));
            return;
        }

        const filtered = FULL_CURRICULUM.filter(item => {
            // Filtros de seleção
            if (segmento && item.segmento !== segmento) return false;
            if (ano && item.ano !== ano) return false;
            if (componente && item.componente !== componente) return false;
            if (eixo && item.eixo_computacao !== eixo) return false;

            // Filtro de busca textual
            if (query) {
                const searchStr = normalizeString([
                    item.id,
                    item.ano,
                    item.componente,
                    item.habilidade_bncc.codigo,
                    item.habilidade_bncc.descricao,
                    item.habilidade_computacao.codigo,
                    item.habilidade_computacao.descricao,
                    item.atividade_tradicional,
                    item.atividade_desplugada,
                    item.atividade_plugada.titulo,
                    item.atividade_plugada.plataforma
                ].join(" "));

                return searchStr.includes(query);
            }

            return true;
        });

        // Limita a renderização a no máximo 100 itens para não travar o navegador se a busca for muito genérica
        const maxResultsToRender = 100;
        const renderList = filtered.slice(0, maxResultsToRender);

        if (filtered.length > maxResultsToRender) {
            resultsCount.innerHTML = `Encontradas <strong>${filtered.length} habilidades</strong>. Exibindo os primeiros ${maxResultsToRender} resultados para melhor performance (refine a busca se necessário).`;
        } else if (filtered.length === 1) {
            resultsCount.innerHTML = `<strong>1 habilidade</strong> encontrada.`;
        } else {
            resultsCount.innerHTML = `<strong>${filtered.length} habilidades</strong> encontradas.`;
        }

        renderCards(renderList);
    }

    /**
     * Renderiza a listagem de cards na tela
     */
    function renderCards(data) {
        cardsContainer.innerHTML = "";

        if (data.length === 0) {
            renderEmptyState();
            return;
        }

        data.forEach(item => {
            const card = document.createElement("article");
            card.className = "matrix-card" + (item.isCustom ? "" : " auto-mapped");
            card.id = `card-${item.id}`;

            const segmentClass = getSegmentBadgeClass(item.segmento);
            const eixoClass = getEixoBadgeClass(item.eixo_computacao);

            // Se for uma integração adaptativa, exibimos um pequeno indicador visual
            const indicatorTag = item.isCustom 
                ? '' 
                : `<span class="badge" style="background-color: var(--warning-bg); color: var(--warning); border: 1.5px solid var(--warning); margin-left: auto;">Integração Sugerida</span>`;

            card.innerHTML = `
                <div class="card-header-block">
                    <div class="meta-badges">
                        <span class="badge ${segmentClass}">${item.segmento}</span>
                        <span class="badge ${eixoClass}">${item.eixo_computacao}</span>
                        <span class="badge" style="background-color: var(--border); color: var(--text-secondary);">${item.ano}</span>
                    </div>
                    <div class="subject-info">
                        <span>${item.componente}</span>
                    </div>
                    ${indicatorTag}
                </div>

                <div class="card-body-block">
                    <!-- Habilidade Regular -->
                    <div class="section-column">
                        <div class="section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                            Componente Regular (BNCC)
                        </div>
                        <div class="habilidade-wrapper">
                            <span class="codigo-habilidade">${item.habilidade_bncc.codigo}</span>
                            <p class="desc-habilidade">${item.habilidade_bncc.descricao}</p>
                        </div>
                        <div class="card-divider"></div>
                        <div class="atividade-block">
                            <span class="atividade-label">Atividade Tradicional (Sem Computação)</span>
                            <p class="atividade-content">${item.atividade_tradicional}</p>
                        </div>
                    </div>

                    <!-- Habilidade Computação + Integrações -->
                    <div class="section-column highlight-pc">
                        <div class="section-title">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                            </svg>
                            Integração à Computação
                        </div>
                        <div class="habilidade-wrapper">
                            <span class="codigo-habilidade">${item.habilidade_computacao.codigo}</span>
                            <p class="desc-habilidade">${item.habilidade_computacao.descricao}</p>
                        </div>
                        <div class="card-divider"></div>
                        <div class="atividade-block" style="margin-bottom: 1rem;">
                            <span class="atividade-label" style="color: var(--success);">Atividade Desplugada (Sem Computador - Foco)</span>
                            <p class="atividade-content"><strong>Como fazer:</strong> ${item.atividade_desplugada}</p>
                        </div>
                        
                        <!-- Coluna de Tecnologia Real se houver URL -->
                        <div class="atividade-block highlight-plugged" style="margin-top: auto; padding-top: 0.5rem;">
                            <span class="atividade-label" style="color: var(--secondary); display: flex; align-items: center; gap: 0.25rem;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                </svg>
                                Plataforma Web (Opcional - Plugada)
                            </span>
                            <p class="atividade-content" style="margin-bottom: 0.5rem;">
                                <strong>Recurso:</strong> ${item.atividade_plugada.titulo} (${item.atividade_plugada.plataforma})
                            </p>
                            <a href="${item.atividade_plugada.url}" class="plugged-action-btn" target="_blank" rel="noopener noreferrer">
                                Acessar no ${item.atividade_plugada.plataforma}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-actions-bar no-print">
                    <button class="btn btn-secondary btn-card-print" data-card-id="card-${item.id}">
                        <span class="btn-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                <rect x="6" y="14" width="12" height="8"></rect>
                            </svg>
                        </span>
                        Imprimir Plano
                    </button>
                </div>
            `;

            const printBtn = card.querySelector(".btn-card-print");
            printBtn.addEventListener("click", () => {
                printSingleCard(`card-${item.id}`);
            });

            cardsContainer.appendChild(card);
        });
    }

    /**
     * Imprime apenas um card específico da lista, ocultando os outros temporariamente
     */
    function printSingleCard(cardHtmlId) {
        const card = document.getElementById(cardHtmlId);
        if (!card) return;

        card.classList.add("print-target");
        document.body.classList.add("print-single");
        window.print();
        card.classList.remove("print-target");
        document.body.classList.remove("print-single");
    }

    /**
     * Renderiza o estado vazio quando a filtragem retorna zero itens
     */
    function renderEmptyState() {
        cardsContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-state-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </span>
                <h3>Nenhum Mapeamento Encontrado</h3>
                <p>Experimente alterar os filtros ou limpar a busca por termo.</p>
                <button id="btn-reset-empty" class="btn btn-primary" style="margin-top: 0.5rem;">Limpar Filtros</button>
            </div>
        `;
        document.getElementById("btn-reset-empty").addEventListener("click", resetAllFilters);
    }

    /**
     * Reseta todos os campos de filtros e busca para o estado original
     */
    function resetAllFilters() {
        searchInput.value = "";
        selectSegmento.value = "";
        selectAno.value = "";
        selectComponente.value = "";
        selectEixo.value = "";
        
        updateAnoOptions();
        filterData();
    }

    /**
     * Retorna a classe CSS de badge apropriada para cada segmento
     */
    function getSegmentBadgeClass(segmento) {
        switch (segmento) {
            case "Educação Infantil": return "badge-segment-infantil";
            case "Ensino Fundamental - Anos Iniciais": return "badge-segment-fundamental-iniciais";
            case "Ensino Fundamental - Anos Finais": return "badge-segment-fundamental-finais";
            case "Ensino Médio": return "badge-segment-medio";
            case "Ensino Fundamental": return "badge-segment-fundamental-finais"; // Fallback geral
            default: return "";
        }
    }

    /**
     * Retorna a classe CSS de badge apropriada para cada eixo de computação
     */
    function getEixoBadgeClass(eixo) {
        if (eixo.includes("Pensamento Computacional") && eixo.includes("Mundo Digital")) return "badge-eixo-pensamento";
        if (eixo.includes("Pensamento Computacional")) return "badge-eixo-pensamento";
        if (eixo.includes("Mundo Digital")) return "badge-eixo-mundo";
        if (eixo.includes("Cultura Digital")) return "badge-eixo-cultura";
        return "badge-eixo-pensamento"; // default
    }

    /**
     * Gera uma integração de computação adaptativa baseada na série e matéria do aluno.
     * Utilizado para as habilidades gerais da BNCC que não possuem mapeamento premium feito manualmente.
     */
    function getAdaptiveComputingIntegration(segmento, ano, componente) {
        if (segmento === "Educação Infantil") {
            return {
                eixo: "Pensamento Computacional",
                codigo: "EI03CO01",
                descricao: "Reconhecer, organizar e repetir padrões em sequências de objetos físicos ou corporais.",
                atividade_desplugada: `Identificar e dar sequência lógica a elementos da aula de ${componente}. Ex: As crianças devem organizar os elementos estudados em sequências ordenadas repetitivas de cores, formas ou movimentos corporais (Ex: palma, pé, palma, pé).`,
                plataforma: "Code.org",
                plugged_titulo: "Curso A para Alfabetização (Introdução à Lógica)",
                url: "https://studio.code.org/s/coursea-2023"
            };
        }

        const gradeNum = parseInt(ano);
        if (gradeNum === 1 || gradeNum === 2 || ano === "1º e 2º Ano") {
            return {
                eixo: "Pensamento Computacional",
                codigo: "EF01CO02",
                descricao: "Identificar, criar e seguir uma sequência ordenada de passos (algoritmos) para solucionar problemas.",
                atividade_desplugada: `Decomposição em Passos (Algoritmo): Propor que a turma divida o conteúdo de ${componente} em uma receita passo a passo sequencial. Um aluno ('robô humano') deve executar a sequência ditada pelos colegas no quadro para atingir o objetivo da aula.`,
                plataforma: "Code.org",
                plugged_titulo: "Curso B - Labirintos e Sequenciamento",
                url: "https://studio.code.org/s/courseb-2023"
            };
        }

        if ((gradeNum >= 3 && gradeNum <= 5) || ano === "1º ao 5º Ano" || ano === "5º e 6º Ano") {
            return {
                eixo: "Pensamento Computacional",
                codigo: "EF03CO01",
                descricao: "Decompor problemas complexos em partes menores e mais fáceis de gerenciar (Decomposição).",
                atividade_desplugada: `Decomposição de Desafios: Em ${componente}, ao resolver uma atividade sobre esta habilidade, os alunos trabalham em pequenos grupos focando em partes isoladas da resolução (Passo 1: Entender dados, Passo 2: Mapear relações, Passo 3: Executar), descobrindo como a divisão reduz a complexidade.`,
                plataforma: "Scratch",
                plugged_titulo: "Programação em Blocos (Expressando Ideias em Código)",
                url: "https://scratch.mit.edu"
            };
        }

        if ((gradeNum >= 6 && gradeNum <= 9) || ano === "6º ao 9º Ano") {
            return {
                eixo: "Pensamento Computacional",
                codigo: "EF06CO02",
                descricao: "Analisar, projetar e depurar algoritmos simples contendo variáveis e estruturas de decisão lógicas.",
                atividade_desplugada: `Fluxograma de Decisão Lógica: Criar um fluxograma condicional ('SE a condição X da aula de ${componente} ocorrer, ENTÃO execute Y, SENÃO execute Z'). Os alunos 'rodam' o fluxograma manualmente no papel para classificar termos, conceitos ou leis científicas estudadas na aula.`,
                plataforma: "Scratch",
                plugged_titulo: "Scratch Studio (Lógica Algorítmica Interativa)",
                url: "https://scratch.mit.edu"
            };
        }

        // Outros ou Ensino Médio
        return {
            eixo: "Cultura Digital",
            codigo: "EM13CO03",
            descricao: "Utilizar ferramentas digitais para coletar, estruturar, analisar e representar dados para validar hipóteses.",
            atividade_desplugada: `Mapeamento e Classificação Manual de Dados: Os alunos catalogam dados estatísticos ou históricos do tema estudado em uma tabela no papel e aplicam critérios manuais de ordenação e filtro lógico antes de formular relatórios ecológicos ou sociais.`,
            plataforma: "PhET Simulations",
            plugged_titulo: "Modelagem de Dados e Simulações Interativas",
            url: "https://phet.colorado.edu/pt_BR"
        };
    }
});
