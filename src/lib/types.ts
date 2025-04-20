import { LucideProps } from "lucide-react";

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatarUrl: string;
  twitter?: string;
  facebook?: string;
  website?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  icon: LucideProps
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: Author;
  category: Category;
  tags: Tag[];
  readingTime: number;
  views: number;
}