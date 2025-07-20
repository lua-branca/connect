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
        publishedAt,
        excerpt,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        },
        categories[]->{
          _id,
          title,
          slug
        },
        tags[]->{
          _id,
          name,
          slug
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
    
    const posts = await client.fetch(query)
    
    // Sanityからデータが取得できない場合、またはデータが空の場合はサンプルデータを使用
    if (!posts || posts.length === 0) {
      console.log('Using sample posts data as fallback')
      return samplePosts
    }
    
    return posts
  } catch (error) {
    console.log('Failed to fetch from Sanity, using sample data:', error)
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
        publishedAt,
        excerpt,
        body,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        },
        categories[]->{
          _id,
          title,
          slug
        },
        tags[]->{
          _id,
          name,
          slug
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
    
    const post = await client.fetch(query, { slug })
    
    // Sanityからデータが取得できない場合はサンプルデータから検索
    if (!post) {
      const samplePost = samplePosts.find(p => p.slug.current === slug)
      return samplePost || null
    }
    
    return post
  } catch (error) {
    console.log('Failed to fetch post from Sanity, using sample data:', error)
    const samplePost = samplePosts.find(p => p.slug.current === slug)
    return samplePost || null
  }
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
  try {
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
    
    const archiveData = await client.fetch(query)
    
    // Sanityからデータが取得できない場合はサンプルデータを使用
    if (!archiveData || (!archiveData.yearArchives?.length && !archiveData.categories?.length && !archiveData.tags?.length)) {
      console.log('Using sample archive data as fallback')
      return sampleArchiveData
    }
    
    return archiveData
  } catch (error) {
    console.log('Failed to fetch archive data from Sanity, using sample data:', error)
    return sampleArchiveData
  }
}