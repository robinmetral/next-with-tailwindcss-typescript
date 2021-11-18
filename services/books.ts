import { Book } from "../interfaces";

export const sampleBooks = [
  { isbn: "4770016832", title: "Dance Dance Dance" },
  { isbn: "0452265169", title: "A Wild Sheep Chase" },
  { isbn: "0679446699", title: "The Wind-Up Bird Chronicle" },
  { isbn: "9780375704024", title: "Norwegian Wood" },
  { isbn: "9781400043668", title: "Kafka on the Shore" },
];

export async function fetchBooks(): Promise<Book[]> {
  const requestUrl = `https://openlibrary.org/api/books?bibkeys=${sampleBooks
    .map((b) => `ISBN:${b.isbn}`)
    .join(",")}&format=json&jscmd=data`;

  try {
    const response = await fetch(requestUrl);
    const data: { [isbn: string]: Book } = await response.json();
    const books = Object.entries(data).map(([isbn, book]) => ({
      ...book,
      isbn: isbn.replace("ISBN:", ""),
    }));
    return books;
  } catch (error) {
    throw new Error(`Error fetching books: ${error}`);
  }
}
