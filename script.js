const paletaCores = document.getElementById('color-palette');
const filhosPaletaCores = paletaCores.children;
const listaCores = document.getElementById('lista-cores');
const itensListaCores = listaCores.children;
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
window.onload = function () {
coresSeletor();
}