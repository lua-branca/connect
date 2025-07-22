import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

async function checkSlugs() {
  try {
    const posts = await client.fetch(`*[_type == "blogPost"]{
      _id,
      title,
      slug,
      publishedAt
    }`)
    
    console.log('=== 記事のスラッグ一覧 ===\n')
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`)
      console.log(`   slug: ${post.slug?.current || 'なし'}`)
      console.log(`   URL: /updates/${post.slug?.current}`)
      console.log(`   公開日: ${post.publishedAt}`)
      console.log('')
    })
    
  } catch (error) {
    console.error('Error:', error)
  }
}

checkSlugs()