// utils/getPageMetadata.ts
import { GetServerSideProps } from "next";
import { fetchMetadata } from "./fetchMetadata";

export const getPageMetadata = (): GetServerSideProps => {
  return async ({ params }) => {
    const { slug } = params as { slug: string };
    const metadata = await fetchMetadata(slug || 'default');
    return {
      props: { metadata },
    };
  };
};
