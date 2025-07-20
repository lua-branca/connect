import { createClient } from '@sanity/client'
import fetch from 'node-fetch'

const client = createClient({
  projectId: '1nyzygfo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

export async function generateAndUploadThumbnail(title, category = 'BLOG', excerpt = '') {
  try {
    // サムネイル画像を生成
    const thumbnailUrl = `http://localhost:3000/api/article-thumbnail?${new URLSearchParams({
      title: title.substring(0, 60), // タイトルを短縮
      category,
      excerpt: excerpt.substring(0, 120) // 概要を短縮
    })}`

    console.log('サムネイル生成中...', thumbnailUrl)
    
    // 画像を取得
    const response = await fetch(thumbnailUrl)
    if (!response.ok) {
      throw new Error('サムネイル生成に失敗しました')
    }

    const imageBuffer = await response.buffer()
    
    // Sanityに画像をアップロード
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: `thumbnail-${Date.now()}.png`,
      contentType: 'image/png'
    })

    console.log('サムネイルアップロード完了:', asset._id)
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      },
      alt: `${title}のサムネイル画像`
    }
  } catch (error) {
    console.error('サムネイル生成エラー:', error)
    return null
  }
}

// 使用例
// const thumbnail = await generateAndUploadThumbnail('記事タイトル', 'AI', '記事の概要...')