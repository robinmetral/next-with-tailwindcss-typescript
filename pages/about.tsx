import Link from "../components/Link";

const About: React.FC = () => (
  <>
    <h1>About</h1>
    <p className="mb-3">
      This is a boilerplate Next.js website using Tailwind CSS and TypeScript.
    </p>
    <p>
      The source is on{" "}
      <Link href="https://github.com/robinmetral/next-with-tailwindcss-typescript">
        GitHub
      </Link>
      .
    </p>
  </>
);

export default About;
