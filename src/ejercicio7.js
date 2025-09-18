const contador = 1;
        
        function agregarItem() {
            // Crear un nuevo elemento li
            var nuevoItem = document.createElement('li');
            
            // Ponerle texto
            nuevoItem.textContent = 'Item número ' + contador;
            
            // Agregarlo a la lista
            var lista = document.getElementById('lista');
            lista.appendChild(nuevoItem);
            
            contador++;
        }