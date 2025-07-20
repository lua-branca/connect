import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// .env.localファイルを読み込み
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: '1nyzygfo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

console.log('Sanityクライアント設定完了')
console.log('Project ID:', '1nyzygfo')
console.log('Token設定:', process.env.SANITY_API_TOKEN ? '✓' : '✗')

const articleData = {
  _type: 'blogPost',
  title: 'AIとプログラミング：実際にこのサイトを作ってみた体験記',
  slug: {
    _type: 'slug',
    current: 'ai-programming-experience'
  },
  // 下書きとして保存（publishedAtをコメントアウト）
  // publishedAt: new Date().toISOString(),
  // author: {
  //   _type: 'reference',
  //   _ref: 'author-lua-branca' // 作者のIDが不明なため一旦コメントアウト
  // },
  // mainImage: {
  //   _type: 'image',
  //   asset: {
  //     _type: 'reference',
  //     _ref: 'image-placeholder' // 画像アセットのIDが不明なため一旦コメントアウト
  //   },
  //   alt: 'Claude Code開発画面のスクリーンショット'
  // },
  // categories: [{
  //   _type: 'reference', 
  //   _ref: 'category-ai-case-study' // カテゴリIDが不明なため一旦コメントアウト
  // }],
  // tags: [
  //   {
  //     _type: 'reference',
  //     _ref: 'tag-claude-code'
  //   },
  //   {
  //     _type: 'reference', 
  //     _ref: 'tag-nextjs'
  //   },
  //   {
  //     _type: 'reference',
  //     _ref: 'tag-ai-development'
  //   }
  // ],
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
        text: '「AIでプログラミングって実際どうなの？」という疑問にお答えするため、この「LUA BLANCA CONNECT」サイトをAIと一緒に作った体験を、技術に詳しくない方にも分かりやすくお伝えします。'
      }]
    },
    {
      _type: 'block',
      _key: 'what-we-made',
      style: 'h2',
      children: [{
        _type: 'span',
        text: '今回作ったもの'
      }]
    },
    {
      _type: 'block',
      _key: 'project-details',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• サイト名: LUA BLANCA CONNECT（まさに今ご覧いただいているこのサイトです！）\n• 使った技術: Next.js（ウェブサイト作成の仕組み）、TypeScript（プログラミング言語）\n• かかった時間: 約3日間\n• サイトの内容: 会社紹介、サービス紹介、お問い合わせフォーム、更新情報'
      }]
    },
    {
      _type: 'block',
      _key: 'how-we-made',
      style: 'h3',
      children: [{
        _type: 'span',
        text: 'どんな風に作ったか'
      }]
    },
    {
      _type: 'block',
      _key: 'workflow',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• 私: 「こんなサイトにしたい」というアイデアを伝える\n• AI（Claude Code）: 実際のプログラムを書いてくれる\n• 結果: 想像以上にスムーズに完成！'
      }]
    }
  ]
}

async function createArticle() {
  try {
    const result = await client.create(articleData)
    console.log('記事が作成されました:', result._id)
  } catch (error) {
    console.error('記事作成エラー:', error)
  }
}

createArticle()