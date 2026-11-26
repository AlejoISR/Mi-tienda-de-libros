/*
================================================================================
📍 PASO 2 DE 6: app.ts (La Puerta Principal de Express)
--------------------------------------------------------------------------------
📝 Tu nota: Este archivo no abre ningún puerto por sí solo; configura los filtros
            y apunta a las carpetas de rutas. Permite hacer tests internos sin
            ocupar el puerto principal.

⬅️ VIENE DE:  Paso 1 -> `src/server.ts` (o del navegador cuando pide la web).
⚙️ QUÉ HACE:  1. Activa `express.json()` para entender datos JSON.
              2. Sirve la carpeta `public/` (tu frontend HTML/JS).
              3. Envía las peticiones de libros hacia `bookRoutes`.
➡️ VA HACIA:  Paso 3 -> `src/modules/books/book.routes.ts`

🗺️ MAPA DEL FLUJO:
   [1. server.ts] ➔ ⭐[2. app.ts] ➔ [3. book.routes.ts] ➔ [4. book.controller.ts] ➔ [5. book.service.ts] ➔ [6. book.repository.ts]
================================================================================
*/

import express from "express";
import bookRoutes from "./modules/books/book.routes.js";
import { errorHandler } from "./common/middlewares/error.middleware.js";
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(bookRoutes);
app.use(errorHandler);

export default app;
