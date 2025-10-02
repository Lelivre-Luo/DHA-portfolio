"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { SharePost } from "@/components/share-post"
import { FloatingShareButton } from "@/components/floating-share-button"
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

export function BlogPostPageClient({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  return (
    <div className="container py-12 relative">
      {/* Floating share button - client component */}
      <FloatingShareButton title={post.title} url={`https://mgiovani.com/blog/${params.slug}`} />

      <div className="max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto"
            onClick={() => {
              // This is just for UI - actual sharing is handled by SharePost component
              const shareSection = document.getElementById("share-section")
              if (shareSection) {
                shareSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <Share2 className="mr-1 h-4 w-4" />
            Share
          </Button>
        </div>

        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={500}
            className="object-cover w-full"
            priority
          />
        </div>

        <div className="flex gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-muted rounded-full px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div id="share-section" className="border-t mt-12 pt-8">
          {/* SharePost component with actual sharing functionality */}
          <SharePost title={post.title} slug={params.slug} />
        </div>
      </div>
    </div>
  )
}
