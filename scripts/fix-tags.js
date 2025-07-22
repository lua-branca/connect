import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

async function fixTags() {
  try {
    console.log('=== タグのname フィールドを修正中 ===\n')
    
    // タグを取得
    const tags = await client.fetch(`*[_type == "tag"]{
      _id,
      name,
      slug
    }`)
    
    console.log(`修正対象のタグ数: ${tags.length}`)
    
    for (const tag of tags) {
      if (!tag.name && tag.slug?.current) {
        let newName
        if (tag.slug.current === 'Corporate-web-dev') {
          newName = '企業サイト開発'
        } else if (tag.slug.current === 'claude-code') {
          newName = 'Claude Code'
        } else {
          newName = tag.slug.current
        }
        
        console.log(`タグID ${tag._id} のnameを "${newName}" に更新中...`)
        
        await client
          .patch(tag._id)
          .set({ name: newName })
          .commit()
          
        console.log(`✓ 更新完了: ${newName}`)
      }
    }
    
    console.log('\n=== 修正完了 ===')
    
    // 修正後の状態を確認
    const updatedTags = await client.fetch(`*[_type == "tag"]{
      _id,
      name,
      slug
    }`)
    
    console.log('\n修正後のタグ一覧:')
    updatedTags.forEach((tag, index) => {
      console.log(`${index + 1}. ${tag.name} (slug: ${tag.slug?.current || 'なし'})`)
    })
    
  } catch (error) {
    console.error('Error:', error)
  }
}

fixTags()