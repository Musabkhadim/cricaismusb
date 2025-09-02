export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://cricaismus.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /dashboard/private/

# Allow important pages
Allow: /
Allow: /directory
Allow: /blog
Allow: /about
Allow: /contact
Allow: /terms
Allow: /privacy
Allow: /sitemap

# Block sensitive areas
Disallow: /user/private/
Disallow: /business/edit/
Disallow: /login
Disallow: /signup`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
