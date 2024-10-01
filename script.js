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
                    // Autoplay bloqueado, adicionando botão de play.
                    console.log('Autoplay bloqueado: adicionando botão de play.');
                    var button = document.createElement('button');
                    button.innerHTML = "Reproduzir Música";
                    button.style.fontSize = '18px';
                    button.style.padding = '10px 20px';
                    button.style.marginTop = '20px';

                    // Evento para clique e toque
                    button.addEventListener('click', playAudio);
                    button.addEventListener('touchstart', playAudio);

                    // Função para iniciar o áudio
                    function playAudio() {
                        audio.play();
                        button.remove(); // Remove o botão após o toque/clique
                    }

                    document.body.appendChild(button);
                });
            }
});