import { getPostsByTag } from '@/lib/blog'
import { BlogPost } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

// タグ名のマップ（実際のプロジェクトではSanityから取得）
const tagNames: { [key: string]: string } = {
  'claude-code': 'Claude Code',
  'nextjs': 'Next.js',
  'ai-development': 'AI開発',
  'practice-record': '実践記録',
  'ai': 'AI',
  'web-development': 'Web開発',
  'react': 'React',
  'typescript': 'TypeScript',
  'business': 'ビジネス',
  'consulting': 'コンサルティング',
  'marketing': 'マーケティング'
}

export default async function TagPage({ params }: PageProps) {
  const posts: BlogPost[] = await getPostsByTag(params.slug)
  const tagName = tagNames[params.slug] || params.slug

  if (!posts || posts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* 戻るリンク */}
        <Link
          href="/updates"
          className="inline-flex items-center font-medium hover:opacity-80 transition-colors mb-8"
          style={{color: '#5BBCB6'}}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          更新情報一覧に戻る
        </Link>

        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full" style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}>
              <Tag className="w-5 h-5 mr-2" style={{color: '#5BBCB6'}} />
              <span className="text-lg font-semibold">{tagName}</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{color: '#2D5A5A'}}>
            「{tagName}」に関する記事
          </h1>
          <p className="text-lg" style={{color: '#2D5A5A', opacity: 0.8}}>
            {posts.length}件の記事があります
          </p>
        </div>

        {/* 記事一覧 */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                {/* メイン画像 */}
                {post.mainImage?.asset?.url && (
                  <div className="md:w-1/3">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                )}
                
                {/* コンテンツ */}
                <div className={`p-6 ${post.mainImage ? 'md:w-2/3' : 'w-full'}`}>
                  {/* メタ情報 */}
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" style={{color: '#5BBCB6'}} />
                      {format(new Date(post.publishedAt), 'yyyy年MM月dd日', { locale: ja })}
                    </div>
                    
                    {post.author && (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" style={{color: '#5BBCB6'}} />
                        {post.author.name}
                      </div>
                    )}
                  </div>

                  {/* カテゴリ */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {post.categories?.map((category) => (
                      <Link
                        key={category._id}
                        href={`/updates/category/${category.slug?.current || category._id}`}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full hover:opacity-80 transition-colors"
                        style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>

                  {/* タイトル */}
                  <h2 className="text-xl font-semibold mb-3" style={{color: '#2D5A5A'}}>
                    <Link 
                      href={`/updates/${post.slug.current}`}
                      className="hover:opacity-80 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* 抜粋 */}
                  <p className="mb-4 line-clamp-3" style={{color: '#2D5A5A', opacity: 0.8}}>
                    {post.excerpt}
                  </p>

                  {/* その他のタグ */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {post.tags?.filter(tag => tag._id !== params.slug).map((tag) => (
                      <Link
                        key={tag._id}
                        href={`/updates/tag/${tag.slug?.current || tag._id}`}
                        className="inline-flex items-center px-2 py-1 text-xs border rounded-full hover:opacity-80 transition-colors"
                        style={{color: '#2D5A5A', borderColor: '#A8D5D0', opacity: 0.8}}
                      >
                        <Tag className="w-3 h-3 mr-1" style={{color: '#5BBCB6'}} />
                        {tag.name}
                      </Link>
                    ))}
                  </div>

                  {/* 続きを読む */}
                  <Link
                    href={`/updates/${post.slug.current}`}
                    className="inline-flex items-center font-medium hover:opacity-80 transition-colors"
                    style={{color: '#5BBCB6'}}
                  >
                    続きを読む →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 関連タグ */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8" style={{color: '#2D5A5A'}}>関連タグ</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(tagNames).map(([slug, name]) => (
              slug !== params.slug && (
                <Link
                  key={slug}
                  href={`/updates/tag/${slug}`}
                  className="inline-flex items-center px-3 py-2 rounded-full hover:opacity-80 transition-colors"
                  style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
                >
                  <Tag className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                  {name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}