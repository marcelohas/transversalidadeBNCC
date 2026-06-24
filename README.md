# Portal de Computação Transversal na BNCC 🇧🇷💻

Este portal é uma ferramenta prática, gratuita e de código aberto criada para apoiar professores da Educação Básica brasileira na implementação do **Complemento à BNCC para Computação** (Resolução CNE/CP nº 1/2022) de forma **transversal** (integrada às disciplinas tradicionais), sem a necessidade de criar um novo componente curricular isolado.

## 🚀 Repositório Oficial no GitHub
O código-fonte completo deste projeto está disponível em:
👉 [https://github.com/marcelohas/transversalidadeBNCC.git](https://github.com/marcelohas/transversalidadeBNCC.git)

---

## 🎯 O Grande Desafio e a Nossa Solução

A inserção da Computação como disciplina isolada encarece o sistema educacional e sobrecarrega a grade horária escolar, inviabilizando a adequação de muitas redes de ensino. 

Este portal demonstra que é possível trabalhar as competências digitais através da **transversalidade**, associando-as a aulas já existentes de **Matemática, Língua Portuguesa, Ciências, Geografia, História e Artes**.

### Principais Pilares do Portal:
1. **Foco Pedagógico (Atividade Tradicional como Âncora):** O professor parte da atividade convencional de sua disciplina (ex: ensinar frações desenhando fatias de pizza) e aprende a expandir essa mesma aula para englobar habilidades computacionais.
2. **Computação Desplugada como Prioridade:** Oferece ideias práticas detalhadas para desenvolver o raciocínio lógico sem o uso de computadores (usando lógica corporal, cartões, desenhos ou tabuleiros), contemplando escolas que não possuem infraestrutura tecnológica.
3. **Plataformas Digitais Gratuitas de Referência (Opcional):** Para escolas que possuem laboratórios ou dispositivos móveis, o portal mapeia de forma direta recursos validados e gratuitos, como:
   * **PhET Interactive Simulations** (Universidade do Colorado)
   * **Khan Academy**
   * **Scratch** (MIT)
   * **Code.org**

---

## 🛠️ Arquitetura do Portal (Design Inclusivo)

O portal foi construído em **Vanilla HTML5, CSS3 e Javascript puro**, sem a dependência de frameworks ou processos de build complexos. 

> [!TIP]
> **Inclusão Digital e Uso Offline:**
> Como os dados da matriz estão estruturados em um arquivo JavaScript local (`js/database.js`), o portal pode ser baixado e executado **100% offline** (basta dar um duplo clique no arquivo `index.html`). Isso contorna bloqueios de CORS do navegador e permite o uso em escolas públicas sem acesso ou com acesso intermitente à internet.

## 📂 Estrutura de Arquivos

```text
transversalidadeBNCC/
│
├── index.html        # Estrutura principal e área de filtros
├── css/
│   └── style.css     # Design system, responsividade e estilos de impressão
├── js/
│   ├── bncc_all_skills.js # Banco de dados com 1.397 habilidades oficiais da BNCC
│   ├── database.js   # Banco de dados com os 14 mapeamentos de referência (Premium)
│   └── app.js        # Lógica de filtros, normalização de busca e mapeamento adaptativo
└── README.md         # Documentação do projeto (este arquivo)
```

---

## 🔍 Busca Avançada e Inteligência Adaptativa

O portal permite a busca de **qualquer termo educacional** do Ensino Básico (EI e EF).
* **Mapeamento Curado (Premium):** Se a habilidade já foi mapeada manualmente (como Batalha Naval para Plano Cartesiano), o card exibirá esta atividade detalhada de referência.
* **Mapeamento Adaptativo:** Se o termo pesquisado pertencer a qualquer outra das 1.397 habilidades da BNCC ainda sem mapeamento manual, o motor em JavaScript gera em tempo real uma proposta de integração desplugada e plugada (Scratch, Code.org ou PhET) matematicamente e pedagogicamente apropriada para o ano/série e matéria da aula.

---

## ⚙️ Como Utilizar

### Executando Localmente (Offline)
1. Baixe o código do repositório como ZIP (ou clone o repositório).
2. Extraia a pasta em seu computador.
3. Dê um **duplo clique** no arquivo `index.html`. O portal abrirá instantaneamente em seu navegador padrão.

### Hospedando no GitHub Pages (Online)
Como é um portal 100% estático, para publicá-lo online gratuitamente basta:
1. Enviar o código para o seu repositório no GitHub: `https://github.com/marcelohas/transversalidadeBNCC`
2. Acessar as **Configurações (Settings)** do repositório.
3. Ir até a aba **Pages** (no menu lateral esquerdo).
4. Em *Build and deployment*, selecionar a branch `main` e a pasta `/root`.
5. Salvar. Em poucos minutos, o GitHub fornecerá um link público (ex: `https://marcelohas.github.io/transversalidadeBNCC/`).

---

## 🖨️ Funcionalidade de Impressão (Ficha de Aula)

O portal possui estilos CSS otimizados para impressão (`@media print`):
* **Imprimir Tudo:** O botão "Imprimir Tudo" oculta cabeçalhos, barras de pesquisa e filtros, formatando todas as habilidades filtradas em folhas A4 limpas prontas para anexar a planejamentos físicos.
* **Imprimir Plano Individual:** Cada card possui o botão "Imprimir Plano", que isola apenas aquele card na folha de impressão, gerando uma ficha individual de plano de aula transversal para o professor regente.

## 👥 Contato e Canais (Tchelo)

Se você tem dúvidas, sugestões ou quer acompanhar mais discussões sobre educação e tecnologia, conecte-se aos meus canais oficiais:
*   **LinkedIn:** [linkedin.com/in/tcheloparaprofessores](https://www.linkedin.com/in/tcheloparaprofessores/)
*   **YouTube:** [youtube.com/@TcheloParaProfessores](https://www.youtube.com/@TcheloParaProfessores)
*   **Instagram:** [@tcheloeduca](https://www.instagram.com/tcheloeduca/)

---

## 🤝 Como Contribuir
Se você deseja adicionar mais habilidades mapeadas, corrigir links ou enviar novos exemplos de atividades desplugadas:
1. Faça um Fork do repositório oficial.
2. Adicione os itens na lista `BNCC_DATABASE` dentro do arquivo `js/database.js` seguindo o padrão estruturado.
3. Envie um Pull Request!
