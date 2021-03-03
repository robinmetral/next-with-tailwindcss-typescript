import NextLink, { LinkProps } from "next/link";

interface Props extends Omit<LinkProps, "href"> {
  href: string;
}

const Link: React.FC<Props> = ({ children, href, ...rest }) => {
  const isExternal: boolean = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className="text-blue-900 hover:text-blue-700">
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} {...rest}>
      <a className="text-blue-900 hover:text-blue-700">{children}</a>
    </NextLink>
  );
};

export default Link;
