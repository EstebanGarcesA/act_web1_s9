const texto = document.getElementById('texto');
        
        function agregar() {
            texto.classList.add('rojo');
        }
        
        function quitar() {
            texto.classList.remove('rojo');
        }
        
        function alternar() {
            texto.classList.toggle('grande');
        }