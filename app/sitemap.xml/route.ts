export async function GET() {
  const baseUrl = "https://cricaismus.com"

  const staticPages = [
    "",
    "/directory",
    "/blog",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
    "/sitemap",
    "/add-business",
  ]

  const categoryPages = [
    "/directory?category=restaurants",
    "/directory?category=healthcare",
    "/directory?category=retail",
    "/directory?category=services",
    "/directory?category=automotive",
    "/directory?category=beauty",
  ]

  const blogCategories = [
    "/blog?category=business-tips",
    "/blog?category=marketing",
    "/blog?category=customer-service",
    "/blog?category=finance",
  ]

  const allPages = [...staticPages, ...categoryPages, ...blogCategories]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === "" ? "daily" : page.includes("blog") ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : page.includes("directory") || page.includes("blog") ? "0.8" : "0.6"}</priority>
  </url>`,
  )
  .join("")}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
