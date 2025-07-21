import { BlogPost } from '@/types'

// サンプル記事データ（Sanityが設定されるまでの一時的なデータ）
export const samplePosts: BlogPost[] = [
  {
    _id: 'ai-programming-experience',
    title: 'AIとプログラミング：実際にこのサイトを作ってみた体験記',
    slug: {
      current: 'ai-programming-experience'
    },
    publishedAt: '2025-07-20T00:00:00Z',
    excerpt: '「AIでプログラミングって実際どうなの？」という疑問にお答えするため、この「LUA BLANCA CONNECT」サイトをAIと一緒に作った体験を、技術に詳しくない方にも分かりやすくお伝えします。',
    mainImage: {
      asset: {
        _id: 'default-image',
        url: '/default-og-image.png'
      },
      alt: 'AIとプログラミング体験記のサムネイル画像'
    },
    categories: [
      {
        _id: 'ai-experience',
        title: 'AI活用体験記',
        slug: {
          current: 'ai-experience'
        }
      }
    ],
    tags: [
      {
        _id: 'ai-programming',
        name: 'AI活用',
        slug: {
          current: 'ai-programming'
        }
      },
      {
        _id: 'live-coding',
        name: 'ライブコーディング',
        slug: {
          current: 'live-coding'
        }
      },
      {
        _id: 'experience',
        name: '体験談',
        slug: {
          current: 'experience'
        }
      }
    ],
    author: {
      _id: 'fukuda-misako',
      name: '福田美佐子',
      image: {
        asset: {
          _id: 'author-image',
          url: '/profile-avatar.png'
        }
      }
    },
    body: [] // 本文はMarkdownファイルから読み込む
  }
]

export const sampleCategories = [
  {
    _id: 'ai-experience',
    title: 'AI活用体験記',
    slug: {
      current: 'ai-experience'
    },
    postCount: 1
  }
]

export const sampleTags = [
  {
    _id: 'ai-programming',
    name: 'AI活用',
    slug: {
      current: 'ai-programming'
    },
    postCount: 1
  },
  {
    _id: 'live-coding',
    name: 'ライブコーディング',
    slug: {
      current: 'live-coding'
    },
    postCount: 1
  },
  {
    _id: 'experience',
    name: '体験談',
    slug: {
      current: 'experience'
    },
    postCount: 1
  }
]

export const sampleArchiveData = {
  yearArchives: [
    {
      year: 2025,
      month: 7,
      publishedAt: '2025-07-20T00:00:00Z'
    }
  ],
  categories: sampleCategories,
  tags: sampleTags
}