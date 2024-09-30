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

/*Audios*/

var audio = document.getElementById('backgroundMusic');

// Verifica se o autoplay foi bloqueado
document.addEventListener('DOMContentLoaded', function() {
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            // O áudio começou a tocar automaticamente
        }).catch(function(error) {
            // Autoplay bloqueado. Opção de iniciar manualmente.
            console.log('Autoplay bloqueado: adicionando botão de play.');
            var button = document.createElement('button');
            button.innerHTML = "Reproduzir Música";
            button.onclick = function() {
                audio.play();
            };
            document.body.appendChild(button);
        });
    }
});