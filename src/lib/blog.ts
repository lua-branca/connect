import { client } from './sanity'
import { BlogPost } from '@/types'
import { samplePosts, sampleArchiveData } from '@/data/sample-posts'

// ブログ記事一覧を取得
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const query = `
      *[_type == "blogPost"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author->{name, image},
        categories[]->{_id, title, color},
        tags[]->{_id, title},
        mainImage {
          asset->{_id, url},
          alt
        }
      }
    `
    const posts = await client.fetch(query)
    return posts.length > 0 ? posts : samplePosts
  } catch (error) {
    console.log('Failed to fetch posts from Sanity, using sample data:', error)
    return samplePosts
  }
}

// 特定のブログ記事を取得
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const query = `
      *[_type == "blogPost" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author->{name, image},
        categories[]->{_id, title, color},
        tags[]->{_id, title},
        mainImage {
          asset->{_id, url},
          alt
        },
        body
      }
    `
    const post = await client.fetch(query, { slug })
    return post || samplePosts.find(p => p.slug.current === slug) || null
  } catch (error) {
    console.log('Failed to fetch post from Sanity, using sample data:', error)
    const samplePost = samplePosts.find(p => p.slug.current === slug)
    return samplePost || null
  }
}

// カテゴリ別記事を取得
export async function getPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  return samplePosts.filter(p => p.categories.some(c => c._id === categoryId));
}

// タグ別記事を取得
export async function getPostsByTag(tagId: string): Promise<BlogPost[]> {
  return samplePosts.filter(p => p.tags.some(t => t._id === tagId));
}

// サイドバー用のアーカイブデータを取得
export async function getArchiveData() {
  console.log('Using sample archive data as fallback')
  return sampleArchiveData
}