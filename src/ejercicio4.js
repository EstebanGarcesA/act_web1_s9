function usarTextContent(params) {
    const parrafo = document.getElementById('parrafo');
    parrafo.textContent = 'Solo texto normal'
}

function usarInnerHTML(params) {
    const parrafo = document.getElementById('parrafo');
    parrafo.innerHTML = '<strong>Texto en negrita</strong>';
}