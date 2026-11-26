/*
================================================================================
📍 PASO 4 DE 6: book.controller.ts (El Camarero / Controlador HTTP)
--------------------------------------------------------------------------------
📝 Tu nota: A la hora de hacer las peticiones, este archivo recibe los datos
            que ya han sido validados por el portero (validation.middleware),
            llama al servicio y devuelve la respuesta HTTP al usuario.

⬅️ VIENE DE:  Paso 3.5 -> `src/modules/books/book.validation.middleware.ts`
⚙️ QUÉ HACE:  1. Recibe la petición HTTP (`req.params.id`, `req.body`).
              2. Llama a `bookService` para hacer el trabajo real.
              3. Devuelve la respuesta HTTP al navegador (`res.json(...)` o 404).
➡️ VA HACIA:  Paso 5 -> `src/modules/books/book.service.ts`
              (y cuando el servicio le devuelve el resultado, responde al navegador).

🗺️ MAPA DEL FLUJO:
   [1. server] ➔ [2. app] ➔ [3. routes] ➔ [3.5 validation] ➔ ⭐[4. controller] ➔ [5. service] ➔ [6. repository]
================================================================================
*/

import { Request, Response } from "express";
import * as bookService from "./book.service.js";

////// 1 Muestra todos los libros
export const getBooks = (req: Request, res: Response) => {
  const books = bookService.getAllBooks();
  res.json(books);
};

///////// 2 Busca un libro por su ID
export const getBookById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const book = bookService.getBookById(id);

  if (!book) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.json(book);
};

////////// 3 Crea un nuevo libro
export const createBook = (req: Request, res: Response) => {
  const body = req.body;
  const name = body.name || body.title;
  const author = body.author;
  const year = parseInt(body.year);

  const newBook = bookService.createBook({ name, author, year });
  res.status(201).json(newBook);
};

/////// 4 Actualiza un libro
export const updateBook = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const body = req.body;
  const name = body.name || body.title;
  const author = body.author;
  const year = body.year !== undefined ? parseInt(body.year) : undefined;

  const updatedBook = bookService.updateBook(id, { name, author, year });

  if (!updatedBook) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.json(updatedBook);
};

////// 5 Borra un libro por su ID
export const deleteBook = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const deleted = bookService.deleteBook(id);

  if (!deleted) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }
  res.json({ mensaje: `Libro con el ID ${id} eliminado correctamente` });
};
