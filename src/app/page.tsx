import Home from "@/pages/Home";
import MetaWrapper from "@/components/MetaWrapper";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "SI2025",
  description: "Si 2025",
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <MetaWrapper slug={params.slug}>
      {/* Your page content here */}
      <Home />
    </MetaWrapper>
  );
}
