// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creo la lista en donde se guardan los nombres 
let amigos = [];

//creo la funcion del boton que se utiliza para añadir amigos
function agregarAmigo() {
    let ingresoNombre = document.getElementById('amigo').value;
    
    if (ingresoNombre === '') {
        alert('Por favor, inserte un nombre.');
        
    } else {
        amigos.push(ingresoNombre);
    }

    document.getElementById('amigo').value = '';
}

