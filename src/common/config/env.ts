/*
================================================================================
🔐 CAJA FUERTE DE CONFIGURACIÓN: env.ts (Variables de Entorno)
--------------------------------------------------------------------------------
📝 Tu nota: Es el ÚNICO archivo de todo el proyecto que lee el archivo `.env`
            (`process.env`). Valida que existan los datos y los reparte limpios.

⬅️ VIENE DE:  Lee el archivo `.env` de la raíz del proyecto.
⚙️ QUÉ HACE:  Carga las variables (puerto, datos de PostgreSQL) y las convierte
              al tipo correcto (números o textos).
➡️ VA HACIA:  `src/server.ts` (le da el PORT) y `src/database/pool.ts` (le da los
              datos de conexión a PostgreSQL).
================================================================================
*/

// Carga automáticamente el archivo .env si existe
try {
  process.loadEnvFile();
} catch {
  // Si no hay archivo .env, usamos los valores por defecto de abajo
}

export const env = {
  PORT: Number(process.env.PORT) || 3001,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB_NAME: process.env.DB_NAME || "aprendizaje_db",
};