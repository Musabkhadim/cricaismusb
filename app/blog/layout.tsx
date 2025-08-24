import React from "react";

// SEO-optimized blog metadata with clustered keyword integration
export const metadata = {
  title: "Business Insights & Expert Tips - Your Complete Guide to Success in Pakistan",
  description: "Get expert business insights, technology tips, online earning opportunities, SEO strategies, and education guides. Complete resource for professional growth and success in Pakistan with practical advice.",
  keywords: [
    // Business Growth Cluster
    "Small Business Tips Pakistan",
    "Business Ideas Pakistan 2025", 
    "Pakistani Entrepreneur Success Stories",
    "How to Start Business Pakistan",
    
    // Digital Earning Cluster
    "Online Earning Pakistan",
    "Freelancing Tips Pakistan",
    "Work from Home Pakistan",
    "Digital Marketing Jobs Pakistan",
    
    // Technology Cluster
    "Technology News Pakistan",
    "AI Technology Pakistan",
    "Pakistani Tech Startups",
    "IT Trends Pakistan",
    
   
    // SEO & Marketing Cluster
    "SEO Tips Pakistan",
    "Digital Marketing Pakistan",
    "Social Media Marketing Pakistan",
    "Local SEO Pakistan",
    
    // Supporting keywords
    "Business Insights Pakistan",
    "Technology Education Pakistan",
    "Online Learning Pakistan",
    "Pakistani Success Stories"
  ].join(", "),
  
  // Blog-specific SEO metadata
  openGraph: {
    title: "Business Insights & Expert Tips - Complete Success Guide Pakistan",
    description: "Expert advice on business growth, technology trends, online earning, education, and SEO strategies. Your complete resource for professional success in Pakistan.",
    type: "website",
    locale: "en_PK",
    siteName: "Cricaismus Blog"
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Business Insights & Tips - Expert Advice for Pakistani Professionals",
    description: "Get practical business advice, tech insights, earning opportunities, and SEO tips. Complete guide for success in Pakistan's digital economy.",
  },
  
  // Additional blog metadata
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "ICBM": "30.3753,69.3451",
    "article:publisher": "Cricaismus",
    "article:author": "Business Experts Pakistan"
  }
};

export default function BlogLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <section className="blog-container">
   
      <main className="blog-content">
        {children}
      </main>

      
   
    </section>
  );
}

