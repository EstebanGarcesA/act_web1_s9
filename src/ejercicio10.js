function mostrarInfo() {
    const hijo2 = document.getElementById('hijo2');
    const resultado = document.getElementById('resultado');
    
    
    const padre = hijo2.parentElement;
    
 
    const hijos = padre.children;
    
    
    const siguiente = hijo2.nextElementSibling;
    
    resultado.innerHTML = 
        'Padre: ' + padre.id + '<br>' +
        'Cantidad de hijos: ' + hijos.length + '<br>' +
        'Siguiente hermano: ' + siguiente.id;
}