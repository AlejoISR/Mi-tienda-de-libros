/*
================================================================================
📍 PASO 3.5 DE 6: book.validation.middleware.ts (El Portero / Validador)
--------------------------------------------------------------------------------
📝 Tu nota: Revisa que el ID de la URL o los datos del formulario (body) sean
            correctos ANTES de dejar pasar la petición al controlador.

⬅️ VIENE DE:  Paso 3 -> `src/modules/books/book.routes.ts`
⚙️ QUÉ HACE:  - Si los datos están mal -> responde con Error 400 y corta el viaje.
              - Si los datos están bien -> llama a `next()` para dejar pasar.
➡️ VA HACIA:  Paso 4 -> `src/modules/books/book.controller.ts`

🗺️ MAPA DEL FLUJO:
   [1. server] ➔ [2. app] ➔ [3. routes] ➔ ⭐[3.5 validation] ➔ [4. controller] ➔ [5. service] ➔ [6. repository]
================================================================================
*/

import { Request, Response, NextFunction } from "express";

//// 1- busca un libro por su ID, si supero dicho filtro sale de la funcion con un NEXT ();
export const validateBookId = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id as string);

  if (isNaN(id) || id < 0) {
    return res.status(400).json({ error: "El ID debe ser un numero valido" });
  }
  next();
};

///// 2- Crea un libro nuevo y verifica los parametros una vez que todo esta bien lo que hace es mandar un next();
export const validateCreateBook = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const name = body.name || body.title;
  const author = body.author;
  const year = parseInt(body.year);

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "El titulo es obligatorio y debe ser texto" });
  }

  if (!author || typeof author !== "string" || author.trim() === "") {
    return res.status(400).json({ error: "El autor es obligatorio y tiene que ser texto" });
  }

  if (!year || isNaN(year) || year < 0) {
    return res.status(400).json({ error: "El año es obligatorio y debe ser numero valido" });
  }

  next();
};
