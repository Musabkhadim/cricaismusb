import React from "react";

// SEO-optimized metadata with natural keyword integration
export const metadata = {
  title: "Pakistan Business Directory - Find Local Companies & Services Online",
  description: "Complete Pakistan business directory with verified local companies, restaurants, and services in Lahore, Islamabad, Karachi. Find top businesses near you with contact details and reviews.",
  keywords: [
    // Primary keywords - clustered naturally
    "Business Directory Pakistan",
    "Pakistani Companies List", 
    "Pakistan Yellow Pages",
    "Find Companies in Pakistan",
    
    // City-specific keywords
    "Lahore Business Directory",
    "Islamabad Business Directory", 
    "Lahore Local Businesses",
    "Top Businesses Lahore Pakistan",
    
    // Category-specific keywords
    "Restaurants in Pakistan",
    "Restaurants in Lahore",
    "Restaurants in Islamabad", 
    "Restaurants in Karachi",
    "Services in Lahore Pakistan",
    
    // Supporting keywords
    "Pakistani Businesses",
    "Small Business Pakistan",
    "Business List Pakistan",
    "Business Directory Online Pakistan"
  ].join(", "),
  
  // Additional SEO metadata
  openGraph: {
    title: "Pakistan Business Directory - Find Local Companies Online",
    description: "Discover verified businesses across Pakistan. Search companies, restaurants, and services in major cities with contact details and customer reviews.",
    type: "website",
    locale: "en_PK",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Business Directory - Local Companies & Services",
    description: "Find trusted businesses in Pakistan. Complete directory of companies, restaurants, and services across all major cities.",
  },
  
  // Structured data hints
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "ICBM": "30.3753,69.3451", // Pakistan coordinates
  }
};

export default function DirectoryLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <section className="directory-container">
      {/* SEO-optimized H1 with primary keywords naturally integrated */}
    

      {/* Breadcrumb navigation for SEO */}
      
     

      {/* Main content area */}
      <main className="directory-content">
        {children}
      </main>

      {/* Footer with additional keyword context */}
      <footer className="directory-footer">
       
      </footer>
    </section>
  );
}

// Alternative version with more structured keyword implementation
export function AlternativeDirectoryLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <section className="business-directory-pakistan">
      {/* Primary H1 with main keyword */}
      <h1 className="main-heading">
        Business Directory Pakistan - Complete Pakistani Companies List
      </h1>
      
      {/* City-specific navigation */}
      <nav className="city-navigation">
        <h2>Find Businesses by City</h2>
        <ul>
          <li><a href="/lahore-business-directory">Lahore Business Directory</a></li>
          <li><a href="/islamabad-business-directory">Islamabad Business Directory</a></li>
          <li><a href="/karachi-business-directory">Karachi Business Directory</a></li>
        </ul>
      </nav>
      
      {/* Category-specific navigation */}
      <nav className="category-navigation">
        <h2>Browse Business Categories</h2>
        <ul>
          <li><a href="/restaurants-pakistan">Restaurants in Pakistan</a></li>
          <li><a href="/small-business-pakistan">Small Business Pakistan</a></li>
          <li><a href="/professional-services">Services in Pakistan</a></li>
        </ul>
      </nav>

      {children}
      
      {/* Schema.org structured data component */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Pakistan Business Directory",
            "description": "Complete business directory for Pakistani companies and services",
            "url": "https://cricaismus.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cricaismus.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </section>
  );
}

// Utility function for dynamic keyword integration based on page context
export function generatePageMetadata(pageType: string, city?: string, category?: string) {
  const baseKeywords = [
    "Business Directory Pakistan",
    "Pakistani Companies List",
    "Find Companies in Pakistan"
  ];
  
  const cityKeywords = city ? [
    `${city} Business Directory`,
    `${city} Local Businesses`,
    `Top Businesses ${city} Pakistan`
  ] : [];
  
  const categoryKeywords = category ? [
    `${category} in Pakistan`,
    `${category} Directory Pakistan`,
    `Best ${category} Pakistan`
  ] : [];
  
  return {
    title: generateTitle(pageType, city, category),
    description: generateDescription(pageType, city, category),
    keywords: [...baseKeywords, ...cityKeywords, ...categoryKeywords].join(", ")
  };
}

function generateTitle(pageType: string, city?: string, category?: string): string {
  if (city && category) {
    return `${category} in ${city} - ${city} Business Directory`;
  } else if (city) {
    return `${city} Business Directory - Local Companies & Services`;
  } else if (category) {
    return `${category} Directory Pakistan - Find Best ${category}`;
  }
  return "Pakistan Business Directory - Find Local Companies Online";
}

function generateDescription(pageType: string, city?: string, category?: string): string {
  if (city && category) {
    return `Find best ${category.toLowerCase()} in ${city}, Pakistan. Complete directory with contact details, reviews, and locations for ${category.toLowerCase()} in ${city}.`;
  } else if (city) {
    return `Complete ${city} business directory with verified local companies, restaurants, and services. Find trusted businesses in ${city}, Pakistan with contact details.`;
  } else if (category) {
    return `Discover top ${category.toLowerCase()} across Pakistan. Complete directory of verified ${category.toLowerCase()} with reviews, contact details, and locations.`;
  }
  return "Complete Pakistan business directory with verified companies, restaurants, and services across all major cities. Find local businesses with reviews and contact details.";
}