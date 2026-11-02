/* ========================================================= */
/* BASE DE DADOS DOS JOGOS                                   */
/* ========================================================= */
/*
    Para adicionar novos jogos basta criar
    um novo objeto seguindo o mesmo padrão.
*/

const jogos = [

    {
        id: 1,
        titulo: "Desenha Mundo",
        descricao: "Você já imaginou entrar em uma aventura usando os seus próprios desenhos? Em Desenha Mundo, cada traço pode ajudar seu herói a superar obstáculos, atravessar rios e enfrentar desafios incríveis. Use o mouse ou o dedo para desenhar soluções e descobrir como sua criatividade pode transformar o jogo. Será que você consegue vencer o Guardião das Cores?\n\nProfessor\nÁrea: Português e Matemática\nHabilidades: alfabetização, lógica e percepção visual\nDiferenciais: variedade de atividades e fase bônus",
        imagem: "imagem/1.gif",
        audio: "voz/audio1.m4a",
        link: "https://projetoharpia.vercel.app/Tentacle/public/index.html"
    },

    {
        id: 2,
        titulo: "Math Quiz",
        descricao: "Você gosta de desafios matemáticos? Então prepare-se para testar seus conhecimentos! Resolva contas, avance pelas fases, ganhe estrelas e suba no ranking dos melhores jogadores. Cada desafio vencido leva você para níveis cada vez mais difíceis. Será que você consegue chegar ao topo?\n\nProfessor\n Área: Matemática\n Habilidades: cálculo mental e raciocínio lógico\n Diferenciais: 5 níveis, estrelas e ranking",
        imagem: "imagem/2.gif",
        audio: "voz/audio2.m4a",
        link: "https://v0-deploy-de-projeto-two.vercel.app/index.html"
    },

    {
        id: 3,
        titulo: "Jornada das Estrelas",
        descricao: "Você consegue encontrar a cor certa? Na Jornada das Estrelas, sua missão é observar com atenção e localizar as cores indicadas entre diferentes opções. As fases ficam mais desafiadoras conforme você avança, mas tudo acontece no seu ritmo. E se preferir um ambiente mais tranquilo, basta ativar o Modo Calmo.\n\nProfessor\nÁrea: Atenção e Percepção Visual\nHabilidades: identificação de cores, concentração e percepção visual\nDiferenciais: Modo Calmo e acessibilidade para crianças com TEA",
        imagem: "imagem/3.gif",
        audio: "voz/audio3.m4a",
        link: "https://projeto-itinerario-2026.vercel.app/"
    },

    {
        id: 4,
        titulo: "Animations Kid",
        descricao: "Quer escolher sua próxima brincadeira? Aqui você encontra vários jogos para se divertir do seu jeito: cobrinha, jogo da velha, memória, empilhar blocos, dado interativo e muito mais. Todos contam com áudio-descrição e opções para ativar ou desativar os sons. Qual deles você vai experimentar primeiro?\n\nProfessor\nÁrea: Desenvolvimento Cognitivo\nHabilidades: atenção, memória, coordenação e interação\nDiferenciais: áudio-descrição, controle de sons e recursos inclusivos",
        imagem: "imagem/4.gif",
        audio: "voz/audio4.m4a",
        link: "https://animations-kids.vercel.app/"
    },

    {
        id: 5,
        titulo: "A Mochila do Max",
        descricao: "Você consegue descobrir o que o Max está pensando? Observe com atenção as pistas e escolha os objetos que devem ir para a mochila do nosso amigo cachorrinho. Cada escolha é uma nova descoberta e você pode jogar sem pressa, explorando os desafios no seu próprio ritmo. Vamos ajudar o Max? \n \n Professor\n Área: Atenção e raciocínio lógico\n Habilidades: observação e tomada de decisão\n Diferenciais: ruído branco opcional e ambiente acolhedor",
        imagem: "imagem/5.gif",
        audio: "voz/audio5.m4a",
        link: "https://jogo-do-cachorro-max.vercel.app/"
    },

    {
        id: 6,
        titulo: "Eco Game",
        descricao: "Você está pronto para se tornar um Guardião do Planeta? Escolha entre três aventuras diferentes: testar sua memória, cuidar de cidades sustentáveis ou mostrar que é um craque da reciclagem. Cada desafio ensina novas formas de proteger a natureza enquanto você se diverte. Qual missão você vai escolher primeiro? \n \n Professor\n Área: Educação Ambiental\n Habilidades: sustentabilidade e consciência ecológica\n Diferenciais: três mini-jogos com abordagens diferentes",
        imagem: "imagem/6.gif",
        audio: "voz/audio6.m4a",
        link: "https://game-educativo.vercel.app/"
    },

    {
        id: 7,
        titulo: "Letrola",
        descricao: "Você consegue ajudar os animais a preparar a grande Festa da Selva? Viaje por mundos coloridos, encontre letras, forme palavras e complete desafios ao lado de personagens muito divertidos. Cada fase traz uma nova descoberta e ajuda você a conhecer melhor o universo das letras. Vamos começar essa aventura? \n \n Professor\n Área: Alfabetização\n Habilidades: reconhecimento de letras e formação de palavras\n Diferenciais: múltiplos desafios e progressão por mundos",
        imagem: "imagem/7.gif",
        audio: "voz/audio7.m4a",
        link: "https://letrola.vercel.app/"
    },

    {
        id: 8,
        titulo: "Mundo Novo",
        descricao: "Que tal viajar pelo espaço em busca de conhecimento? Em Mundo Novo, você assume o papel de um astronauta e enfrenta missões cheias de desafios. Forme palavras, descubra letras, resolva enigmas matemáticos, monte quebra-cabeças e explore formas geométricas para ganhar créditos e avançar na jornada. Será que você consegue desbloquear a fase secreta? \n \n Professor\n Área: Português e Matemática\n Habilidades: alfabetização, lógica e percepção visual\n Diferenciais: variedade de atividades e fase bônus",
        imagem: "imagem/8.gif",
        audio: "voz/audio8.m4a",
        link: "https://aqua-games-a8r8.vercel.app/"
    },

    {
        id: 9,
        titulo: "Magic Run",
        descricao: "Você tem reflexos rápidos? Corra pela floresta, desvie de obstáculos, pule pedras, evite o fogo e colete corações e frutas pelo caminho. Cada fase traz novos desafios e exige atenção para tomar decisões rápidas. Será que você consegue desbloquear a fase secreta? \n \n Professor\n Área: Funções executivas\n Habilidades: atenção, reflexo e tomada de decisão\n Diferenciais: progressão por fases e ranking",
        imagem: "imagem/9.gif",
        audio: "voz/audio9.m4a",
        link: "https://wishy-kappa.vercel.app/"
    },

    {
        id: 10,
        titulo: "Sílabas Mágicas",
        descricao: "Você está pronto para uma caça às sílabas? Explore um mundo encantado, encontre sílabas escondidas e complete palavras para ajudar personagens em suas aventuras. Quanto mais desafios você vencer, mais moedinhas ganhará para personalizar seu personagem. Vamos descobrir quantas palavras você consegue formar? \n \n Professor\n Área: Alfabetização\n Habilidades: consciência silábica e formação de palavras\n Diferenciais: moedas, personalização e progressão",
        imagem: "imagem/10.gif",
        audio: "voz/audio10.m4a",
        link: "https://silaba-magica.vercel.app/login.html"
    },

    {
        id: 11,
        titulo: "Wordventure",
        descricao: "Você consegue completar todos os desafios? Junte sílabas, descubra letras iniciais, resolva problemas matemáticos e avance por fases cheias de surpresas. Cada desafio vencido abre caminho para o próximo, até que você desbloqueie uma fase bônus especial. Será que você consegue chegar ao final? \n \n Professor\n Área: Português e Matemática\n Habilidades: alfabetização e resolução de problemas\n Diferenciais: progressão por desafios e fase bônus",
        imagem: "imagem/11.gif",
        audio: "voz/audio11.m4a",
        link: "https://wordventure.vercel.app/"
    },

    {
        id: 12,
        titulo: "Ilha do Saber",
        descricao: "Você aceita explorar uma ilha cheia de números? Ao lado do macaco Tico, você vai contar, somar, subtrair, multiplicar e dividir enquanto descobre novos lugares e enfrenta desafios matemáticos. Cada etapa traz uma nova aventura e mais aprendizado. Vamos ver se você consegue se tornar o mestre da Ilha do Saber? \n \n Professor\n Área: Matemática\n Habilidades: operações básicas e raciocínio lógico\n Diferenciais: narrativa gamificada e progressão por fases",
        imagem: "imagem/12.gif",
        audio: "voz/audio12.m4a",
        link: "https://yanlu0104.github.io/Repositorio-vercel/"
    },

    {
        id: 13,
        titulo: "Soma AI",
        descricao: "Você consegue completar a cruzadinha dos números? Arraste os números corretos para resolver operações matemáticas e preencher todos os espaços do tabuleiro. Use suas vidas com sabedoria e tente concluir cada desafio cometendo o menor número possível de erros. Pronto para testar sua estratégia? \n \n Professor\n Área: Matemática\n Habilidades: quatro operações e raciocínio lógico\n Diferenciais: mecânica de cruzadinha matemática e sistema de vidas",
        imagem: "imagem/13.gif",
        audio: "voz/audio13.m4a",
        link: "https://somaai.vercel.app/"
    },

    {
        id: 14,
        titulo: "Memoriletra",
        descricao: "Sua memória está preparada para este desafio? Encontre os pares corretos, descubra figuras coloridas e associe imagens às palavras correspondentes. A cada nova fase, você aprende mais e pode acompanhar seu progresso para tentar superar seus próprios resultados. Vamos começar? \n \n Professor\n Área: Alfabetização\n Habilidades: memória, associação e vocabulário\n Diferenciais: progressão por fases e acompanhamento de desempenho",
        imagem: "imagem/14.gif",
        audio: "voz/audio14.m4a",
        link: "https://projeto-vercel-9jqc.vercel.app/"
    },

    {
        id: 15,
        titulo: "Just Dreams",
        descricao: "Você já pensou no que gostaria de ser quando crescer? Explore profissões como médico, bombeiro, detetive, chef de cozinha, pintor e advogado enquanto enfrenta desafios inspirados em cada carreira. Ganhe pontos, personalize seu avatar e descubra novas possibilidades para o futuro. E lembre-se: fazer pausas também faz parte de um bom jogador! \n \n Professor\n Área: Projeto de Vida\n Habilidades: empatia, responsabilidade e exploração de profissões\n Diferenciais: incentivo a hábitos saudáveis durante o uso dos jogos",
        imagem: "imagem/15.gif",
        audio: "voz/audio15.m4a",
        link: "https://play-tech-games.vercel.app/"
    },

    {
        id: 16,
        titulo: "Math Game",
        descricao: "Você consegue resolver as contas antes que o tempo acabe? Encare desafios de soma, subtração, multiplicação e divisão enquanto tenta fazer a maior pontuação possível. Conforme você avança, o tempo fica mais curto e os desafios mais difíceis. Será que você consegue acompanhar o ritmo? \n \n Professor\n Área: Matemática\n Habilidades: cálculo mental e agilidade de raciocínio\n Diferenciais: dificuldade progressiva e limite de tempo",
        imagem: "imagem/16.gif",
        audio: "voz/audio16.m4a",
        link: "https://math-game-lime-six.vercel.app/"
    }

];


