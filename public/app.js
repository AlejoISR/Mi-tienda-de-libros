
//// busca la lista de los libros
const btnVer = document.getElementById("btn-ver");
const listaLibros = document.getElementById("lista-libros");

btnVer.addEventListener("click", async () => {
  const res = await fetch("/books");
  const books = await res.json();

  listaLibros.innerHTML = ""; 

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.id} - ${book.name || book.title} (${book.author}, ${book.year})`;
    listaLibros.appendChild(li);
  });
  });



/////// Escribe un libro 


const formLibro = 
document.getElementById("form-libro");
const inputTitulo = 
document.getElementById("input-titulo");
const inputAutor =
document.getElementById("input-autor");
const inputYear = 
document.getElementById("input-year");

formLibro.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  const nuevoLibro = {
    name: inputTitulo.value,
    author: inputAutor.value,
    year: parseInt(inputYear.value),
  };
  await fetch("/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoLibro),
  });
  formLibro.reset();

  alert("¡Libro guardado con éxito!");
});

/////////// Busca un libro en concreto por su ID 

const inputBuscarId = document.getElementById("input-buscar-id");
const btnBuscar = document.getElementById("btn-buscar");
const resultadoBusqueda = document.getElementById("resultado-busqueda");

btnBuscar.addEventListener("click", async () => {
  const id = inputBuscarId.value;

  if (!id) return;

  const res = await fetch(`/books/${id}`);
  const book = await res.json();


  //////// Si encuentra el Libro en que orden lo saca 

  if (book) {
    resultadoBusqueda.innerHTML = `
      <p><strong>Libro encontrado:</strong></p>
      <p>ID: ${book.id} | Nombre: ${book.name || book.title} | Autor: ${book.author} | Año: ${book.year}</p>
    `;
  } else {
    resultadoBusqueda.innerHTML = "<p>Libro no encontrado.</p>";
  }
});