import * as bookRepository from "./book.repository.js";
import { Book, CreateBookInput, UpdateBookInput } from "./book.types.js";

// 1. Obtener todos los libros
export const getAllBooks = (): Book[] => {
  return bookRepository.findAll();
};

// 2. Obtener un libro por su ID
export const getBookById = (id: number): Book | undefined => {
  return bookRepository.findById(id);
};

// 3. Crear un libro nuevo (limpiando espacios en blanco)
export const createBook = (input: CreateBookInput): Book => {
  const cleanInput: CreateBookInput = {
    name: input.name.trim(),
    author: input.author.trim(),
    year: input.year,
  };
  return bookRepository.create(cleanInput);
};

// 4. Actualizar un libro existente
export const updateBook = (id: number, input: UpdateBookInput): Book | null => {
  const cleanInput: UpdateBookInput = {
    ...input,
    ...(input.name ? { name: input.name.trim() } : {}),
    ...(input.author ? { author: input.author.trim() } : {}),
  };
  return bookRepository.update(id, cleanInput);
};

// 5. Borrar un libro
export const deleteBook = (id: number): boolean => {
  return bookRepository.remove(id);
};