import { GetStaticProps, GetStaticPaths } from "next";
import Link from "../../components/Link";

import { Book } from "../../interfaces";
import { fetchBooks } from "../../utils/books-service";

const BookDetail: React.FC<{ book: Book }> = ({ book }) => (
  <>
    <h1>{book.name}</h1>
    <p className="mb-3">By {book.author}</p>
    <p>
      <Link href="/bookshelf">Back to the bookshelf</Link>
    </p>
  </>
);

export default BookDetail;

/**
 * getStaticPaths docs:
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const books = await fetchBooks();
  const paths = books.map((book) => ({
    params: { id: book.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

/**
 * getStaticProps docs:
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const books = await fetchBooks();
  const id = params?.id;
  const book = books.find((data) => data.id === Number(id));
  return { props: { book } };
};
