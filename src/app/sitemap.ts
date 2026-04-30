import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://md-asham-imad.vercel.app", lastModified: new Date() },
    { url: "https://md-asham-imad.vercel.app/about", lastModified: new Date() },
    { url: "https://md-asham-imad.vercel.app/skills", lastModified: new Date() },
    { url: "https://md-asham-imad.vercel.app/projects", lastModified: new Date() },
    { url: "https://md-asham-imad.vercel.app/education", lastModified: new Date() },
    { url: "https://md-asham-imad.vercel.app/contact", lastModified: new Date() },
  ];
}