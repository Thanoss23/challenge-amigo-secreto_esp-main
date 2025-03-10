// Lista de amigos ingresados
let amigos = [];
// Lista de amigos ya sorteados
let amigosSorteados = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar solo letras 
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!regex.test(nombre)) {
        alert("Solo se permiten nombres con letras. No ingreses números ni símbolos.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en la pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// Función para realizar el sorteo sin repetir nombres
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

// Si todos los amigos ya fueron sorteados
    if (amigosSorteados.length === amigos.length) {
        alert("Ya fueron sorteados todos los amigos. Actualice la página.");
        reiniciarSorteo();
        return;
    }

    let amigoSorteado;
    do {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado)); // Evita repetir nombres sorteados

    amigosSorteados.push(amigoSorteado);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}

// Función para reiniciar el sorteo automáticamente
function reiniciarSorteo() {
    amigosSorteados = []; // Vaciar la lista de sorteados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el mensaje del ganador
}

function reiniciarSorteo() {
    amigos = []; // Vaciar la lista de amigos
    amigosSorteados = []; // Vaciar la lista de sorteados

    // Actualizar la interfaz
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado del sorteo

    alert("🔄 ¡Sorteo reiniciado! Agrega nuevos nombres para empezar de nuevo.");
}
