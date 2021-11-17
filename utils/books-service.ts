import { Book } from "../interfaces";
import { API_URL } from "./env";

export async function fetchBooks(): Promise<Book[]> {
  try {
    const response = await fetch(`${API_URL}/api/books`);
    const books: Book[] = await response.json();
    return books;
  } catch (error) {
    throw new Error(`Error fetching books: ${error}`);
  }
}
