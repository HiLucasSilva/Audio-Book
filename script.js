const nomeCapitulo = document.getElementById("capitulo");
const audio = document.getElementById('audio');
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const numeroCapitulos = 10;
let taTocando = 0;

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audio.play();
    taTocando = true;
}

function pausarFaixa() {
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    audio.pause();
    taTocando = false;
}

function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    }else {
        tocarFaixa();
    }
}

function capituloAnterior(){
    if (capitulo === 1){
        capitulo = numeroCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
}

function proximoCapitulo() {
    if (capitulo < numeroCapitulos) {
      capitulo += 1;
    } else {
      capitulo = 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
audio.addEventListener("ended", proximoCapitulo);