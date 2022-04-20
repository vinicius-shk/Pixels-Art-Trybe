const paletaCores = document.getElementById('color-palette');
const filhosPaletaCores = paletaCores.children;
const listaCores = document.getElementById('lista-cores');
const itensListaCores = listaCores.children;
const quadroPixel = document.getElementById('pixel-board');
const pixelQuadro = quadroPixel.children;
const inputUser = document.getElementById('board-size');
const botaoVqv = document.getElementById('generate-board');
let cores = ['red', 'blue', 'gray', 'silver', 'green', 'purple', 'yellow', 'brown', 'orange', 'pink'];
function coresSeletor() {
    filhosPaletaCores[0].style.backgroundColor = 'black';
    let itemLista = document.createElement('li');
    itemLista.innerHTML = 'black';
    itemLista.style.color = 'black';
    itensListaCores[0].appendChild(itemLista);
    for (index = 1; index < filhosPaletaCores.length; index += 1) {
        let sorteio = Math.floor(Math.random()* (10 - [index]));
        filhosPaletaCores[index].style.backgroundColor = cores[sorteio];
        let itemLista = document.createElement('li');
        itemLista.innerHTML = cores[sorteio];
        itemLista.style.color = cores[sorteio];
        itensListaCores[0].appendChild(itemLista);
        cores.splice(sorteio, 1);
    }
}
function criaPixel(repetições) {
    for (let index = 1; index <= repetições ; index += 1) {
        let novoPixel = document.createElement('div');
        novoPixel.className = 'pixel';
        quadroPixel.appendChild(novoPixel);
        
    }
}
filhosPaletaCores[0].addEventListener('click', defineClasse);
filhosPaletaCores[1].addEventListener('click', defineClasse);
filhosPaletaCores[2].addEventListener('click', defineClasse);
filhosPaletaCores[3].addEventListener('click', defineClasse);
function defineClasse(evento) {
    for (let key in filhosPaletaCores) {
        filhosPaletaCores[key].className = 'color';
    }
    evento.target.classList.add('selected');
}
document.body.addEventListener('click', pintura);
function pintura(evento) {
    for (let key = 0; key < pixelQuadro.length; key += 1) {
        if (evento.target === pixelQuadro[key]) {
        evento.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
        }
    }
}
function criaElemento(tipo, texto, seletor, nomeSeletor) {
    let elemento = document.createElement(tipo);
    elemento.innerHTML = texto;
    elemento.setAttribute(seletor, nomeSeletor);
    document.body.appendChild(elemento);
}
criaElemento('button', 'Limpar', 'id', 'clear-board');
const botao = document.getElementById('clear-board');
botao.addEventListener('click', reseta);
function reseta() {
    for (let key = 0; key < pixelQuadro.length; key += 1) {
        pixelQuadro[key].style.backgroundColor = 'white';
    }
}
botaoVqv.addEventListener('click', resetaBoard);
function resetaBoard() {
    if (inputUser.value !== '') {
        if (inputUser.value < 5) {
            quadroPixel.innerHTML = '';
        quadroPixel.style.height = (42 * 5) + 'px';
        quadroPixel.style.width = (42 * 5) + 'px';
        criaPixel(5 ** 2);
        } else if (inputUser.value > 50) {
            quadroPixel.innerHTML = '';
        quadroPixel.style.height = (42 * 50) + 'px';
        quadroPixel.style.width = (42 * 50) + 'px';
        criaPixel(50 ** 2);
        } else {
        quadroPixel.innerHTML = '';
        quadroPixel.style.height = (42 * inputUser.value) + 'px';
        quadroPixel.style.width = (42 * inputUser.value) + 'px';
        criaPixel(inputUser.value ** 2);
        }
    } else {
        alert('Board inválido!');
    }
}
window.onload = function () {
coresSeletor();
criaPixel(25);
filhosPaletaCores[0].classList.add('selected');
}
