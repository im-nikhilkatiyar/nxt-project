import Head from 'next/head';
import { fetchMetadata } from '../utils/fetchMetadata';

type MetaWrapperProps = {
  slug: string;
  children: React.ReactNode;
};

const MetaWrapper = async ({ slug, children }: MetaWrapperProps) => {
  // Fetch metadata directly in the Server Component
  const { title, description, image, url } = await fetchMetadata(slug || 'default');

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
      </Head>
      {children}
    </>
  );
};

export default MetaWrapper;
