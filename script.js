const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma aula sobre ecossistemas, sua professora fala sobre relações ecológicas entre os seres vivos. O que mais te chama atenção?",
        alternativas: [
            {
                texto: "As relações de mutualismo, onde todos se beneficiam.",
                afirmacao: "Você se interessou por como diferentes espécies colaboram entre si para sobreviver. "
            },
            {
                texto: "As relações de competição e predação, que mostram os desafios da natureza.",
                afirmacao: "Você ficou fascinado com as disputas naturais e como os organismos precisam lutar por espaço e alimento. "
            }
        ]
    },
    {
        enunciado: "Na semana seguinte, a turma vai até um parque para observar um ecossistema de perto. O que você decide observar com mais atenção?",
        alternativas: [
            {
                texto: "As plantas e como se adaptam ao ambiente ao redor.",
                afirmacao: "Você ficou encantado com as estratégias das plantas para captar luz, armazenar água e se defender. "
            },
            {
                texto: "Os insetos e pequenos animais que vivem no solo e nas árvores.",
                afirmacao: "Você percebeu que até os menores seres têm papéis fundamentais no equilíbrio ecológico. "
            }
        ]
    },
    {
        enunciado: "Durante o passeio, o guia fala sobre desequilíbrios ambientais. Qual é sua reação?",
        alternativas: [
            {
                texto: "Começa a pensar em formas de reduzir seu impacto ambiental no dia a dia.",
                afirmacao: "Decidiu repensar hábitos como o uso de plástico e passou a incentivar a reciclagem entre os colegas. "
            },
            {
                texto: "Fica preocupado, mas acha que as grandes empresas têm mais responsabilidade.",
                afirmacao: "Você entendeu que a pressão sobre empresas e governos também é essencial para proteger o planeta. "
            }
        ]
    },
    {
        enunciado: "Para fechar o projeto de ecologia, a professora pede que cada grupo faça um cartaz educativo. O que seu grupo escolhe?",
        alternativas: [
            {
                texto: "Falar sobre a importância da biodiversidade.",
                afirmacao: "Vocês mostraram como cada ser vivo é essencial para o equilíbrio da vida na Terra. "
            },
            {
                texto: "Alertar sobre os perigos do desmatamento.",
                afirmacao: "Vocês destacaram como a destruição de florestas afeta o clima e coloca espécies em risco. "
            }
        ]
    },
    {
        enunciado: "No fim do projeto, a escola faz uma feira científica. Seu grupo precisa explicar o tema para crianças do ensino fundamental. Como vocês fazem isso?",
        alternativas: [
            {
                texto: "Usam desenhos e jogos para explicar as relações ecológicas.",
                afirmacao: "Descobriu que ensinar com criatividade ajuda até os mais novos a entenderem a importância da natureza. "
            },
            {
                texto: "Montam uma maquete interativa de um ecossistema.",
                afirmacao: "A maquete chamou atenção e ajudou as crianças a visualizarem como tudo está conectado. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada pela ecologia...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
