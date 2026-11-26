/*
================================================================================
📍 PASO 3 DE 6: book.routes.ts (El Recepcionista / Mapa de URLs)
--------------------------------------------------------------------------------
📝 Tu nota: Enruta las carpetas y dirige cada URL a su portero (validador) y
            después a su función del controlador.

⬅️ VIENE DE:  Paso 2 -> `src/app.ts` (cuando llega una petición a `/books`).
⚙️ QUÉ HACE:  Mira el método (GET, POST, PUT, DELETE) y la URL (`/books` o `/books/:id`),
              pasa primero por el Portero (`validateBookId` / `validateCreateBook`)
              y luego llama al Camarero (`book.controller.ts`).
➡️ VA HACIA:  Paso 3.5 -> `book.validation.middleware.ts` ➔ Paso 4 -> `book.controller.ts`

🗺️ MAPA DEL FLUJO:
   [1. server] ➔ [2. app] ➔ ⭐[3. routes] ➔ [3.5 validation] ➔ [4. controller] ➔ [5. service] ➔ [6. repository]
================================================================================
*/

import { Router } from "express";
import { getBooks, getBookById, createBook, updateBook, deleteBook } from "./book.controller.js";
import { validateBookId, validateCreateBook } from "./book.validation.middleware.js";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:id", validateBookId, getBookById);       // 1º Portero (ID), 2º Camarero
router.post("/books", validateCreateBook, createBook);       // 1º Portero (Body), 2º Camarero
router.put("/books/:id", validateBookId, updateBook);        // 1º Portero (ID), 2º Camarero
router.delete("/books/:id", validateBookId, deleteBook);     // 1º Portero (ID), 2º Camarero

export default router;
