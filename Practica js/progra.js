const futbolistas = [
    { nombre: "Lionel Messi", titulos: 34, nacionalidad: "Argentina", edad: 36 },
    { nombre: "Cristiano Ronaldo", titulos: 32, nacionalidad: "Portugal", edad: 38 },
    { nombre: "Neymar Jr.", titulos: 18, nacionalidad: "Brasil", edad: 31 },
    { nombre: "Robert Lewandowski", titulos: 21, nacionalidad: "Polonia", edad: 35 },
    { nombre: "Kevin De Bruyne", titulos: 10, nacionalidad: "Bélgica", edad: 31 },
    { nombre: "Mohamed Salah", titulos: 8, nacionalidad: "Egipto", edad: 31 },
    { nombre: "Virgil van Dijk", titulos: 8, nacionalidad: "Países Bajos", edad: 32 },
    { nombre: "Sergio Ramos", titulos: 25, nacionalidad: "España", edad: 37 },
    { nombre: "Kylian Mbappé", titulos: 9, nacionalidad: "Francia", edad: 25 },
    { nombre: "Manuel Neuer", titulos: 27, nacionalidad: "Alemania", edad: 38 }
];

// Función para crear una tarjeta con información de persona
function crearTarjetaFutbolista(futbolista) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("bg-white", "p-4", "text-black", "m-2", "mr-10", "ml-10", "h-32", "w-150");

    tarjeta.innerHTML = `
        <h2 class="text-xl font-bold">${futbolista.nombre}</h2>
        <p><strong>Titulos:</strong> ${futbolista.titulos}</p>
        <p><strong>Nacionalidad:</strong> ${futbolista.nacionalidad}</p>
        <p><strong>Edad:</strong> ${futbolista.edad}</p>
    `;
    return tarjeta;
}

// Obtener el contenedor de tarjetas
const contenedorTarjetas = document.getElementById("futbolistas");

// Mostrar tarjetas de favoritos
futbolistas.forEach(futbolista => {
    const tarjetaFutbolista = crearTarjetaFutbolista(futbolista);
    contenedorTarjetas.appendChild(tarjetaFutbolista);
});

// Fetch de la imagen de la API de The Dog API
fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", {
    headers: {
        "x-api-key": "DEMO-API-KEY"
    }
})
.then(response => response.json())
.then(data => {
    const imageUrl = data[0].url; // Corregido para acceder a la URL de la imagen
    const tarjetaImagen = document.createElement("div");
    tarjetaImagen.classList.add("bg-blue-100", "p-4", "rounded", "text-black", "m-2", "mr-10", "ml-10");

    tarjetaImagen.innerHTML = `
        <h3>Imagen:</h3>
        <img src="${imageUrl}" alt="Imagen de perro" style="max-width: 100%;">
    `;
    contenedorTarjetas.appendChild(tarjetaImagen);
})
.catch(error => console.error('Error al obtener la imagen:', error));
