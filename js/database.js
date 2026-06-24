/**
 * Banco de Dados de Computação Transversal na BNCC
 * Contém o mapeamento de habilidades tradicionais da BNCC com as do Complemento de Computação.
 * Inclui atividades tradicionais, desplugadas e links para plataformas parceiras reais.
 */

const BNCC_DATABASE = [
  // --- EDUCAÇÃO INFANTIL ---
  {
    id: "EI03ET05_CO",
    segmento: "Educação Infantil",
    ano: "Grupo de 4 a 5 anos (Pré-escola)",
    componente: "Espaços, Tempos, Quantidades, Relações",
    habilidade_bncc: {
      codigo: "EI03ET05",
      descricao: "Classificar objetos e figuras de acordo com suas semelhanças e diferenças."
    },
    atividade_tradicional: "Separar blocos lógicos por cor (azul/vermelho) ou por forma geométrica (círculo/quadrado) em mesas separadas.",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EI03CO01",
      descricao: "Reconhecer e organizar padrões em sequências de objetos."
    },
    atividade_desplugada: "Brincadeira de roda 'Siga o Padrão': O professor inicia uma sequência visual no chão com blocos de montar (Ex: azul, verde, azul, verde). As crianças devem continuar a sequência e, depois, criar sequências com movimentos corporais (Ex: bater palmas, bater o pé, bater palmas, bater o pé).",
    atividade_plugada: {
      plataforma: "Code.org",
      titulo: "Arrastar e Soltar (Prática de Padrões e Coordenação)",
      url: "https://studio.code.org/s/coursea-2023"
    }
  },

  // --- ENSINO FUNDAMENTAL - ANOS INICIAIS ---
  {
    id: "EF12LP04_CO",
    segmento: "Ensino Fundamental - Anos Iniciais",
    ano: "1º e 2º Ano",
    componente: "Língua Portuguesa",
    habilidade_bncc: {
      codigo: "EF12LP04",
      descricao: "Ler e compreender, em colaboração com os colegas e com a ajuda do professor, receitas, instruções de montagem, regras de jogos, instruções de uso, etc."
    },
    atividade_tradicional: "Ler uma receita simples de bolo de caneca em conjunto com a turma e ordenar as etapas da preparação no caderno.",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF01CO02",
      descricao: "Identificar e seguir uma sequência de passos para a resolução de um problema."
    },
    atividade_desplugada: "Jogo do 'Robô Humano': Um aluno é o programador e outro é o robô. O programador usa cartões de direção (passo à frente, vire à direita) para guiar o robô através de um caminho com obstáculos na sala. Se o robô bater, o aluno precisa ler e depurar (corrigir) sua sequência de cartões.",
    atividade_plugada: {
      plataforma: "Code.org",
      titulo: "Programação na Abelha (Algoritmos Sequenciais)",
      url: "https://studio.code.org/s/courseb-2023/lessons/4"
    }
  },
  {
    id: "EF01MA01_CO",
    segmento: "Ensino Fundamental - Anos Iniciais",
    ano: "1º Ano",
    componente: "Matemática",
    habilidade_bncc: {
      codigo: "EF01MA01",
      descricao: "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação."
    },
    atividade_tradicional: "Contar os materiais escolares presentes no estojo (lápis, borracha) ou os alunos sentados na sala de aula, anotando a quantidade.",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF01CO01",
      descricao: "Organizar objetos físicos ou digitais por características, semelhanças e diferenças."
    },
    atividade_desplugada: "Mapeamento Manual: O professor pede para a turma agrupar lápis de cor por tamanho (grande, médio, pequeno) ou por tonalidade, anotando em uma tabela em papel as quantidades de cada grupo. Ajuda a entender a classificação de dados.",
    atividade_plugada: {
      plataforma: "Khan Academy",
      titulo: "Contar com objetos (Prática Interativa de Contagem)",
      url: "https://pt.khanacademy.org/math/pt-1-ano/numeros-de-0-a-10-1ano"
    }
  },
  {
    id: "EF03MA15_CO",
    segmento: "Ensino Fundamental - Anos Iniciais",
    ano: "3º Ano",
    componente: "Matemática",
    habilidade_bncc: {
      codigo: "EF03MA15",
      descricao: "Associar figuras geométricas espaciais a suas planificações e analisar suas características."
    },
    atividade_tradicional: "Montar cubos, cilindros e prismas de papel a partir de moldes impressos em 2D, contando faces, arestas e vértices.",
    eixo_computacao: "Mundo Digital",
    habilidade_computacao: {
      codigo: "EF03CO03",
      descricao: "Compreender que representações digitais podem modelar objetos do mundo real."
    },
    atividade_desplugada: "Construção de maquetes físicas de casas ou robôs utilizando sólidos geométricos (caixas vazias). O aluno desenha a planta baixa em papel quadriculado, mapeando o modelo 3D físico em uma representação 2D.",
    atividade_plugada: {
      plataforma: "Scratch",
      titulo: "Desenhando com Geometria (Uso da Caneta Scratch para Formas 3D/2D)",
      url: "https://scratch.mit.edu/projects/editor/?tutorial=getstarted"
    }
  },
  {
    id: "EF04MA02_CO",
    segmento: "Ensino Fundamental - Anos Iniciais",
    ano: "4º Ano",
    componente: "Matemática",
    habilidade_bncc: {
      codigo: "EF04MA02",
      descricao: "Mostrar, por decomposição e composição, que todo número natural pode ser escrito por meio de adições e multiplicações por potências de dez."
    },
    atividade_tradicional: "Decompor o número 3452 no caderno como: (3 x 1000) + (4 x 100) + (5 x 10) + (2 x 1).",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF04CO01",
      descricao: "Decompor problemas complexos em partes menores e mais fáceis de gerenciar (Decomposição)."
    },
    atividade_desplugada: "Decomposição de Problema Escolar: O professor propõe um problema complexo como 'Como organizar uma gincana de matemática na escola?'. A turma deve quebrar esse problema gigante em partes menores (Ex: 1. Definir data, 2. Criar perguntas, 3. Organizar equipes, 4. Conseguir brindes), assimilando o conceito de decomposição.",
    atividade_plugada: {
      plataforma: "Khan Academy",
      titulo: "Decomposição de Números até 10.000 (Exercícios Práticos)",
      url: "https://pt.khanacademy.org/math/pt-4-ano/numeros-sistema-de-numeracao-decimal-4ano"
    }
  },
  {
    id: "EF05MA06_CO",
    segmento: "Ensino Fundamental - Anos Iniciais",
    ano: "5º Ano",
    componente: "Matemática",
    habilidade_bncc: {
      codigo: "EF05MA06",
      descricao: "Associar as representações 10%, 25%, 50%, 75% e 100% respectivamente à décima parte, quarta parte, metade, três quartos e ao todo, para resolver problemas cotidianos que envolvam o cálculo de porcentagem."
    },
    atividade_tradicional: "Calcular 25% de R$ 200,00 no caderno utilizando regra de três simples ou frações correspondentes.",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF05CO05",
      descricao: "Utilizar ferramentas de representação lógica de dados e frações/porcentagens de dados para analisar cenários."
    },
    atividade_desplugada: "Frações de Chocolate Físico: O professor distribui barras de chocolate de papel divididas em 10 fatias. Os alunos simulam o cálculo de frações e porcentagem de distribuição lógicas de recursos entre grupos (Ex: 'Se eu der 5 fatias para a equipe A, qual a porcentagem que restou para a B?').",
    atividade_plugada: {
      plataforma: "PhET Simulations",
      titulo: "Introdução a Proporções e Frações Dinâmicas (Modelagem Visual)",
      url: "https://phet.colorado.edu/pt_BR/simulations/fractions-intro"
    }
  },
  {
    id: "EF05MA15_CO",
    segmento: "Ensino Fundamental - Anos Iniciais",
    ano: "5º Ano",
    componente: "Matemática",
    habilidade_bncc: {
      codigo: "EF05MA15",
      descricao: "Interpretar, descrever e representar a localização ou movimentação de objetos no plano cartesiano (1º quadrante), utilizando coordenadas cartesianas, indicando mudanças de direção e de sentido e giros."
    },
    atividade_tradicional: "Desenhar um plano cartesiano no caderno quadriculado e plotar coordenadas de pontos dadas pelo professor (ex: A=(2,3), B=(4,1)) para ligá-los e formar figuras.",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF05CO01",
      descricao: "Utilizar conceitos de coordenadas e direções no plano bidimensional para construir sequências lógicas de movimentação (algoritmos espaciais)."
    },
    atividade_desplugada: "Batalha Naval no Plano Cartesiano: Os alunos jogam em duplas utilizando malhas quadriculadas como plano cartesiano. Eles devem ditar as coordenadas do tiro (Ex: 'Fogo em X=3, Y=5') usando a notação correta de pares ordenados, exercitando localização espacial sem telas.",
    atividade_plugada: {
      plataforma: "Scratch",
      titulo: "Programando o Gato Scratch no Plano X-Y (Coordenadas de Movimento)",
      url: "https://scratch.mit.edu/projects/editor/?tutorial=getstarted"
    }
  },
  {
    id: "EF04CI04_CO",
    segmento: "Ensino Fundamental - Anos Iniciais",
    ano: "4º Ano",
    componente: "Ciências",
    habilidade_bncc: {
      codigo: "EF04CI04",
      descricao: "Analisar e construir cadeias alimentares simples, reconhecendo a posição ocupada pelos seres vivos que a compõem e o papel do Sol como fonte primária de energia."
    },
    atividade_tradicional: "Desenhar um ecossistema simples com setas indicando o fluxo de energia dos produtores aos consumidores primários, secundários e decompositores.",
    eixo_computacao: "Pensamento Computacional / Mundo Digital",
    habilidade_computacao: {
      codigo: "EF04CO03",
      descricao: "Criar modelos lógicos simples para simular fluxos sequenciais e cadeias de dependência de dados ou recursos."
    },
    atividade_desplugada: "Jogo do Barbante Ecológico: Alunos com crachás de seres vivos conectam-se usando fios de barbante para simular o fluxo de energia. O professor 'desliga' um nó do sistema (Ex: poluição elimina insetos) e os alunos observam fisicamente como toda a rede é afetada (decomposição de redes e depuração lógica de erros).",
    atividade_plugada: {
      plataforma: "PhET Simulations",
      titulo: "Seleção Natural e Ecossistemas Dinâmicos (Modelagem Simulada)",
      url: "https://phet.colorado.edu/pt_BR/simulations/natural-selection"
    }
  },

  // --- ENSINO FUNDAMENTAL - ANOS FINAIS ---
  {
    id: "EF06MA14_CO",
    segmento: "Ensino Fundamental - Anos Finais",
    ano: "6º Ano",
    componente: "Matemática",
    habilidade_bncc: {
      codigo: "EF06MA14",
      descricao: "Admitir a necessidade de regras para as quatro operações e resolver problemas usando a hierarquia das operações."
    },
    atividade_tradicional: "Resolver expressões numéricas complexas no caderno (Ex: 5 + 3 x (8 - 2)), aplicando as regras de precedência matemática.",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF06CO02",
      descricao: "Identificar, analisar e criar algoritmos com variáveis e operadores aritméticos e lógicos."
    },
    atividade_desplugada: "Algoritmo de Prioridades: Alunos em grupo criam cartões com valores e cartões de operação/condição. Eles criam um 'organograma de fluxo' no quadro ou papel craft para demonstrar que o caminho para calcular muda dependendo dos parênteses, simulando uma máquina lógica.",
    atividade_plugada: {
      plataforma: "Khan Academy",
      titulo: "Precedência das Operações (Aritmética Básica)",
      url: "https://pt.khanacademy.org/math/pt-6-ano/aritmetica-e-numeros-negativos-6ano"
    }
  },
  {
    id: "EF06CI02_CO",
    segmento: "Ensino Fundamental - Anos Finais",
    ano: "6º Ano",
    componente: "Ciências",
    habilidade_bncc: {
      codigo: "EF06CI02",
      descricao: "Associar a produção de medicamentos e outros materiais ao desenvolvimento científico e tecnológico."
    },
    atividade_tradicional: "Escrever um texto sobre a evolução dos antibióticos e das vacinas desde a descoberta da penicilina até os dias atuais.",
    eixo_computacao: "Mundo Digital",
    habilidade_computacao: {
      codigo: "EF06CO05",
      descricao: "Compreender como a computação e a simulação de sistemas biológicos auxiliam o desenvolvimento científico."
    },
    atividade_desplugada: "Modelagem de Epidemias: Jogo de tabuleiro desplugado simulando a disseminação de um vírus. Cada rodada representa uma decisão (tomar remédio, isolar-se, usar máscara) e os alunos jogam dados para computar a taxa de contágio baseada nas variáveis de saúde.",
    atividade_plugada: {
      plataforma: "PhET Simulations",
      titulo: "Simulando Estados da Matéria e Moléculas (Ciência de Materiais)",
      url: "https://phet.colorado.edu/pt_BR/simulations/states-of-matter"
    }
  },
  {
    id: "EF07MA04_CO",
    segmento: "Ensino Fundamental - Anos Finais",
    ano: "7º Ano",
    componente: "Matemática",
    habilidade_bncc: {
      codigo: "EF07MA04",
      descricao: "Resolver e elaborar problemas que envolvam frações, associando-as ao significado de parte de inteiros, quociente, razão e operador."
    },
    atividade_tradicional: "Representar frações pintando fatias de pizza desenhadas em papel e resolver problemas de soma e subtração de frações de denominadores diferentes.",
    eixo_computacao: "Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF07CO01",
      descricao: "Criar modelos computacionais abstratos para representar relações proporcionais e de divisão."
    },
    atividade_desplugada: "Divisão lógica de tarefas: Os alunos criam diagramas de blocos que mostram a partilha de recursos comuns em um projeto escolar (tempo de apresentação, espaço físico), dividindo o todo em partes e frações lógicas.",
    atividade_plugada: {
      plataforma: "PhET Simulations",
      titulo: "Introdução a Frações (Simulação Interativa Visual)",
      url: "https://phet.colorado.edu/pt_BR/simulations/fractions-intro"
    }
  },
  {
    id: "EF08GE18_CO",
    segmento: "Ensino Fundamental - Anos Finais",
    ano: "8º Ano",
    componente: "Geografia",
    habilidade_bncc: {
      codigo: "EF08GE18",
      descricao: "Analisar o impacto do desenvolvimento científico e tecnológico na distribuição de riquezas, na divisão internacional do trabalho e nas modificações no espaço geográfico."
    },
    atividade_tradicional: "Leitura do livro didático sobre a transição da manufatura para a indústria maquinofaturada, seguido de questionário escrito sobre o êxodo rural.",
    eixo_computacao: "Cultura Digital",
    habilidade_computacao: {
      codigo: "EF08CO08",
      descricao: "Discutir os impactos sociais, culturais e econômicos das tecnologias digitais de informação e comunicação."
    },
    atividade_desplugada: "Painel de Debate 'Trabalho do Futuro': Roda de conversa estruturada com papéis sorteados (sindicalista, empresário da tecnologia, trabalhador industrial, agricultor). Debate-se o impacto da automação por IA no desemprego e na economia dos países em desenvolvimento.",
    atividade_plugada: {
      plataforma: "Khan Academy",
      titulo: "A Revolução Industrial e Tecnológica (Curso de História e Sociedade)",
      url: "https://pt.khanacademy.org/humanities/global-studies/world-history-projection"
    }
  },
  {
    id: "EF09CI11_CO",
    segmento: "Ensino Fundamental - Anos Finais",
    ano: "9º Ano",
    componente: "Ciências",
    habilidade_bncc: {
      codigo: "EF09CI11",
      descricao: "Discutir a evolução e a diversidade das espécies com base na seleção natural e em evidências fósseis."
    },
    atividade_tradicional: "Fazer desenhos comparativos do bico dos tentilhões de Galápagos observados por Darwin e responder perguntas sobre a adaptação ao meio ambiente.",
    eixo_computacao: "Mundo Digital / Pensamento Computacional",
    habilidade_computacao: {
      codigo: "EF09CO04",
      descricao: "Modelar e executar simulações de processos naturais complexos para avaliar hipóteses ecológicas."
    },
    atividade_desplugada: "Simulação Desplugada de Predação: Alunos usam prendedores de tamanhos variados para catar feijões no chão. A cada rodada, os bicos menos eficientes 'não sobrevivem' e as características dos sobreviventes são registradas em cartazes, simulando a lógica da seleção natural por meio de regras computáveis.",
    atividade_plugada: {
      plataforma: "PhET Simulations",
      titulo: "Seleção Natural (Laboratório Ecológico Interativo)",
      url: "https://phet.colorado.edu/pt_BR/simulations/natural-selection"
    }
  },

  // --- ENSINO MÉDIO ---
  {
    id: "EM13CNT301_CO",
    segmento: "Ensino Médio",
    ano: "1º ao 3º Ano",
    componente: "Ciências da Natureza",
    habilidade_bncc: {
      codigo: "EM13CNT301",
      descricao: "Construir questões, elaborar hipóteses, previsões e estimativas, empregar instrumentos de medição e representar e interpretar modelos explicativos, dados e/ou resultados experimentais para construir argumentação..."
    },
    atividade_tradicional: "Anotar o tempo de oscilação de um pêndulo simples usando um cronômetro e calcular a aceleração da gravidade média manualmente no papel.",
    eixo_computacao: "Pensamento Computacional / Mundo Digital",
    habilidade_computacao: {
      codigo: "EM13CO03",
      descricao: "Coletar, estruturar, analisar e representar dados utilizando ferramentas digitais para testar hipóteses, prever tendências e apoiar a tomada de decisões."
    },
    atividade_desplugada: "Análise Cidadã de Dados da Escola: Coleta manual de dados sobre a geração de resíduos plásticos da escola durante uma semana. Em sala, os alunos usam cartões para ordenar e filtrar os dados manuais, desenhando gráficos de tendências em cartolinas para apresentar medidas de redução ao diretor.",
    atividade_plugada: {
      plataforma: "PhET Simulations",
      titulo: "Laboratório de Força da Gravidade (Modelagem Matemática Dinâmica)",
      url: "https://phet.colorado.edu/pt_BR/simulations/gravity-force-lab-basics"
    }
  }
];
