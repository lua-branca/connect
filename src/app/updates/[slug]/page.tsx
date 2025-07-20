import { getPostBySlug, getAdjacentPosts, getRelatedPosts } from '@/lib/blog'
import { BlogPost } from '@/types'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { PortableText, type PortableTextBlock } from '@portabletext/react'
import { Metadata } from 'next'
import AIExperienceArticle from '@/components/AIExperienceArticle'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// メタデータ生成関数
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post: BlogPost | null = await getPostBySlug(slug)

  if (!post) {
    return {
      title: '記事が見つかりません | LUA BLANCA CONNECT',
    }
  }

  const categoryName = post.categories?.[0]?.title || 'AI活用事例'
  const publishedDate = format(new Date(post.publishedAt), 'yyyy年MM月dd日', { locale: ja })
  
  // デフォルトOG画像を使用（カスタム画像がある場合は優先）
  const ogImageUrl = post.mainImage?.asset?.url || '/default-og-image.png'

  return {
    title: `${post.title} | LUA BLANCA CONNECT`,
    description: post.excerpt || 'AI活用で課題をスピーディに解決するLUA BLANCA CONNECTの記事です。',
    openGraph: {
      title: post.title,
      description: post.excerpt || 'AI活用で課題をスピーディに解決するLUA BLANCA CONNECTの記事です。',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || 'AI活用で課題をスピーディに解決するLUA BLANCA CONNECTの記事です。',
      images: [ogImageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post: BlogPost | null = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // 前後の記事と関連記事を取得
  const { previousPost, nextPost } = await getAdjacentPosts(slug)
  const relatedPosts = await getRelatedPosts(post, 3)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* 戻るリンク */}
        <Link
          href="/updates"
          className="inline-flex items-center font-medium hover:opacity-80 transition-colors mb-8"
          style={{color: '#5BBCB6'}}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          更新情報一覧に戻る
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* メインコンテンツ */}
          <div className="lg:col-span-3">

        {/* メイン画像 */}
        <div className="mb-8">
          {post.mainImage?.asset?.url ? (
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-xl"
            />
          ) : (
            // デフォルト画像を使用
            <img
              src="/default-og-image.png"
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-xl"
            />
          )}
        </div>

        {/* 記事ヘッダー */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
            {post.title}
          </h1>

          {/* メタ情報 */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
              {format(new Date(post.publishedAt), 'yyyy年MM月dd日', { locale: ja })}
            </div>
            
            {post.author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                {post.author.name}
              </div>
            )}
          </div>

          {/* カテゴリとタグ */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {post.categories?.map((category) => (
              <Link
                key={category._id}
                href={`/updates/category/${category.slug?.current || category._id}`}
                className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full hover:opacity-80 transition-colors"
                style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
              >
                {category.title}
              </Link>
            ))}
            
            {post.tags?.map((tag) => (
              <Link
                key={tag._id}
                href={`/updates/tag/${tag.slug?.current || tag._id}`}
                className="inline-flex items-center px-3 py-1 text-sm border rounded-full hover:opacity-80 transition-colors"
                style={{color: '#2D5A5A', borderColor: '#A8D5D0', opacity: 0.8}}
              >
                <Tag className="w-3 h-3 mr-1" style={{color: '#5BBCB6'}} />
                {tag.name}
              </Link>
            ))}
          </div>

          {/* 抜粋 */}
          {post.excerpt && (
            <div className="rounded-xl p-6 mb-8" style={{background: 'linear-gradient(135deg, #E0F2F1 0%, #F0FFFE 100%)', borderLeft: '4px solid #5BBCB6'}}>
              <p className="text-lg leading-relaxed italic" style={{color: '#2D5A5A'}}>{post.excerpt}</p>
            </div>
          )}
        </header>

        {/* 記事本文 */}
        <article className="prose prose-lg max-w-none">
          {slug === 'ai-programming-experience' ? (
            <AIExperienceArticle />
          ) : post.body && Array.isArray(post.body) && post.body.length > 0 ? (
            <PortableText
              value={post.body as PortableTextBlock[]}
              components={{
                block: {
                  normal: ({ children }) => <p className="mb-4 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.9}}>{children}</p>,
                  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4" style={{color: '#2D5A5A'}}>{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3" style={{color: '#2D5A5A'}}>{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold mt-4 mb-2" style={{color: '#2D5A5A'}}>{children}</h3>,
                  blockquote: ({ children }) => (
                    <blockquote className="pl-4 italic my-4 rounded-lg p-4" style={{borderLeft: '4px solid #5BBCB6', backgroundColor: '#E0F2F1', color: '#2D5A5A'}}>
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                },
                listItem: {
                  bullet: ({ children }) => <li style={{color: '#2D5A5A', opacity: 0.9}}>{children}</li>,
                  number: ({ children }) => <li style={{color: '#2D5A5A', opacity: 0.9}}>{children}</li>,
                },
                marks: {
                  strong: ({ children }) => <strong className="font-bold" style={{color: '#2D5A5A'}}>{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className="hover:opacity-80 underline transition-colors"
                      style={{color: '#5BBCB6'}}
                      target={value.blank ? '_blank' : undefined}
                      rel={value.blank ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          ) : (
            <p className="italic" style={{color: '#2D5A5A', opacity: 0.6}}>記事の本文がありません。</p>
          )}
        </article>

            {/* 前後記事ナビゲーション */}
            {(previousPost || nextPost) && (
              <div className="mt-12 pt-8" style={{borderTop: '1px solid #A8D5D0'}}>
                <div className="flex justify-between items-center">
                  {/* 前の記事 */}
                  <div className="text-left flex-1">
                    {previousPost ? (
                      <Link
                        href={`/updates/${previousPost.slug.current}`}
                        className="inline-flex items-center font-medium hover:opacity-80 transition-colors"
                        style={{color: '#5BBCB6'}}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        <div>
                          <div className="text-xs" style={{color: '#2D5A5A', opacity: 0.6}}>前の記事</div>
                          <div className="text-sm max-w-xs truncate">{previousPost.title}</div>
                        </div>
                      </Link>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  {/* 次の記事 */}
                  <div className="text-right flex-1">
                    {nextPost ? (
                      <Link
                        href={`/updates/${nextPost.slug.current}`}
                        className="inline-flex items-center font-medium hover:opacity-80 transition-colors justify-end"
                        style={{color: '#5BBCB6'}}
                      >
                        <div className="text-right">
                          <div className="text-xs" style={{color: '#2D5A5A', opacity: 0.6}}>次の記事</div>
                          <div className="text-sm max-w-xs truncate">{nextPost.title}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 関連記事セクション */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8 text-center" style={{color: '#2D5A5A'}}>関連記事</h3>
                <div className={`grid gap-6 ${relatedPosts.length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : relatedPosts.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost._id}
                      href={`/updates/${relatedPost.slug.current}`}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <img
                        src={relatedPost.mainImage?.asset?.url || "/default-og-image.png"}
                        alt={relatedPost.mainImage?.alt || relatedPost.title}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center mb-2 text-xs" style={{color: '#2D5A5A', opacity: 0.6}}>
                          <Calendar className="w-3 h-3 mr-1" />
                          {format(new Date(relatedPost.publishedAt), 'yyyy年MM月dd日', { locale: ja })}
                        </div>
                        <h4 className="text-lg font-semibold mb-2 group-hover:opacity-80 line-clamp-2" style={{color: '#2D5A5A'}}>
                          {relatedPost.title}
                        </h4>
                        {relatedPost.excerpt && (
                          <p className="text-sm line-clamp-2" style={{color: '#2D5A5A', opacity: 0.8}}>
                            {relatedPost.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* カテゴリ一覧 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{color: '#2D5A5A'}}>カテゴリ</h3>
                <div className="space-y-2">
                  <Link 
                    href="/updates/category/ai-trends" 
                    className="block py-2 px-3 rounded-lg transition-colors"
                    style={{color: '#2D5A5A', opacity: 0.8}}
                  >
                    AIトレンド (2)
                  </Link>
                  <Link 
                    href="/updates/category/case-study" 
                    className="block py-2 px-3 rounded-lg transition-colors"
                    style={{color: '#2D5A5A', opacity: 0.8}}
                  >
                    実事例 (3)
                  </Link>
                  <Link 
                    href="/updates/category/tips" 
                    className="block py-2 px-3 rounded-lg transition-colors"
                    style={{color: '#2D5A5A', opacity: 0.8}}
                  >
                    活用ティップス (1)
                  </Link>
                </div>
              </div>

              {/* 人気のタグ */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{color: '#2D5A5A'}}>人気のタグ</h3>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    href="/updates/tag/chatgpt" 
                    className="inline-block px-3 py-1 text-xs rounded-full transition-colors"
                    style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
                  >
                    ChatGPT
                  </Link>
                  <Link 
                    href="/updates/tag/claude" 
                    className="inline-block px-3 py-1 text-xs rounded-full transition-colors"
                    style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
                  >
                    Claude
                  </Link>
                  <Link 
                    href="/updates/tag/automation" 
                    className="inline-block px-3 py-1 text-xs rounded-full transition-colors"
                    style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
                  >
                    自動化
                  </Link>
                  <Link 
                    href="/updates/tag/marketing" 
                    className="inline-block px-3 py-1 text-xs rounded-full transition-colors"
                    style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
                  >
                    マーケティング
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}