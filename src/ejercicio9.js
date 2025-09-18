function validar() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');
    
    if (nombre === '' || email === '') {
        mensaje.textContent = 'Error: Llena todos los campos';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Éxito: Formulario enviado';
        mensaje.style.color = 'green';
    }
}