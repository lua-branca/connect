const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'q4miavp3',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: 'your-api-token', // APIトークンが必要な場合のみ
  useCdn: false
})

async function importNoteArticle() {
  try {
    // 記事データ
    const articleData = {
      _type: 'blogPost',
      title: '穴八幡宮の一陽来復御守',
      slug: {
        _type: 'slug',
        current: 'anahachiman-ichiyou-raifuku-omamori'
      },
      publishedAt: '2025-01-04T00:00:00.000Z',
      excerpt: '穴八幡宮の特別な御守「一陽来復」について。冬至から節分まで限定で授与される、金運アップのお守りです。',
      body: [
        {
          _type: 'block',
          _key: 'block1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span1',
              text: '新宿にある穴八幡宮の「一陽来復御守」について書きたいと思います。'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'block2',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span2',
              text: '「一陽来復」とは、悪いことが続いた後に良いことが巡ってくるという意味の言葉です。冬至の時期から節分まで（2月上旬）の期間限定で授与される特別な御守りです。'
            }
          ]
        },
        {
          _type: 'block',
          _key: 'block3',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span3',
              text: '最近、神社仏閣巡りが趣味になっており、2025年のブレイクスルーを願ってこの御守りを頂きました。金運アップの効果があるとされており、多くの参拝者が訪れる人気の御守りです。'
            }
          ]
        }
      ],
      categories: [
        {
          _type: 'reference',
          _ref: 'lifestyle'
        }
      ],
      tags: [
        {
          _type: 'reference', 
          _ref: 'shrine'
        },
        {
          _type: 'reference',
          _ref: 'good-luck'
        }
      ]
    }

    // 先にカテゴリとタグを作成
    await createCategoryAndTags()
    
    // 記事を作成
    const result = await client.create(articleData)
    console.log('記事が正常に投稿されました:', result._id)
    
  } catch (error) {
    console.error('記事の投稿に失敗しました:', error)
  }
}

async function createCategoryAndTags() {
  try {
    // ライフスタイルカテゴリを作成
    await client.createIfNotExists({
      _id: 'lifestyle',
      _type: 'category',
      title: 'ライフスタイル',
      description: '日常生活や趣味に関する記事'
    })

    // タグを作成
    await client.createIfNotExists({
      _id: 'shrine',
      _type: 'tag',
      name: '神社'
    })

    await client.createIfNotExists({
      _id: 'good-luck',
      _type: 'tag', 
      name: '開運'
    })

    console.log('カテゴリとタグを作成しました')
  } catch (error) {
    console.error('カテゴリ・タグの作成に失敗しました:', error)
  }
}

importNoteArticle()