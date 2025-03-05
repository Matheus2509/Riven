var radio = document.querySelector('.manual-bnt')
var cont = 1
document.getElementById('radio1').checked = true
var img = document.querySelector('.imgpas')

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if (cont > 4) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}
function pas() {
    resetarImagem()
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    img = document.querySelector('.imgpas')
    txtv.innerHTML = 'Passiva'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_P1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'As habilidades de Riven carregam sua lâmina, e seus ataques básicos consomem cargas para causar dano adicional.'
    alterarImagem()
}

function Q() {
    resetarImagem()
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    img = document.querySelector('.imgQ')
    txtv.innerHTML = 'Asas Quebradas'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_Q1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven faz uma série rápida de acertos. Esta habilidade pode ser reativada três vezes em um curto período de tempo. O terceiro golpe empurra para trás os inimigos próximos.'
    alterarImagem()
}

function W() {
    resetarImagem()
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    img = document.querySelector('.imgW')
    txtv.innerHTML = 'Explosão de Ki'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_W1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven emite uma Explosão de Ki, causando dano e atordoamento a inimigos próximos.'
    alterarImagem()
}

function E() {
    resetarImagem()
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    img = document.querySelector('.imgE')
    txtv.innerHTML = 'Valentia'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_E1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven avança uma curta distância e bloqueia o dano recebido.'
    alterarImagem()
}

function R() {
    resetarImagem()
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    img = document.querySelector('.imgR')
    txtv.innerHTML = 'Lâmina do Exílio'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_R1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven fortalece sua arma de recordação com energia, recebendo Dano de Ataque e alcance. Durante este período, ela também pode usar Golpe de Vento, um poderoso ataque à distância, uma vez.'
    alterarImagem()
}

function alterarImagem() {
    img.classList.add("img-alterada");
    console.log("Classe adicionada:", img.classList);
}

function resetarImagem() {
    img.classList.remove("img-alterada");
    console.log("Classe removida:", img.classList);
}
var RuneFundo = document.querySelector('#runeterra')

function RuneterraCartaBase() {
    RuneFundo.style.backgroundImage = "url('img/runeterra/fundo.png')";
}
function RuneterraCartaEvoluida() {
    RuneFundo.style.backgroundImage = "url('img/runeterra/funda_final.png')";

}

var cartinha = document.querySelector('#Carta_Escada_Amostra')
function Cortante() {
    cartinha.innerHTML = '<img src="img/runeterra/fragmento-de-lamina-cortante-03nx010.webp" alt="">'
}
function firme() {
    cartinha.innerHTML = '<img src="img/runeterra/fragmento-de-lamina-firme-03nx008.webp" alt="">'
}
function reluzente() {
    cartinha.innerHTML = '<img src="img/runeterra/fragmento-de-lamina-reluzente-03nx012.webp" alt="">'
}
function exilio() {
    cartinha.innerHTML = '<img src="img/runeterra/lamina-do-exilio-03nx011.webp" alt="">'
}
function punho() {
    cartinha.innerHTML = '<img src="img/runeterra/punho-de-arma-de-riven-03nx007t3.webp" alt="">'
}