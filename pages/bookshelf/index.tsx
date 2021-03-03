import { GetStaticProps } from "next";

import { Book } from "../../interfaces";
import { sampleBooksData } from "../../utils/sample-data";
import Link from "../../components/Link";

const Bookshelf: React.FC<{ books: Book[] }> = ({ books }) => (
  <>
    <h1>Bookshelf</h1>
    <p className="mb-3">
      This is an example fetching data with{" "}
      <Link href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation">
        getStaticProps()
      </Link>
      .
    </p>
    <p className="mb-3">There are {books.length} books:</p>
    <ul className="list-inside list-decimal">
      {books.map((book) => (
        <li key={book.id}>
          <Link href="/bookshelf/[id]" as={`/bookshelf/${book.id}`}>
            {book.name}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const books: Book[] = sampleBooksData;
  return { props: { books } };
};

export default Bookshelf;
