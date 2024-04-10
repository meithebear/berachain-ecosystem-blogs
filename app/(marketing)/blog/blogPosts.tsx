"use client"

import React, { useState } from "react"

import BlogCard from "./blogCard"
import "@/styles/post.css"
import { Post } from "@/types"

import { Button } from "@/components/ui/button"

interface BlogPostsProps {
  posts: Post[]
}

const CATEGORIES = [
  "All",
  "News",
  "Technical Blogs",
  "Developers",
  "Case Studies",
  "Policy",
]

export default function BlogPosts({ posts }: BlogPostsProps) {
  const [category, setCategory] = useState<string>("All")

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      category === "All" || post.primary_tag?.name === category
    return matchesCategory
  })
  return (
    <div className="max-w-8xl container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="font-heading inline-block text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <div className="text-muted-foreground text-xl">
            A place for everything Berachain.
          </div>
        </div>
      </div>

      <hr className="my-8" />
      <div className="flex flex-row items-start justify-between">
        <div className="hidden min-w-[220px] flex-col gap-4 sm:flex">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="text-muted-foreground w-full justify-start p-4 text-[14px]"
              onClick={() => setCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          {filteredPosts?.length ? (
            <div className="grid gap-10 sm:grid-cols-2">
              {filteredPosts.map((post, index) => (
                <BlogCard post={post} key={index} />
              ))}
            </div>
          ) : (
            <p>No posts published.</p>
          )}
        </div>
      </div>
    </div>
  )
}
