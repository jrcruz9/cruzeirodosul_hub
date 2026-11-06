/* ========================================================= */
/* BASE DE DADOS DOS JOGOS                                   */
/* ========================================================= */
/*
    Para adicionar novos jogos basta criar
    um novo objeto seguindo o mesmo padrão.
*/

const jogos = [
    {
        id: 17,
        titulo: "Gênio do Jogo",
        descricao: "Você é um gênio da matemática? Em Gênios do Jogo, você encara desafios cheios de números e contas de um jeito divertido, cheio de surpresas e muita emoção! Primeiro, crie o seu perfil e escolha um avatar bem legal. A cada resposta certa, você ganha pontos e sobe no ranking, onde pode ver quem está arrasando. É muito fácil de usar: é só clicar e jogar, no seu ritmo, aprendendo sem nem perceber. Quantos pontos você consegue fazer? Vamos descobrir se você é o próximo Gênio do Jogo? \n\n Professor\n Área: Matemática (Exatas) \n Habilidades: Reforço dos conteúdos de matemática, Raciocínio lógico e Cálculo mental",
        imagem: "imagem/17.gif",
        audio: "voz/audio17.m4a",
        link: "https://woat-stack-idwb-kge85e4tu-luccasas-projects.vercel.app"
    },

    {
        id: 18,
        titulo: "Pegadas do Brasil",
        descricao: " Olá, explorador! Que tal fazer uma viagem super legal por todo o nosso país? No jogo Pegadas do Brasil, você escolhe o seu personagem e embarca em uma aventura cheia de descobertas! Quem te dá as boas-vindas é o Ari, uma arara muito esperta, mas a viagem é longa e você vai conhecer um amiguinho animal diferente em cada região do Brasil! Será que você consegue responder aos desafios deles e descobrir segredos sobre os bichos, as plantas, o clima e as festas de cada lugar? Você vai ouvir histórias, jogar várias brincadeiras divertidas e aprender passeando pelo nosso mapa. Venha deixar as suas pegadas nessa viagem incrível! \n\n Professor\n Área: Geografia, Cultura \n Habilidades: Regiões, fauna, flora, clima, cultura ",
        imagem: "imagem/18.gif",
        audio: "voz/audio18.m4a",
        link: "https://pegadas-do-brasil.vercel.app"
    },

    {
        id: 19,
        titulo: "Jump Sky",
        descricao: " Olá, aventureiro! Que tal testar a sua agilidade e o seu cálculo mental em uma viagem incrível? No jogo Jump Sky, você escolhe o seu personagem e embarca em um desafio vertical onde cada conta certa leva você para cenários totalmente diferentes! Será que você consegue superar todos os obstáculos, ver o seu ranking e ainda compartilhar com os colegas? Prepare-se, porque uma fase bônus cheia de surpresas está te esperando. Venha dar o próximo salto nessa aventura! \n\n Professor\n Área: Matemática \n Habilidades: Cálculo mental, raciocínio lógico e agilidade ",
        imagem: "imagem/19.gif",
        audio: "voz/audio19.m4a",
        link: "https://jumpsky.vercel.app"
    },

    {
        id: 20,
        titulo: "Aventuras das Regiões do Brasil",
        descricao: "Prepare-se para uma viagem divertida pelo Brasil! No jogo Aventura das Regiões do Brasil, você vai conhecer o Norte, o Nordeste, o Centro-Oeste, o Sudeste e o Sul enquanto cumpre missões e descobre paisagens, animais, plantas, culturas e curiosidades. Em cada região há um desafio diferente: combinar elementos da natureza, responder a perguntas, explorar mapas, montar um quebra-cabeça e testar seus conhecimentos. A cada conquista, você ganha uma medalha e avança na aventura. Chame sua curiosidade e venha explorar o Brasil! \n\n Professor\n Área: Geografia; cultura brasileira; meio ambiente e biodiversidade. \n Habilidades: Reconhecer regiões brasileiras, Interpretar mapas e Identificar características de biomas, paisagens, clima, fauna e flora ",
        imagem: "imagem/20.gif",
        audio: "voz/audio20.m4a",
        link: "https://prototipo-gray-two.vercel.app"
    },

    {
        id: 21,
        titulo: "Arruma Bagunça",
        descricao: "Que tal virar um super-herói da organização? Em Arruma a Bagunça, a sua missão é limpar a tela e deixar tudo no lugar certo! Mas fique atento: cada bagunça escondida é uma continha misteriosa que você precisa resolver. Arraste os objetos, faça as contas e veja a mágica acontecer! Quanto mais você arruma, mais aprende e deixa o nosso mundo muito mais bonito. Vamos aceitar esse desafio e colocar tudo em ordem? \n\n Professor\n Área: Matemática, Meio Ambiente, Cidadania e Convívio Social\n Habilidades: Operações Matemáticas, conscientização ecológica, organização e responsabilidade cidadã ",
        imagem: "imagem/21.gif",
        audio: "voz/audio21.m4a",
        link: "https://arruma-a-bagunca.vercel.app"
    },

    {
        id: 22,
        titulo: "Esporte Kids",
        descricao: "Você já pensou em ser um campeão de verdade? No Esporte Kids, você passa por cinco desafios esportivos: faz cestas no basquete, tenta enganar o goleiro nos pênaltis, pula barreiras e pega estrelas na corrida, rebate a bola no ping-pong e derruba os pinos no boliche.  Mas tem um segredo: a cada acerto, aparece uma dica sobre o esporte, e quem presta atenção vai bem no quiz e abre o próximo desafio. Aqui o jogo fica um pouquinho mais difícil conforme você aprende, e você ainda ganha estrelas e conquistas para completar o seu álbum. Será que você consegue chegar ao último jogo e virar Campeão Esporte Kids? \n\n Professor\n Área: Esportes, Educação Física e Matemática. \n Habilidades: Conhecimento das regras básicas de cinco esportes, Raciocínio matemático, Coordenação e atenção e Hábitos saudáveis e respeito ao outro ",
        imagem: "imagem/22.gif",
        audio: "voz/audio22.m4a",
        link: "https://esportekids-frontend.vercel.app/home"
    },

    {
        id: 23,
        titulo: "Aventuras pelo Brasil",
        descricao: "Prepare sua mochila e venha viver uma grande aventura pelo Brasil! Neste jogo, você se torna um explorador e embarca em uma jornada para conhecer melhor o nosso país. Durante o percurso, poderá explorar mapas, descobrir as regiões brasileiras, reconhecer paisagens e aprender sobre os biomas e a diversidade natural do Brasil. Para avançar na aventura, será necessário completar missões, responder a perguntas de múltipla escolha e utilizar seus conhecimentos para superar cada desafio. As respostas recebem um retorno educativo, ajudando o jogador a compreender melhor o conteúdo. Conforme progride, o você acumula pontos e desbloqueia novas etapas, tornando a experiência mais envolvente. O jogo foi pensado para apresentar conteúdos de forma interativa e divertida, estimulando sua curiosidade e a sua vontade de aprender. Você pode jogar em cinco idiomas diferentes e ainda, se precisar usar diversos recursos de acessibilidade. Será que você consegue completar todas as missões e conquistar o título de Grande Explorador? \n\n Professor\n Área: Geografia\n Habilidades: Orientação especial e interpretação de mapas, Reconhecimento de biomas e Compreensão de paisagens",
        imagem: "imagem/23.gif",
        audio: "voz/audio23.m4a",
        link: "https://aventurapelobrasilv13filtroreforcad.vercel.app"
    },

    {
        id: 24,
        titulo: "Aventuras do Cosmo Bot",
        descricao: "Você está pronto para embarcar em uma aventura cheia de desafios matemáticos com o CosmoBot? Explore 8 fases, resolva desafios de Matemática e descubra como aprender pode ser divertido! Escolha as operações matemáticas, peça dicas quando precisar de uma ajudinha e acompanhe seu progresso enquanto avança pelo jogo. Se quiser praticar novamente, você pode voltar às fases anteriores e tentar quantas vezes precisar. Não tenha medo de errar: cada desafio é uma nova oportunidade para aprender. Prepare-se para essa aventura e ajude o CosmoBot a superar os desafios! \n\n Professor\n Área:  Matemática. \n Habilidades: Resolução de operações matemáticas, Raciocínio lógico e resolução de problemas e Desenvolvimento da autonomia na aprendizagem ",
        imagem: "imagem/24.gif",
        audio: "voz/audio24.m4a",
        link: "https://cosmo-bot-adventure.vercel.app"
    },

    {
        id: 25,
        titulo: "Cara a Cara Brasil",
        descricao: "Você já parou para pensar em quem foram os primeiros moradores do Brasil? Em Cara a Cara, você vai conhecer rostos de pessoas dos povos originários, que cuidam da natureza e guardam histórias, costumes e tradições muito especiais. Um rosto secreto foi escolhido, e só você pode descobrir quem é! Observe cada detalhe, faça perguntas e vá eliminando quem não combina com as pistas. Enquanto brinca, você aprende mais sobre esses povos e sobre a nossa história. Você joga sem pressa, no seu próprio ritmo, e cada escolha é uma nova descoberta. Vamos descobrir quem está escondido? \n\n Professor\n Área: História do Brasil; Raciocínio Lógico; Linguagem \n Habilidades: Desenvolvimento do raciocínio lógico e dedutivo; Atenção e observação de detalhes; Classificação por características; Memória; Formulação de perguntas e ampliação do vocabulário.",
        imagem: "imagem/25.gif",
        audio: "voz/audio25.m4a",
        link: "https://cara-a-cara-zeta.vercel.app"
    },

    {
        id: 26,
        titulo: "Matemática nas Nuvens",
        descricao: "Que tal voar pelo céu em um balão e descobrir o mundo dos números? Em Matemática nas Nuvens, você viaja de nuvem em nuvem, resolve contas, completa sequências e desvenda probleminhas divertidos. Cada resposta certa vale estrelinhas, e você pode escolher um amigo para ler as perguntas em voz alta: tem coala, ratinho, fadinha, urso, robozinho e até alienzinho! Será que você consegue chegar ao Desafio Final e conquistar o prêmio especial? \n\n Professor\n Área: Matemática\n Habilidades: Contagem de números, Achar o número que vem antes e o que vem depois e Operações matemáticas: soma, subtração, multiplicação e divisão",
        imagem: "imagem/26.gif",
        audio: "voz/audio26.m4a",
        link: "https://matematica-nas-nuvens-3ucq.vercel.app"
    },

    {
        id: 27,
        titulo: "Math Gol",
        descricao: "Bora bater um pênalti? No MathGol, cada conta que você acerta vira uma chance de gol! Primeiro você monta o seu craque: escolhe um apelido, um avatar e o time do coração. Depois é só ir para a marca do pênalti. Aparece uma continha na tela resolva ela e, se acertar, você ganha o direito de cobrar. Aí escolhe o canto do gol, a altura do chute e a força, e manda pra rede! Cada gol enche a sua carteira de Cruzeiros, que é a moeda do jogo. E quanto mais rápido você responde, mais Cruzeiros você ganha. Com eles dá para comprar novos times, avatares e apelidos na Loja. São três fases para vencer: Pênaltis, Falta e a grande Final. A cada fase as contas ficam um pouquinho mais difíceis, do seu jeito, sem pressa. Será que você chega até o fim e vira o craque da matemática? \n\n Professor\n Área: Matemática\n Habilidades: Ensino das quatro operações matemáticas, cálculo mental com tempo e leitura de números de um e dois dígitos; progressão em doze níveis de aprendizagem ",
        imagem: "imagem/27.gif",
        audio: "voz/audio27.m4a",
        link: "https://math-gol.vercel.app/HTML/index.html"
    },

    {
        id: 28,
        titulo: "Brasil em Jogo",
        descricao: "Você conhece o Brasil? Escolha seu bichinho, que pode ser uma arara, uma onça, um jacaré e muito mais, e parta numa viagem pelas 5 regiões do nosso país! Descubra florestas gigantes, praias, o Pantanal, cidades enormes e lugares onde até neva. Aprenda sobre o clima, as festas e as comidas de cada cantinho do Brasil. Em cada fase tem um desafio de combinar as figuras, mas atenção: pense bem antes de escolher! Não tem cronômetro, então você joga no seu ritmo, e se quiser, o jogo lê as perguntas em voz alta pra você. Acerte pelo menos 20 perguntas e ganhe um certificado com o seu nome. Vamos explorar o Brasil? \n\n Professor\n Área: Geografia do Brasil\n Habilidades: Reconhecimento das 5 regiões do Brasil, Identificação das paisagens e Compreensão dos diferentes climas do país",
        imagem: "imagem/28.gif",
        audio: "voz/audio28.m4a",
        link: "https://brasil-em-jogo-weld.vercel.app"
    },

    {
        id: 29,
        titulo: "Math Kids",
        descricao: "Você é bom de conta? No Math Kids, você escolhe o seu personagem, entra com a sua senha secreta e parte para desafios de somar, diminuir, multiplicar e dividir! Para responder, é só escrever o número na lousa com o dedo ou com o mouse, do seu jeitinho, ou tocar nos números, se preferir. A cada acerto você ganha estrelas, faz combos e libera fases novas, e ainda pode colecionar medalhas e conquistas. Tem até continhas que contam histórinhas do dia a dia! Será que você consegue juntar todas as estrelas e abrir as fases extras? \n\n Professor\n Área: Matemática\n Habilidades: Ensino das quatro operações matemáticas, Cálculo mental e resolução de problemas e Escrita e reconhecimento dos números",
        imagem: "imagem/29.gif",
        audio: "voz/audio29.m4a",
        link: "https://kids-sigma-nine.vercel.app"
    },

    {
        id: 30,
        titulo: "Aventuras Matemáticas",
        descricao: "Que tal viver uma aventura super legal onde a Matemática é pura diversão? Em Aventuras Matemáticas, você vai encarar desafios e atividades empolgantes que tornam o aprendizado mais tranquilo, estimulante e no seu próprio ritmo, sem parecer uma obrigação! A cada passo, você aprende de forma gradual, desenvolve o raciocínio lógico, ganha mais confiança e participa de uma experiência muito mais agradável. Será que você está pronto para essa jornada? Venha descobrir como a Matemática pode ser incrível! \n\n Professor\n Área: Matemática\n Habilidades: Conhecimentos e Habilidade de Matemática, Raciocínio Lógico e estímulo de confiança",
        imagem: "imagem/30.gif",
        audio: "voz/audio30.m4a",
        link: "https://aventuras-matematicas.vercel.app"
    },

    {
        id: 31,
        titulo: "Conexão Segura",
        descricao: "Você sabe se proteger na internet? No Conexão Segura, você vira cartas com situações que podem acontecer com qualquer criança: um prêmio grátis bom demais para ser verdade, um estranho pedindo sua foto, uma senha fácil de adivinhar... Escolha se é SEGURO ou PERIGOSO e o seu personagem conta o porquê, quando você acerta e quando erra. Acerte várias seguidas para fazer combos, ganhe moedas para enfeitar seu personagem na loja e divirta-se também com a Memória Digital e a Corrida da Bolha. Será que você chega até a última fase e vira um Mestre da Segurança? \n\n Professor\n Área: Segurança digital e cidadania na internet\n Habilidades: Reconhecer golpes e situações de risco na internet, proteger dados pessoais e senhas, agir com respeito nas redes, tomar decisões com atenção e pedir ajuda a um adulto de confiança",
        imagem: "imagem/31.gif",
        audio: "voz/audio31.m4a",
        link: "https://conexao-segura2.vercel.app"
    },

    {
        id: 32,
        titulo: "Calculoco",
        descricao: "Pronto para uma aventura com os números? No Calculoco, você explora a Ilha da Adição, o Mercado da Subtração, a Selva da Multiplicação e o Vale da Divisão! Resolva as contas, escolha suas respostas e complete os desafios para liberar novos níveis. Pense, calcule, acerte e divirta-se nessa jornada matemática!\n\nProfessor\n Área: Matemática | Ensino Fundamental I \n Habilidades: Prática de adição, subtração, multiplicação e divisão; desenvolvimento do raciocínio lógico-matemático; interpretação de desafios; atenção e concentração na resolução de problemas. ",
        imagem: "imagem/32.gif",
        audio: "voz/audio32.m4a",
        link: "https://calculoco.vercel.app/"
    },

    {
        id: 33,
        titulo: "Rota Brasil",
        descricao: "Vamos explorar o Brasil com o Aê? Escolha o seu companheiro de viagem e ajude a expedição a seguir em frente! Monte a bússola e descubra onde ficam o Norte, o Sul, o Leste e o Oeste. Depois, descubra em qual região do Brasil mora cada paisagem, veja como o clima muda de um lugar para o outro e aprenda a separar o lixo na lixeira da cor certa. Se você errar, não tem problema: é só tentar de novo, no seu tempo. A cada acerto você ganha pontos e estrelas, e ainda tem um desafio bônus com os animais do Brasil esperando por você. Será que você consegue ganhar todas as estrelas?\n\n Professor\n Área: Geografia e Meio Ambiente\n Habilidades: pontos cardeais e uso da bússola, Conhecimento das regiões do Brasil e Reconhecimento de paisagens e de climas brasileiros",
        imagem: "imagem/33.gif",
        audio: "voz/audio33.m4a",
        link: "https://rota-brasil-lemon.vercel.app"
    },

    {
        id: 34,
        titulo: "O mundo do Byte",
        descricao: "Ajude o Byte a chegar até o final dessa aventura! No computador, use as setas do teclado para andar, a tecla de espaço para pular e o botão de mudança de cor para alternar entre azul e laranja. No celular ou tablet, use os botões que aparecem na tela para andar, pular e mudar de cor! \n Escolha a cor certa para atravessar os obstáculos sem bater e responda às perguntas corretamente para ganhar pontos. São 4 fases incríveis e uma fase bônus esperando por você! Explore, divirta-se e mostre que você é capaz de completar essa missão!\n\n Professor\n Área: Matemática\n Habilidades: Calculo, Raciocínio Lógico, Coordenação motora fina.",
        imagem: "imagem/34.gif",
        audio: "voz/audio34.m4a",
        link: "https://aventura-matematica-gray.vercel.app/"
    },

    {
        id: 35,
        titulo: "Baú do tempo",
        descricao: " Abra os baús, encontre os pares e descubra histórias incríveis do Brasil! Em Baú do Tempo, você assume o papel de um explorador da nossa história enquanto joga um divertido jogo da memória. Cada carta conecta uma personalidade importante a um fato histórico marcante de forma leve e divertida. Você pode jogar no seu próprio ritmo, explorando sem pressa e acumulando pontos enquanto aprende. Será que você consegue encontrar todos os pares? \n\n Professor\n Área: História do Brasil\n Habilidades: Ensino de personalidades históricas, desenvolvimento da memória, associação de fatos e cronologia histórica de forma lúdica",
        imagem: "imagem/35.gif",
        audio: "voz/audio35.m4a",
        link: "https://baudotempo.vercel.app"
    },

    {
        id: 36,
        titulo: "Cofrinho dos Sonhos",
       descricao: "Você tem um sonho? Uma bicicleta, uma bola, livros de histórias ou um kit de pintura? No Cofrinho dos Sonhos, você recebe moedas e precisa decidir: comprar agora ou guardar para realizar o seu sonho? Resolva as continhas, faça boas escolhas e encha o seu cofrinho! Cada semana traz um desafio novo, e se não der certo na primeira vez, você pode tentar de novo, sem pressa e sem perder pontos. Será que você consegue chegar até a Feira Especial? \n\n Professor\n Área: Matemática e Educação Financeira \n Habilidades: Reconhecimento de problemas, Educação Financeira, Consumo consciente e Tomada de decisão",
        imagem: "imagem/36.gif",
        audio: "voz/audio36.m4a",
        link: "https://cofrinhodossonhos.vercel.app/"
    },


    {
        id: 37,
        titulo: "Operação Mosquito Zero",
        descricao: " Prepare-se para uma missão cheia de ação em Operação Mosquito Zero! Você será um agente no combate à dengue, enfrentando mosquitos e protegendo a comunidade. Explore o cenário, use seus ataques para eliminar os mosquitos e descubra por que é tão importante combater os focos de água parada. Aprenda enquanto joga e mostre que você tem coragem e conhecimento para ajudar a deixar o mundo livre da dengue! Você consegue completar essa missão?\n\n Professor\n Área: Saúde, Ciências e Educação Ambiental.\n Habilidades: Prevenção contra dengue, conscientização da comunidade ",
        imagem: "imagem/37.gif",
        audio: "voz/audio37.m4a",
        link: "https://operacao-mosquito-zero-web.vercel.app"
    },



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