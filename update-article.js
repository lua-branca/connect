import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'q4miavp3',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

// まず必要なタグとカテゴリを作成
const createTagsAndCategories = async () => {
  try {
    // カテゴリ作成
    const category = await client.create({
      _type: 'category',
      title: 'AI活用事例',
      description: 'AI技術の実際の導入事例や活用方法について',
      slug: {
        _type: 'slug',
        current: 'ai-case-study'
      }
    })
    console.log('カテゴリ作成:', category._id)

    // タグ作成
    const tags = [
      { name: 'Claude Code', slug: 'claude-code' },
      { name: 'Next.js', slug: 'nextjs' },
      { name: 'AI開発', slug: 'ai-development' },
      { name: '実践記録', slug: 'practice-record' }
    ]

    const createdTags = []
    for (const tagData of tags) {
      const tag = await client.create({
        _type: 'tag',
        name: tagData.name,
        slug: {
          _type: 'slug',
          current: tagData.slug
        }
      })
      createdTags.push(tag)
      console.log('タグ作成:', tag.name, tag._id)
    }

    return { category, tags: createdTags }
  } catch (error) {
    console.error('タグ・カテゴリ作成エラー:', error)
    throw error
  }
}

// 記事の完全な本文データ
const fullBodyContent = [
  {
    _type: 'block',
    _key: 'intro',
    style: 'h2',
    children: [{
      _type: 'span',
      text: 'はじめに'
    }]
  },
  {
    _type: 'block', 
    _key: 'intro-text',
    style: 'normal',
    children: [{
      _type: 'span',
      text: 'LUA BLANCA CONNECTのサイト構築において、Anthropic社のClaude Codeを活用した開発を実践しています。本記事では、実際の開発プロセスで得られた知見、つまずいたポイント、そして従来の開発手法との比較を詳細に記録します。'
    }]
  },
  {
    _type: 'block',
    _key: 'project-overview',
    style: 'h2', 
    children: [{
      _type: 'span',
      text: 'プロジェクト概要'
    }]
  },
  {
    _type: 'block',
    _key: 'dev-target',
    style: 'h3',
    children: [{
      _type: 'span',
      text: '開発対象'
    }]
  },
  {
    _type: 'block',
    _key: 'dev-target-list',
    style: 'normal',
    children: [{
      _type: 'span',
      text: '• サイト名: LUA BLANCA CONNECT\n• 技術スタック: Next.js 15, TypeScript, Tailwind CSS, Sanity CMS\n• 開発期間: 2025年1月17日〜継続中\n• 開発スコープ: コーポレートサイト（問い合わせフォーム、ブログ機能含む）'
    }]
  },
  {
    _type: 'block',
    _key: 'dev-structure',
    style: 'h3',
    children: [{
      _type: 'span',
      text: '開発体制'
    }]
  },
  {
    _type: 'block',
    _key: 'dev-structure-list',
    style: 'normal',
    children: [{
      _type: 'span',
      text: '• 開発者: 1名（筆者）\n• AIパートナー: Claude Code\n• CMSセットアップ: 外部委託済み'
    }]
  },
  {
    _type: 'block',
    _key: 'dev-process',
    style: 'h2',
    children: [{
      _type: 'span',
      text: '実際の開発プロセス記録'
    }]
  },
  {
    _type: 'block',
    _key: 'formspree-section',
    style: 'h3',
    children: [{
      _type: 'span',
      text: '1. Formspree問い合わせフォーム実装（約2時間）'
    }]
  },
  {
    _type: 'block',
    _key: 'formspree-challenge',
    style: 'normal',
    children: [{
      _type: 'span',
      text: '課題: 既存フォームをFormspreeに連携し、自動返信機能を追加'
    }]
  },
  {
    _type: 'block',
    _key: 'ai-benefits',
    style: 'normal',
    children: [{
      _type: 'span',
      text: 'AI活用のメリット:\n• フォーム送信ロジックの実装が迅速\n• エラーハンドリングの網羅的実装\n• レスポンシブデザインの自動最適化'
    }]
  },
  {
    _type: 'block',
    _key: 'challenges',
    style: 'normal',
    children: [{
      _type: 'span',
      text: 'つまずいたポイント:\n• Formspreeの自動返信機能設定\n• コード側での_autoresponse実装を試行\n• 最終的に管理画面での設定が必要と判明'
    }]
  },
  {
    _type: 'block',
    _key: 'time-comparison',
    style: 'normal',
    children: [{
      _type: 'span',
      text: '従来開発との比較:\n• 従来: 約4-6時間（調査、実装、テスト含む）\n• AI活用: 約2時間（50-70%短縮）'
    }]
  },
  {
    _type: 'block',
    _key: 'quantitative-results',
    style: 'h2',
    children: [{
      _type: 'span',
      text: '定量的な効果測定'
    }]
  },
  {
    _type: 'block',
    _key: 'time-table-intro',
    style: 'h3',
    children: [{
      _type: 'span',
      text: '開発時間比較'
    }]
  },
  {
    _type: 'block',
    _key: 'time-comparison-data',
    style: 'normal',
    children: [{
      _type: 'span',
      text: 'フォーム実装: 従来4-6時間 → AI活用2時間（60-70%短縮）\n構造変更: 従来8-10時間 → AI活用3時間（62-70%短縮）\nレイアウト実装: 従来12-16時間 → AI活用4時間（67-75%短縮）\n合計: 従来25-33時間 → AI活用9.5時間（約70%短縮）'
    }]
  },
  {
    _type: 'block',
    _key: 'cost-analysis',
    style: 'h3',
    children: [{
      _type: 'span',
      text: 'コスト分析'
    }]
  },
  {
    _type: 'block',
    _key: 'cost-data',
    style: 'normal',
    children: [{
      _type: 'span',
      text: '従来開発想定コスト:\n• 開発時間: 30時間\n• 時給5,000円換算: 150,000円\n\nAI活用実コスト:\n• 開発時間: 9.5時間\n• Claude Pro: 月額3,000円\n• 総コスト: 約50,000円\n• コスト削減: 約67%'
    }]
  },
  {
    _type: 'block',
    _key: 'ai-pros-cons',
    style: 'h2',
    children: [{
      _type: 'span',
      text: 'AI開発のメリット・デメリット'
    }]
  },
  {
    _type: 'block',
    _key: 'merits',
    style: 'h3',
    children: [{
      _type: 'span',
      text: 'メリット'
    }]
  },
  {
    _type: 'block',
    _key: 'merits-list',
    style: 'normal',
    children: [{
      _type: 'span',
      text: '1. 開発速度の劇的向上\n• 実装アイデアの即座な具現化\n• ボイラープレートコードの自動生成\n\n2. 品質の向上\n• ベストプラクティスの自動適用\n• エラーハンドリングの網羅性\n\n3. 学習効果\n• 実装を見ながら技術習得\n• 新しいアプローチの発見'
    }]
  },
  {
    _type: 'block',
    _key: 'demerits',
    style: 'h3',
    children: [{
      _type: 'span',
      text: 'デメリット・制約'
    }]
  },
  {
    _type: 'block',
    _key: 'demerits-list',
    style: 'normal',
    children: [{
      _type: 'span',
      text: '1. 外部サービス連携の限界\n• Formspree設定など、API仕様の詳細把握が必要\n• サードパーティ管理画面は別途対応が必要\n\n2. デバッグ時の複雑さ\n• AI提案コードの動作原理理解が必要\n• トラブルシューティングスキルは依然重要\n\n3. 創造的判断の必要性\n• UIデザインの最終判断は人間が必要\n• ビジネス要件の解釈は人間の領域'
    }]
  },
  {
    _type: 'block',
    _key: 'conclusion',
    style: 'h2',
    children: [{
      _type: 'span',
      text: 'まとめ'
    }]
  },
  {
    _type: 'block',
    _key: 'conclusion-text',
    style: 'normal',
    children: [{
      _type: 'span',
      text: 'Claude Codeを活用した開発により、約70%の工数削減を実現しています。特に実装作業の自動化、設計品質の向上、技術負債の削減で効果が顕著でした。\n\n一方で、ビジネス判断やデザイン決定、外部サービス設定等は人間のexpertiseが不可欠であることも明確になりました。\n\n結論: AIは強力な開発パートナーですが、最終的な判断と責任は人間が担う「協働モデル」が最も効果的です。'
    }]
  }
]

// 記事を更新
const updateArticle = async () => {
  try {
    console.log('タグとカテゴリを作成中...')
    const { category, tags } = await createTagsAndCategories()

    console.log('記事を更新中...')
    const result = await client
      .patch('bpRVvct31wwWFfSFwLUed0')
      .set({
        body: fullBodyContent,
        categories: [{
          _type: 'reference',
          _ref: category._id
        }],
        tags: tags.map(tag => ({
          _type: 'reference',
          _ref: tag._id
        }))
      })
      .commit()

    console.log('記事更新完了:', result._id)
    console.log('追加されたタグ:', tags.map(t => t.name))
    console.log('追加されたカテゴリ:', category.title)
  } catch (error) {
    console.error('記事更新エラー:', error)
  }
}

updateArticle()