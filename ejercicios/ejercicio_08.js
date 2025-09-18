const caja1 = document.getElementById('caja1');
const caja2 = document.getElementById('caja2');
const mensaje = document.getElementById('mensaje');


caja1.addEventListener('click', function() {
    caja1.style.backgroundColor = 'red';
    mensaje.textContent = '¡Hiciste click!';
});


caja2.addEventListener('mouseover', function() {
    caja2.style.backgroundColor = 'green';
    mensaje.textContent = 'Mouse encima';
});


caja2.addEventListener('mouseout', function() {
    caja2.style.backgroundColor = 'lightblue';
    mensaje.textContent = 'Mouse fuera';
});