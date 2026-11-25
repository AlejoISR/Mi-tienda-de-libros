import express from "express";
import bookRoutes from "./modules/books/book.routes.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(bookRoutes);

export default app;


///Este archvo es estatico no se conecta a ningun canal, lo que hace es apuntar a la carpeta de los filtrados
/// Lo que podeos hacer aqui es hacer Test de forma interna sin comprometer al servidor o tener que ocupar el puerto princiapl