// Alternative blog layout with more structured category focus
export function CategoryFocusedBlogLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <section className="business-blog-pakistan">
      {/* Primary H1 with main blog keyword */}
      <h1 className="blog-main-heading">
        Business Insights & Expert Tips - Complete Success Guide for Pakistan
      </h1>
      
      {/* Business insights navigation */}
      <nav className="business-insights-nav">
        <h2>💼 Business Growth & Entrepreneurship</h2>
        <ul>
          <li><a href="/blog/small-business-tips-pakistan">Small Business Tips Pakistan</a></li>
          <li><a href="/blog/business-ideas-pakistan-2025">Business Ideas Pakistan 2025</a></li>
          <li><a href="/blog/pakistani-entrepreneur-stories">Pakistani Success Stories</a></li>
          <li><a href="/blog/startup-guide-pakistan">How to Start Business Pakistan</a></li>
        </ul>
      </nav>
      
      {/* Online earning navigation */}
      <nav className="online-earning-nav">
        <h2>💰 Online Earning & Freelancing</h2>
        <ul>
          <li><a href="/blog/online-earning-pakistan">Online Earning Pakistan</a></li>
          <li><a href="/blog/freelancing-tips-pakistan">Freelancing Tips Pakistan</a></li>
          <li><a href="/blog/work-from-home-pakistan">Work from Home Pakistan</a></li>
          <li><a href="/blog/digital-marketing-jobs-pakistan">Digital Marketing Jobs</a></li>
        </ul>
      </nav>

      {/* Technology navigation */}
      <nav className="technology-nav">
        <h2>💻 Technology & Innovation</h2>
        <ul>
          <li><a href="/blog/technology-news-pakistan">Technology News Pakistan</a></li>
          <li><a href="/blog/ai-technology-pakistan">AI Technology Pakistan</a></li>
          <li><a href="/blog/pakistani-tech-startups">Pakistani Tech Startups</a></li>
          <li><a href="/blog/it-trends-pakistan">IT Trends Pakistan</a></li>
        </ul>
      </nav>

      {/* Education navigation */}
      <nav className="education-nav">
        <h2>🎓 Education & Skill Development</h2>
        <ul>
          <li><a href="/blog/online-courses-pakistan">Online Courses Pakistan</a></li>
          <li><a href="/blog/skill-development-pakistan">Skill Development Pakistan</a></li>
          <li><a href="/blog/professional-courses-pakistan">Professional Courses</a></li>
          <li><a href="/blog/career-guidance-pakistan">Career Guidance Pakistan</a></li>
        </ul>
      </nav>

      {/* SEO & Marketing navigation */}
      <nav className="seo-marketing-nav">
        <h2>📈 SEO & Digital Marketing</h2>
        <ul>
          <li><a href="/blog/seo-tips-pakistan">SEO Tips Pakistan</a></li>
          <li><a href="/blog/digital-marketing-pakistan">Digital Marketing Pakistan</a></li>
          <li><a href="/blog/social-media-marketing-pakistan">Social Media Marketing</a></li>
          <li><a href="/blog/local-seo-pakistan">Local SEO Pakistan</a></li>
        </ul>
      </nav>

      {children}
      
      {/* Blog-specific Schema.org structured data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Business Insights & Expert Tips - Cricaismus Blog",
            "description": "Expert business advice, technology insights, online earning tips, education guides, and SEO strategies for Pakistani professionals",
            "url": "https://cricaismus.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Cricaismus",
              "url": "https://cricaismus.com"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Business Growth Tips",
                  "url": "https://cricaismus.com/blog/business-insights"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Online Earning Opportunities",
                  "url": "https://cricaismus.com/blog/online-earning"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Technology Trends",
                  "url": "https://cricaismus.com/blog/technology"
                }
              ]
            }
          })
        }}
      />
    </section>
  );
}

// Dynamic blog metadata generator for category pages
export function generateBlogMetadata(
  category?: string, 
  topic?: string, 
  city?: string
): {
  title: string;
  description: string;
  keywords: string;
} {
  const baseKeywords = [
    "Business Insights Pakistan",
    "Expert Tips Pakistan", 
    "Professional Success Guide Pakistan"
  ];
  
  const categoryKeywords: { [key: string]: string[] } = {
    "business": [
      "Small Business Tips Pakistan",
      "Business Ideas Pakistan 2025",
      "Pakistani Entrepreneur Success Stories"
    ],
    "online-earning": [
      "Online Earning Pakistan",
      "Freelancing Tips Pakistan", 
      "Work from Home Pakistan"
    ],
    "technology": [
      "Technology News Pakistan",
      "AI Technology Pakistan",
      "Pakistani Tech Startups"
    ],
    "education": [
      "Online Courses Pakistan",
      "Skill Development Pakistan",
      "Career Guidance Pakistan"
    ],
    "seo": [
      "SEO Tips Pakistan",
      "Digital Marketing Pakistan",
      "Local SEO Pakistan"
    ]
  };
  
  const topicKeywords = topic ? [
    `${topic} Pakistan`,
    `${topic} Tips Pakistan`,
    `Best ${topic} Pakistan`
  ] : [];
  
  const cityKeywords = city ? [
    `${category || 'Business'} ${city} Pakistan`,
    `${topic || 'Tips'} ${city}`,
    `Professional Services ${city}`
  ] : [];
  
  const allKeywords = [
    ...baseKeywords,
    ...(category ? categoryKeywords[category] || [] : []),
    ...topicKeywords,
    ...cityKeywords
  ];
  
  return {
    title: generateBlogTitle(category, topic, city),
    description: generateBlogDescription(category, topic, city),
    keywords: allKeywords.join(", ")
  };
}

function generateBlogTitle(category?: string, topic?: string, city?: string): string {
  if (city && topic && category) {
    return `${topic} in ${city} - Complete ${category} Guide Pakistan`;
  } else if (topic && category) {
    return `${topic} Pakistan - Expert ${category} Guide & Tips`;
  } else if (category) {
    return `${category.charAt(0).toUpperCase() + category.slice(1)} Tips Pakistan - Expert Advice & Insights`;
  }
  return "Business Insights & Expert Tips - Complete Success Guide Pakistan";
}

function generateBlogDescription(category?: string, topic?: string, city?: string): string {
  if (city && topic && category) {
    return `Complete guide to ${topic.toLowerCase()} in ${city}, Pakistan. Expert ${category} advice with practical tips, strategies, and local insights for success.`;
  } else if (topic && category) {
    return `Expert guide to ${topic.toLowerCase()} in Pakistan. Comprehensive ${category} advice with practical strategies, tips, and insights for professional success.`;
  } else if (category) {
    return `Get expert ${category} advice and insights tailored for Pakistani professionals. Practical tips, strategies, and guides for achieving success in Pakistan's market.`;
  }
  return "Get expert business insights, technology tips, online earning opportunities, education guides, and SEO strategies. Complete resource for professional growth and success in Pakistan.";
}

// Blog post wrapper component
export function BlogPostLayout({ 
  children, 
  category, 
  title, 
  description 
}: { 
  children: React.ReactNode;
  category?: string;
  title?: string;
  description?: string;
}) {
  return (
    <article className="blog-post">
      <header className="post-header">
        {category && (
          <span className="post-category">{category}</span>
        )}
        {title && <h1 className="post-title">{title}</h1>}
        {description && <p className="post-description">{description}</p>}
      </header>
      
      <div className="post-content">
        {children}
      </div>
      
      <footer className="post-footer">
        <div className="post-tags">
          <span>Related Topics: </span>
          {category && (
            <a href={`/blog/${category}`} className="tag">
              {category.replace('-', ' ')}
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}