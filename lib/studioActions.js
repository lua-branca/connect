// Sanity Studio カスタムアクション

export const generateKeywordsAction = {
  name: 'generateKeywords',
  title: 'キーワード自動生成',
  icon: () => '🏷️',
  onHandle: ({ draft, published }) => {
    const doc = draft || published
    if (!doc) return

    const { title = '', excerpt = '', body = [] } = doc
    
    // 本文からテキストを抽出
    const bodyText = body
      .filter(block => block._type === 'block')
      .map(block => 
        block.children
          ?.filter(child => child._type === 'span')
          ?.map(child => child.text)
          ?.join(' ') || ''
      )
      .join(' ')

    const allText = `${title} ${excerpt} ${bodyText}`.toLowerCase()

    // キーワード候補
    const keywords = {
      'AI': ['ai', 'claude', '人工知能', '機械学習', '生成ai'],
      'プログラミング': ['プログラミング', 'コーディング', '開発', 'エンジニア'],
      'ビジネス': ['ビジネス', 'コンサル', '効率化', '生産性', 'dx'],
      '技術': ['next.js', 'typescript', 'react', 'javascript', 'web'],
      '体験記': ['体験', '実践', 'レビュー', '感想', 'ケーススタディ']
    }

    const foundKeywords = []
    Object.entries(keywords).forEach(([category, terms]) => {
      if (terms.some(term => allText.includes(term))) {
        foundKeywords.push(category)
      }
    })

    return {
      type: 'success',
      message: `生成されたキーワード: ${foundKeywords.join(', ')}`,
      patches: [
        {
          type: 'set',
          path: ['seo', 'keywords'],
          value: foundKeywords
        }
      ]
    }
  }
}

export const generateThumbnailAction = {
  name: 'generateThumbnail',
  title: 'サムネイル自動生成',
  icon: () => '🖼️',
  onHandle: async ({ draft, published }) => {
    const doc = draft || published
    if (!doc) return

    const { title = '', excerpt = '' } = doc

    try {
      // サムネイル生成API呼び出し
      const thumbnailUrl = `http://localhost:3000/api/article-thumbnail?${new URLSearchParams({
        title: title.substring(0, 60),
        category: 'BLOG',
        excerpt: excerpt.substring(0, 120)
      })}`

      const response = await fetch(thumbnailUrl)
      if (!response.ok) throw new Error('サムネイル生成失敗')

      return {
        type: 'success',
        message: 'サムネイルが生成されました。手動でアップロードしてください。',
        patches: []
      }
    } catch (error) {
      return {
        type: 'error',
        message: `サムネイル生成エラー: ${error.message}`
      }
    }
  }
}