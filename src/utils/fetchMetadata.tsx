import fs from 'fs';
import path from 'path';

export async function fetchMetadata(slug: string) {
  const metadata = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'public/data/metadata.json'), 'utf-8')
  );

  return metadata[slug] || metadata.homePage; // Use post-specific metadata or fallback to homepage metadata
}