/* ========================================================= */
/* CRIAR TODOS OS CARDS                                      */
/* ========================================================= */

function criarCards() {

    const container = document.getElementById("games-container");

    if (!container) {
        console.error("Container dos jogos não encontrado.");
        return;
    }

    jogos.forEach(jogo => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `

            <a href="${jogo.link}" target="_blank">

                <img
                    src="${jogo.imagem}"
                    alt="${jogo.titulo}">

                <h3>${jogo.titulo}</h3>

            </a>

            <div class="card-buttons">

                <a
                    href="${jogo.link}"
                    target="_blank"
                    class="play-link">

                    <button class="play-btn">
                        🎮 Jogar
                    </button>

                </a>

                <button
                    class="info-btn"
                    onclick="abrirPopup(${jogo.id})">

                    🤔 O que é?

                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


/* ========================================================= */
/* ABRIR POPUP                                               */
/* ========================================================= */

/*function abrirPopup(id) {

    const jogo = jogos.find(jogo => jogo.id === id);

    if (!jogo) {
        console.error("Jogo não encontrado.");
        return;
    }

    document.getElementById("popup-titulo").textContent =
        jogo.titulo;

    document.getElementById("popup-descricao").textContent =
        jogo.descricao;

    const audio = document.getElementById("popup-audio");

    audio.src = jogo.audio;

    document.getElementById("popup").style.display =
        "flex";
}
*/
function abrirPopup(id) {

    const jogo = jogos.find(jogo => jogo.id === id);

    if (!jogo) return;

    document.getElementById("popup-titulo").textContent =
        jogo.titulo;

    document.getElementById("popup-descricao").textContent =
        jogo.descricao;

    const audio =
        document.getElementById("popup-audio");

    audio.pause();
    audio.currentTime = 0;

    audio.src = jogo.audio;

    document.getElementById("popup").style.display =
        "flex";

    /* Reprodução automática */

    audio.load();

    audio.play()
        .catch(erro => {
            console.log(
                "Reprodução automática bloqueada:",
                erro
            );
        });
}

/* ========================================================= */
/* FECHAR POPUP                                              */
/* ========================================================= */

function fecharPopup() {

    const popup =
        document.getElementById("popup");

    const audio =
        document.getElementById("popup-audio");

    audio.pause();
    audio.currentTime = 0;

    popup.style.display = "none";
}

/* ========================================================= */
/* FECHAR POPUP CLICANDO FORA                                */
/* ========================================================= */

window.addEventListener("click", function (event) {

    const popup =
        document.getElementById("popup");

    const popupCreditos =
        document.getElementById("popup-creditos");

    if (event.target === popup) {

        fecharPopup();
    }

    if (event.target === popupCreditos) {

        fecharCreditos();
    }

});


/* ========================================================= */
/* ABRIR CRÉDITOS                                            */
/* ========================================================= */

function abrirCreditos() {

    document.getElementById(
        "popup-creditos"
    ).style.display = "flex";

}

/* ========================================================= */
/* FECHAR CRÉDITOS                                           */
/* ========================================================= */

function fecharCreditos() {

    document.getElementById(
        "popup-creditos"
    ).style.display = "none";

}



/* ========================================================= */
/* INICIALIZAÇÃO                                              */
/* ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    criarCards();

});