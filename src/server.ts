/*
================================================================================
📍 PASO 1 DE 6: server.ts (El Interruptor que enciende el servidor)
--------------------------------------------------------------------------------
📝 Tu nota: Se encarga de abrir el canal (puerto 3001) para poder recibir
            y responder peticiones.

⬅️ VIENE DE:  Comando `npm run dev` en la terminal (arranque).
⚙️ QUÉ HACE:  Importa la aplicación desde `app.ts` y abre el puerto 3001.
➡️ VA HACIA:  Paso 2 -> `src/app.ts` (donde entran todas las peticiones).

🗺️ MAPA DEL FLUJO:
   ⭐[1. server.ts] ➔ [2. app.ts] ➔ [3. book.routes.ts] ➔ [4. book.controller.ts] ➔ [5. book.service.ts] ➔ [6. book.repository.ts]
================================================================================
*/

import app from "./app.js"
import { env } from "./common/config/env.js";

const PORT = env.PORT;

app.listen(PORT, () =>{
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});