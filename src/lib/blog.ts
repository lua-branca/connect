import { client } from './sanity'
import { BlogPost } from '@/types'
// Sanityのみを使用（sample-postsは削除済み）

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
    return posts
  } catch (error) {
    console.log('Failed to fetch posts from Sanity:', error)
    return []
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
    return post || null
  } catch (error) {
    console.log('Failed to fetch post from Sanity:', error)
    return null
  }
}

// カテゴリ別記事を取得
export async function getPostsByCategory(_categoryId: string): Promise<BlogPost[]> {
  return [];
}

// タグ別記事を取得
export async function getPostsByTag(_tagId: string): Promise<BlogPost[]> {
  return [];
}

// 前後の記事を取得
export async function getAdjacentPosts(currentSlug: string): Promise<{
  previousPost: BlogPost | null;
  nextPost: BlogPost | null;
}> {
  try {
    const allPosts = await getAllPosts()
    const currentIndex = allPosts.findIndex(post => post.slug.current === currentSlug)
    
    if (currentIndex === -1) {
      return { previousPost: null, nextPost: null }
    }
    
    return {
      previousPost: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
      nextPost: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
    }
  } catch (error) {
    console.log('Failed to fetch adjacent posts:', error)
    return { previousPost: null, nextPost: null }
  }
}

// 関連記事を取得（同じカテゴリまたはタグ）
export async function getRelatedPosts(currentPost: BlogPost, limit: number = 3): Promise<BlogPost[]> {
  try {
    const allPosts = await getAllPosts()
    
    // 現在の記事を除外
    const otherPosts = allPosts.filter(post => post._id !== currentPost._id)
    
    if (otherPosts.length === 0) {
      return []
    }
    
    // カテゴリまたはタグが一致する記事を優先
    const relatedPosts = otherPosts.filter(post => {
      const hasCommonCategory = currentPost.categories?.some(currentCat =>
        post.categories?.some(postCat => postCat._id === currentCat._id)
      )
      const hasCommonTag = currentPost.tags?.some(currentTag =>
        post.tags?.some(postTag => postTag._id === currentTag._id)
      )
      return hasCommonCategory || hasCommonTag
    })
    
    // 関連記事が足りない場合は、他の記事で補完
    const finalPosts = relatedPosts.length >= limit 
      ? relatedPosts.slice(0, limit)
      : [...relatedPosts, ...otherPosts.slice(0, limit - relatedPosts.length)]
    
    return finalPosts.slice(0, limit)
  } catch (error) {
    console.log('Failed to fetch related posts:', error)
    return []
  }
}

// サイドバー用のアーカイブデータを取得
export async function getArchiveData() {
  try {
    const posts = await getAllPosts()
    
    // 年別アーカイブデータを生成
    const yearArchives = posts.map(post => ({
      year: new Date(post.publishedAt).getFullYear(),
      month: new Date(post.publishedAt).getMonth() + 1,
      publishedAt: post.publishedAt
    }))
    
    return {
      yearArchives,
      categories: [], // Sanityから取得する場合は別途実装
      tags: []        // Sanityから取得する場合は別途実装
    }
  } catch (error) {
    console.log('Failed to fetch archive data:', error)
    return {
      yearArchives: [],
      categories: [],
      tags: []
    }
  }
}