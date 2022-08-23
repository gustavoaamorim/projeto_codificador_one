
const textoEntrada = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");
document.getElementById("aparece").style.display = 'none';

function encriptar() {
    const textoEnc = textoEntrada.value;
    textoSaida.value = textoEnc.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    aparece();
}


function desencriptar() {
    const textoDesenc = textoEntrada.value;
    textoSaida.value = textoDesenc.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    aparece();
}

function copiar() {
    const msg = document.querySelector(".texto-saida");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
}

function aparece() {
    document.getElementById("aparece").style.display = 'block';
}