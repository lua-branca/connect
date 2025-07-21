import { getPostsByCategory } from '@/lib/blog'
import { BlogPost } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Calendar, User, Tag, ArrowLeft, Folder } from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// カテゴリ名のマップ（実際のプロジェクトではSanityから取得）
const categoryNames: { [key: string]: string } = {
  'lifestyle': 'ライフスタイル',
  'technology': 'テクノロジー',
  'business': 'ビジネス',
  'ai': 'AI技術',
  'web-development': 'Web開発',
  'marketing': 'マーケティング'
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const posts: BlogPost[] = await getPostsByCategory(slug)
  const categoryName = categoryNames[slug] || slug

  if (!posts || posts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* 戻るリンク */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          ブログ一覧に戻る
        </Link>

        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Folder className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              {categoryName}
            </h1>
          </div>
          <p className="text-lg text-gray-600">
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
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {format(new Date(post.publishedAt), 'yyyy年MM月dd日', { locale: ja })}
                    </div>
                    
                    {post.author && (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author.name}
                      </div>
                    )}
                  </div>

                  {/* タイトル */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* 抜粋 */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* タグ */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {post.tags?.map((tag) => (
                      <Link
                        key={tag._id}
                        href={`/blog/tag/${tag.slug?.current || tag._id}`}
                        className="inline-flex items-center px-2 py-1 text-xs text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag.name}
                      </Link>
                    ))}
                  </div>

                  {/* 続きを読む */}
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    続きを読む →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 他のカテゴリへのリンク */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">他のカテゴリも見る</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categoryNames).map(([categorySlug, name]) => (
              categorySlug !== slug && (
                <Link
                  key={categorySlug}
                  href={`/blog/category/${categorySlug}`}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Folder className="w-4 h-4 mr-2" />
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