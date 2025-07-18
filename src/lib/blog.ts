import { client } from './sanity'
import { BlogPost } from '@/types'

// ブログ記事一覧を取得
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      categories[]->{
        _id,
        title
      },
      tags[]->{
        _id,
        name
      },
      author->{
        _id,
        name,
        image {
          asset->{
            _id,
            url
          }
        }
      }
    }
  `
  
  return await client.fetch(query)
}

// 特定のブログ記事を取得
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      categories[]->{
        _id,
        title
      },
      tags[]->{
        _id,
        name
      },
      author->{
        _id,
        name,
        image {
          asset->{
            _id,
            url
          }
        }
      }
    }
  `
  
  return await client.fetch(query, { slug })
}

// カテゴリ別記事を取得
export async function getPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  const query = `
    *[_type == "blogPost" && references($categoryId)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      categories[]->{
        _id,
        title
      },
      tags[]->{
        _id,
        name
      }
    }
  `
  
  return await client.fetch(query, { categoryId })
}

// タグ別記事を取得
export async function getPostsByTag(tagId: string): Promise<BlogPost[]> {
  const query = `
    *[_type == "blogPost" && references($tagId)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      categories[]->{
        _id,
        title
      },
      tags[]->{
        _id,
        name
      }
    }
  `
  
  return await client.fetch(query, { tagId })
}

// サイドバー用のアーカイブデータを取得
export async function getArchiveData() {
  const query = `
    {
      "yearArchives": *[_type == "blogPost"] | order(publishedAt desc) {
        "year": dateTime(publishedAt).year,
        "month": dateTime(publishedAt).month,
        publishedAt
      },
      "categories": *[_type == "category"] {
        _id,
        title,
        slug,
        "postCount": count(*[_type == "blogPost" && references(^._id)])
      }[postCount > 0] | order(postCount desc),
      "tags": *[_type == "tag"] {
        _id,
        name,
        slug,
        "postCount": count(*[_type == "blogPost" && references(^._id)])
      }[postCount > 0] | order(postCount desc)
    }
  `
  
  return await client.fetch(query)
}