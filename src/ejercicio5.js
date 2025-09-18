function cambiarImagen(params) {
    const imagen = document.getElementById('imagen');
    imagen.setAttribute('src', 'https://tse1.mm.bing.net/th/id/OIP.byw6orFRze9tyzQ30NQtVAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')
    imagen.setAttribute('alt', 'Nueva imagen roja');
}

function cambiarEnlace() {
    var enlace = document.getElementById('enlace');
    enlace.setAttribute('href', 'https://www.youtube.com');
    enlace.textContent = 'Ir a YouTube';
}