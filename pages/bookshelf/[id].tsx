import { GetStaticProps, GetStaticPaths } from "next";
import Link from "../../components/Link";

import { Book } from "../../interfaces";
import { sampleBooksData } from "../../utils/sample-data";

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
  const paths = sampleBooksData.map((book) => ({
    params: { id: book.id.toString() },
  }));
  return {
    paths,
    fallback: false, // show a 404 if that path doesn't exist
  };
};

/**
 * getStaticProps docs:
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const book = sampleBooksData.find((data) => data.id === Number(id));
  return { props: { book } };
};
