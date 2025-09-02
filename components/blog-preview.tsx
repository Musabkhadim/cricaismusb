"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { db } from "@/app/firebase/config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp,
  DocumentData,
} from "firebase/firestore";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // formatted date string
  category: string;
  image: string;
  readTime: string;
}

export function BlogPreview() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogCollection = collection(db, "bloge");
        const blogQuery = query(blogCollection, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(blogQuery);

        const posts: BlogPost[] = snapshot.docs.map((doc) => {
          const data = doc.data() as DocumentData;

          const createdAt: Timestamp | string | undefined = data.createdAt;

          const formattedDate =
            createdAt instanceof Timestamp
              ? createdAt.toDate().toISOString()
              : data.date || new Date().toISOString();

          return {
            id: doc.id,
            title: data.title || "Untitled",
            excerpt:
              data.excerpt ||
              data.description?.slice(0, 100) ||
              "No excerpt available.",
            author: data.author || "Unknown",
            date: formattedDate,
            category: data.category || "latest",
            image: data.imageUrl || "/placeholder.svg",
            readTime: data.readTime || "informational",
          };
        });

        setBlogPosts(posts.slice(0, 3)); // Show only latest 3
      } catch (error) {
        console.error("❌ Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center py-12">Loading blog posts...</p>;
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-center mb-10">
 <h2 className="text-5xl md:text-6xl font-extrabold mb-6 
  bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent 
  drop-shadow-lg tracking-wide">
  Latest  Our Blog
</h2>


</h2>

          <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
 Stay updated and get ready to explore our blog for the latest business insights, practical tips, and industry trends.
</p>

         
       
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-green-600">
                    {post.category}
                  </Badge>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3"
                       dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-950"
                  >
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
