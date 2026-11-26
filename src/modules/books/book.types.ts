/*
================================================================================
📖 ARCHIVO DE APOYO: book.types.ts (El Diccionario / Moldes de Datos)
--------------------------------------------------------------------------------
📝 Tu nota: Le damos un formato (un cuerpo) a la estructura de los libros y de
            las peticiones para saber qué contiene cada cosa.

🔗 QUIÉN LO USA: Lo importan `book.service.ts` y `book.repository.ts` para que
                 TypeScript vigile que un libro siempre tenga `id`, `name`, `author` y `year`.
================================================================================
*/

export interface Book {
  id: number;
  name?: string;
  title?: string;
  author: string;
  year: number;
}

export interface CreateBookInput {
  name: string;
  author: string;
  year: number;
}

export interface UpdateBookInput {
  name?: string;
  author?: string;
  year?: number;
}
