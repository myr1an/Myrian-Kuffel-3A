const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com a chegada da IA, como você imagina o futuro?",
        alternativas: [
            {
                texto: "Revolucionário!",
                afirmacao: "Acha que iso realmente irá ajudar no futuro."
            },
            {
                texto: "Um pouco preocupante!",
                afirmacao: "Tem medo de como o IA irá influenciar as pessoas."
            }
        ]
    },
    {
        enunciado: "Como você deve saber, existe meios de criar imagens IA, você acha que isso deve afetar no futuro?",
        alternativas: [
            {
                texto:  "Não, é nada demais, são apenas imagens.",
                afirmacao: "Acha que o IA não representa muito perigo."
            },
            {
                texto: "Sim, consigo ver problemas futuro nisto.",
                afirmacao: "Consegue ver algumas falhas nesta ferramenta."
            }
        ]
    },
    {
        enunciado: "A IA pode ajudar o mercado de trabalho?",
        alternativas: [
            {
                texto: "Pode! Isso poderá ajudar as empresas a fazer as coisas futuramente.",
                afirmacao: "Isso facilitará as empressas à empreenderem com mais facilidade"
            },
            {
                texto: "Me preocupo com a perda de trabalho por conta deste meio.",
                afirmacao: "Coma chegada da IA isso poderá causar grandes impactos no mundo de trabalho."
            }
        ]
    },
    {
        enunciado: "Como você vê os artistas, tendo em vista do crescimento e evolução da IA?",
        alternativas: [
            {
                texto:    "Em meu ver, as artes irão ficar desvalorizadas por conta da evolução crescente da IA.",
                afirmacao: "Com a facilidade de fazer algo com o IA, os artistas serão descartados por ser considerado perda de dinheiro e tempo."
            },
            {
                texto:  "Em meu ver, isso não é de muita importância, não é algo grave.",
                afirmacao: "Não será de grande mudança, os artistas irão ser recomhcidos do jeito que é atualmente.",
            }
        ]
    },
    {
        enunciado: "Suponhamos que você é um atista lá no futuro, e você vê pessoas usando IA para vender artes e ilustrações iguais ao que você realiza, o que você faz?",
        alternativas: [
            {
                texto:  "Eu recorro à ações judiciais por págio contra a empresa que fundou a IA e à pessoa que à utiliza.",
                afirmacao: "Sou à favor de que a justiça seja feita do jeito certo."
            },
            {
                texto:  "Não irei ligar para isso e apenas ignorar, devo me acostumar ao mundo moderno.",
                afirmacao: "Iso é apenas algo bobo, não causará nenhum dano para nenhum lado. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
