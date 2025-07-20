import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: '1nyzygfo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

// 記事内容からキーワードを自動生成
function generateKeywords(title, excerpt, body) {
  const text = `${title} ${excerpt} ${body}`.toLowerCase()
  
  // AI関連キーワード
  const aiKeywords = ['ai', 'claude', 'プログラミング', '自動化', 'chatgpt', '生成ai', '機械学習']
  // ビジネス関連キーワード
  const businessKeywords = ['コンサル', 'ビジネス', '効率化', '生産性', 'dxe', 'デジタル']
  // 技術関連キーワード
  const techKeywords = ['next.js', 'typescript', 'react', 'javascript', 'web', 'サイト', 'cms']
  
  const allKeywords = [...aiKeywords, ...businessKeywords, ...techKeywords]
  const foundKeywords = allKeywords.filter(keyword => text.includes(keyword))
  
  // 最大5個のキーワードを返す
  return foundKeywords.slice(0, 5)
}

// サムネイル画像を生成してアップロード
async function generateAndUploadThumbnail(title, excerpt) {
  try {
    const thumbnailUrl = `http://localhost:3000/api/article-thumbnail?${new URLSearchParams({
      title: title.substring(0, 60),
      category: 'BLOG',
      excerpt: excerpt.substring(0, 120)
    })}`

    console.log('サムネイル生成中...')
    
    const response = await fetch(thumbnailUrl)
    if (!response.ok) {
      throw new Error('サムネイル生成に失敗')
    }

    const imageBuffer = await response.buffer()
    
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

// カテゴリやタグを作成
async function createOrGetCategory(categoryName) {
  try {
    const slug = categoryName.toLowerCase().replace(/[^a-z0-9]/g, '-')
    
    // 既存カテゴリを検索
    const existingCategory = await client.fetch(
      `*[_type == "category" && title == $title][0]`,
      { title: categoryName }
    )
    
    if (existingCategory) {
      return {
        _type: 'reference',
        _ref: existingCategory._id
      }
    }
    
    // 新しいカテゴリを作成
    const newCategory = await client.create({
      _type: 'category',
      title: categoryName,
      slug: {
        _type: 'slug',
        current: slug
      }
    })
    
    return {
      _type: 'reference',
      _ref: newCategory._id
    }
  } catch (error) {
    console.error('カテゴリ作成エラー:', error)
    return null
  }
}

async function createOrGetTag(tagName) {
  try {
    const slug = tagName.toLowerCase().replace(/[^a-z0-9]/g, '-')
    
    const existingTag = await client.fetch(
      `*[_type == "tag" && title == $title][0]`,
      { title: tagName }
    )
    
    if (existingTag) {
      return {
        _type: 'reference',
        _ref: existingTag._id
      }
    }
    
    const newTag = await client.create({
      _type: 'tag',
      title: tagName,
      slug: {
        _type: 'slug',
        current: slug
      }
    })
    
    return {
      _type: 'reference',
      _ref: newTag._id
    }
  } catch (error) {
    console.error('タグ作成エラー:', error)
    return null
  }
}

// メイン記事作成関数
async function createEnhancedArticle(articleConfig) {
  try {
    console.log('記事作成を開始します...')
    
    const { title, slug, excerpt, body } = articleConfig
    
    // 1. キーワード自動生成
    const keywords = generateKeywords(title, excerpt, body.map(b => b.children?.[0]?.text || '').join(' '))
    console.log('生成されたキーワード:', keywords)
    
    // 2. サムネイル生成
    const thumbnail = await generateAndUploadThumbnail(title, excerpt)
    
    // 3. カテゴリとタグを作成
    const category = await createOrGetCategory('AI活用体験記')
    const tags = []
    
    for (const keyword of keywords) {
      const tag = await createOrGetTag(keyword)
      if (tag) tags.push(tag)
    }
    
    // 4. 記事データ作成
    const articleData = {
      _type: 'blogPost',
      title,
      slug: {
        _type: 'slug',
        current: slug
      },
      excerpt,
      // 福田美佐子を著者として自動設定
      author: {
        _type: 'reference',
        _ref: '38edee4d-ffe3-45a5-9b02-ab8a4755c862'
      },
      // サムネイル画像
      mainImage: thumbnail,
      // カテゴリとタグ
      categories: category ? [category] : [],
      tags: tags,
      // 本文
      body,
      // 下書きとして保存（publishedAtなし）
    }
    
    // 5. 記事作成
    const result = await client.create(articleData)
    console.log('記事作成完了:', result._id)
    console.log('Sanity Studioで確認してください: http://localhost:3333')
    
    return result
  } catch (error) {
    console.error('記事作成エラー:', error)
    throw error
  }
}

// 使用例
const sampleArticle = {
  title: 'AIとプログラミング：実際にこのサイトを作ってみた体験記',
  slug: 'ai-programming-experience-enhanced',
  excerpt: '「AIでプログラミングって実際どうなの？」という疑問にお答えするため、この「LUA BLANCA CONNECT」サイトをAIと一緒に作った体験を、技術に詳しくない方にも分かりやすくお伝えします。',
  body: [
    {
      _type: 'block',
      _key: 'intro',
      style: 'h2',
      children: [{
        _type: 'span',
        text: 'この記事について'
      }]
    },
    {
      _type: 'block',
      _key: 'intro-text',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'AIでプログラミングって実際どうなの？という疑問にお答えするため、このLUA BRANCA CONNECTサイトをAIと一緒に作った体験を詳しくお伝えします。Claude Codeを使って実際にサイトを構築し、従来の開発手法と比較して約5倍の効率化を実現しました。'
      }]
    }
  ]
}

// 実行
createEnhancedArticle(sampleArticle)