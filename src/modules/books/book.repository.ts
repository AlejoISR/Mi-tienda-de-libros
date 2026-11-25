/*
- Este archivo es el unico que sabe donde y como se guardan los datos.
  Se encarga de interactuar con el almacenamiento (actualmente db.json, mas adelante PostgreSQL).

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
