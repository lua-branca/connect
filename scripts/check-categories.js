import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

async function checkCategoriesAndTags() {
  try {
    console.log('=== Sanityデータベースの現在の状態 ===\n')
    
    // カテゴリを取得
    const categories = await client.fetch(`*[_type == "category"]{
      _id,
      title,
      slug,
      _createdAt,
      _updatedAt
    }`)
    
    console.log(`📁 カテゴリ数: ${categories.length}`)
    categories.forEach((cat, index) => {
      console.log(`${index + 1}. ${cat.title} (slug: ${cat.slug?.current || 'なし'}) - ID: ${cat._id}`)
      console.log(`   作成日: ${cat._createdAt}, 更新日: ${cat._updatedAt}`)
    })
    
    console.log('\n')
    
    // タグを取得
    const tags = await client.fetch(`*[_type == "tag"]{
      _id,
      name,
      slug,
      _createdAt,
      _updatedAt
    }`)
    
    console.log(`🏷️  タグ数: ${tags.length}`)
    tags.forEach((tag, index) => {
      console.log(`${index + 1}. ${tag.name} (slug: ${tag.slug?.current || 'なし'}) - ID: ${tag._id}`)
      console.log(`   作成日: ${tag._createdAt}, 更新日: ${tag._updatedAt}`)
    })
    
    console.log('\n')
    
    // 記事を取得
    const posts = await client.fetch(`*[_type == "blogPost"]{
      _id,
      title,
      categories[]->{_id, title},
      tags[]->{_id, name},
      _createdAt,
      _updatedAt
    }`)
    
    console.log(`📝 記事数: ${posts.length}`)
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`)
      console.log(`   カテゴリ: ${post.categories?.map(c => c.title).join(', ') || 'なし'}`)
      console.log(`   タグ: ${post.tags?.map(t => t.name).join(', ') || 'なし'}`)
      console.log(`   作成日: ${post._createdAt}, 更新日: ${post._updatedAt}`)
      console.log('')
    })
    
    // 下書き状態の記事もチェック
    const drafts = await client.fetch(`*[_type == "blogPost" && !defined(publishedAt)]{
      _id,
      title,
      categories[]->{_id, title},
      tags[]->{_id, name}
    }`)
    
    if (drafts.length > 0) {
      console.log(`📄 下書き記事数: ${drafts.length}`)
      drafts.forEach((draft, index) => {
        console.log(`${index + 1}. ${draft.title} (下書き)`)
        console.log(`   カテゴリ: ${draft.categories?.map(c => c.title).join(', ') || 'なし'}`)
        console.log(`   タグ: ${draft.tags?.map(t => t.name).join(', ') || 'なし'}`)
      })
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

checkCategoriesAndTags()