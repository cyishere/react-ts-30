import Head from "next/head";

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title} | CY&#39;s Portfolio</title>
      <meta
        name="description"
        content="JavaScript 30 with React and TypeScript"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default SEO;
