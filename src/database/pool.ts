/*
================================================================================
🔌 CONEXIÓN A BASE DE DATOS: pool.ts (El Cable hacia PostgreSQL)
--------------------------------------------------------------------------------
📝 Tu nota: Crea y mantiene abierta la conexión con la base de datos PostgreSQL
            usando las credenciales que le da la caja fuerte (`env.ts`).

⬅️ VIENE DE:  Toma los datos de `src/common/config/env.ts` (host, puerto, usuario...).
⚙️ QUÉ HACE:  Crea el `pool` de PostgreSQL para poder lanzar consultas SQL.
➡️ VA HACIA:  Lo usará `src/modules/books/book.repository.ts` cuando pasemos
              de `db.json` a consultas SQL (`pool.query(...)`).
================================================================================
*/

import pg from "pg";
import { env } from "../common/config/env.js";

const { Pool } = pg;

export const pool = new Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
});