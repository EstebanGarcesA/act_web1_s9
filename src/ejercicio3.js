const clases = document.getElementsByClassName('ejercicio');

console.log('elementos encontrados con la clase "ejercicio":', clases.length)

for (let clase of clases) {
    clase.style.color = 'blue';
    clase.style.fontSize = '16px';
}