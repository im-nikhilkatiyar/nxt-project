import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://yourdomain.com";
  
  const pages = ["/", "/about", "/contact"]; // Add more dynamic routes if needed

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.8</priority>
            </url>
          `
        )
        .join("")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
