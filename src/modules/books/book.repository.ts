/*
================================================================================
📍 PASO 6 DE 6: book.repository.ts (El Almacenero / Acceso a Datos)
--------------------------------------------------------------------------------
📝 Tu nota: Este archivo es el único que sabe dónde y cómo se guardan los datos.
            Se encarga de interactuar con el almacenamiento (actualmente db.json,
            más adelante PostgreSQL con SELECT, INSERT, UPDATE, DELETE).

⬅️ VIENE DE:  Paso 5 -> `src/modules/books/book.service.ts`
⚙️ QUÉ HACE:  Abre `db.json` (o consulta la base de datos), busca, crea, modifica
              o borra el libro, y devuelve el resultado de vuelta hacia arriba.
➡️ VA HACIA:  Lee/escribe en `db.json` y devuelve el dato a `book.service.ts`
              (que lo sube a `book.controller.ts` -> y de ahí al navegador).

🗺️ MAPA DEL FLUJO:
   [1. server.ts] ➔ [2. app.ts] ➔ [3. book.routes.ts] ➔ [4. book.controller.ts] ➔ [5. book.service.ts] ➔ ⭐[6. book.repository.ts] ➔ (db.json)
================================================================================
*/

import fs from "fs";
import { Book, CreateBookInput, UpdateBookInput } from "./book.types.js";
const DB_PATH = "./db.json";

const readData = (): { books: Book[] } => {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
};

const writeData = (data: { books: Book[] }): void => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

export const findAll = (): Book[] => {
    const data = readData();
    return data.books;
};

export const findById = (id: number): Book | undefined => {
    const data = readData();
    return data.books.find((book) => book.id === id);
};

export const create = (input: CreateBookInput): Book => {
    const data = readData();
    const maxId = data.books.reduce((max, b) => (b.id > max ? b.id : max), 0);

    const newBook: Book = {
        id: maxId + 1,
        name: input.name,
        author: input.author,
        year: input.year,
    };
    data.books.push(newBook);
    writeData(data);
    return newBook;
};

export const update = (id: number, input: UpdateBookInput): Book | null => {
    const data = readData();
    const index = data.books.findIndex((book) => book.id === id);

    if (index === -1) {
        return null;
    }
    data.books[index] = {
        ...data.books[index],
        ...input,
    };

    writeData(data);
    return data.books[index];
};

export const remove = (id: number): boolean => {
    const data = readData();
    const index = data.books.findIndex((book) => book.id === id);
    if (index === -1) {
        return false; // No existía
    }
    data.books.splice(index, 1);
    writeData(data);
    return true;
};
