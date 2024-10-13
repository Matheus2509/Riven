var radio = document.querySelector('.manual-bnt')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 4){
        cont=1
    }

    document.getElementById('radio'+cont).checked = true       
}
function pas(){
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    txtv.innerHTML = 'Passiva'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_P1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'As habilidades de Riven carregam sua lâmina, e seus ataques básicos consomem cargas para causar dano adicional.'
}

function Q(){
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    txtv.innerHTML = 'Asas Quebradas'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_Q1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven faz uma série rápida de acertos. Esta habilidade pode ser reativada três vezes em um curto período de tempo. O terceiro golpe empurra para trás os inimigos próximos.'
}

function W(){
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    txtv.innerHTML = 'Explosão de Ki'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_W1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven emite uma Explosão de Ki, causando dano e atordoamento a inimigos próximos.'
}

function E(){
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    txtv.innerHTML = 'Valentia'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_E1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven avança uma curta distância e bloqueia o dano recebido.'
}

function R(){
    var txtv = document.querySelector('#representação')
    var video = document.querySelector('#video_base')
    var desc = document.querySelector('#descrição')
    txtv.innerHTML = 'Lâmina do Exílio'
    video.innerHTML = '<video src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0092/ability_0092_R1.mp4" muted loop autoplay ></video>'
    desc.innerHTML = 'Riven fortalece sua arma de recordação com energia, recebendo Dano de Ataque e alcance. Durante este período, ela também pode usar Golpe de Vento, um poderoso ataque à distância, uma vez.'
}   