var sobralTurmas = document.getElementById("sobralTurmas") 
if (sobralTurmas != null) {
    sobralTurmas.addEventListener("click",function(){
        window.location.href = "turmas.html"
    
    }) 
}


var remotaTurmas = document.getElementById("remotaTurmas")
if (remotaTurmas != null) {
    remotaTurmas.addEventListener("click",function(){
        window.location.href = "turmas.html#turmaRemota"
    })
}

var convida = document.getElementById("convida")
if (convida != null) {
    convida.addEventListener("click",function(){
         window.location.href = "acoes.html"
    })
}

var noite = document.getElementById("noite")
if (noite != null) {
    noite.addEventListener("click",function(){
        window.location.href = "acoes.html#noiteCanta"
    })
}

var logo = document.getElementById("logo")
if (logo != null) {
    logo.addEventListener("click", function(){
    console.log("deu certo")
        window.location.href = "index.html"
    })
}

var perfil = document.getElementById("insta")

if (perfil != null) {
    perfil.addEventListener("click",function(){
        window.location.href = "https://www.instagram.com/projetocantamina/"
    })
}

var rede = document.getElementById("youtube")

if (rede != null) {
    rede.addEventListener("click",function(){
        window.location.href = "https://www.youtube.com/watch?v=kpWMW4nFIOc"
    })
}

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // Define a rolagem como vertical
    loop: true, // Ativa o loop infinito
    autoplay: {
        delay: 0, // Troca de imagem a cada 2 segundos
        disableOnInteraction: false, // Continua rodando mesmo se o usuário interagir
    },
    speed: 3000, // Velocidade da animação (1 segundo)
    slidesPerView: 2, // Mostra 2 imagens ao mesmo tempo
    // spaceBetween: 5, // Espaço entre os slides
    allowTouchMove: false, // Bloqueia o arrastar manual para não interromper o loop
    
});

