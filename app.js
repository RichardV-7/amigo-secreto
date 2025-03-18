// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//lista en donde se guardan los nombres 
let amigos = [];

//funcion del boton que se utiliza para añadir amigos
function agregarAmigo () {
    let ingresoNombre = document.getElementById('amigo').value;
    
//si nombre esta vacio motrar el alert
    if (ingresoNombre == '') {
        alert('Por favor, inserte un nombre.');

//si no insertar el nombre en la lista amigos 
    } else {
        amigos.push(ingresoNombre);
    }

//limpiar el campo donde se ingresa 
    document.getElementById('amigo').value = '';
    mostrasListaAmigos();
}

//funcion para el listado 
function mostrasListaAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //para limpiar la lista 


    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Creamos un elemento <li>
        li.textContent = amigos[i]; // Asignamos el texto del amigo
        lista.appendChild(li); // Agregamos el <li> dentro de la lista <ul>
    }
}

// funcion para el sorteo 
function sortearAmigo() {
    if (amigos.length === 0) { //cuando la longitud de la lista es 0 no hay registros 
        alert('No hay amigos en la lista para sortear.');
        return; 
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

document.getElementById('agregar').addEventListener('click', agregarAmigo);

document.getElementById('sorteo').addEventListener('click', sortearAmigo);

document.getElementById('reset').addEventListener('click', sortearReset);


function sortearReset () {
    amigos = []; 
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';
    document.getElementById('resultado').innerHTML = '';
}