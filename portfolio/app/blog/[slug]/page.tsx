import { BlogPostPageClient } from "./BlogPostPageClient"
import type { Metadata } from "next"
import { allBlogPosts } from "@/data/blog-data"

const getPostBySlug = (slug: string) => {
  return allBlogPosts.find(post => post.slug === slug) || {
    title: "Post Not Found",
    date: "",
    readTime: "",
    image: null,
    content: "<p>This post could not be found.</p>",
    tags: [],
  }
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  return {
    title: post.title,
    description: post.content?.substring(0, 160).replace(/<[^>]*>/g, "") + "..." || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.content?.substring(0, 160).replace(/<[^>]*>/g, "") + "..." || post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Giovani Moutinho"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content?.substring(0, 160).replace(/<[^>]*>/g, "") + "..." || post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostPageClient params={params} />
}
