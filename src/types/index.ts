// Blog post type
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  body: unknown[] // Rich text content
  publishedAt: string
  updatedAt: string
  categories?: Category[]
  tags?: Tag[]
  author?: Author
}

// Category type
export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

// Tag type
export interface Tag {
  _id: string
  name: string
  slug?: {
    current: string
  }
}

// Author type
export interface Author {
  _id: string
  name: string
  title?: string
  slug?: {
    current: string
  }
  image?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
  }
  bio?: string
  location?: string
  website?: string
  skills?: {
    category: string
    items: string[]
  }[]
  experience?: {
    company: string
    position: string
    period: string
    description: string
  }[]
  services?: {
    title: string
    description: string
    icon: string
  }[]
  achievements?: {
    title: string
    description: string
    year: string
  }[]
  social?: {
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    linkedin?: string
    facebook?: string
    note?: string
    zenn?: string
    qiita?: string
  }
}

// SEO meta type
export interface SEO {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: {
    asset: {
      _ref: string
    }
    alt: string
  }
}