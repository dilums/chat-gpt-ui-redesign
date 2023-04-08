import Head from "next/head";
import siteMetadata from "@/data/siteMetadata";

interface HeadComponentProps {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
  author?: string;
  keywords?: string;
  favicon?: string;
  language?: string;
  ogType?: string;
  canonicalUrl?: string;
  slug?: string;
}

const HeadComponent: React.FC<HeadComponentProps> = ({
  title,
  description,
  ogImage,
  url,
  author,
  keywords,
  favicon,
  language,
  ogType,
  canonicalUrl,
  slug,
}) => {
  title = title || siteMetadata.title;
  description = description || siteMetadata.description;
  ogImage = ogImage || siteMetadata.ogImage;
  url = slug ? `${siteMetadata.url}${slug}` : siteMetadata.url;
  author = author || siteMetadata.author;
  keywords = keywords || siteMetadata.keywords;
  favicon = favicon || siteMetadata.favicon;
  language = language || siteMetadata.language;
  ogType = ogType || "website";
  canonicalUrl = slug ? `${siteMetadata.url}${slug}` : siteMetadata.url;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="icon" href={favicon} />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="language" content={language} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:url" content={url} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default HeadComponent;
