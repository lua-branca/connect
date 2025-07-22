import { getAllPosts, getArchiveData } from '@/lib/blog'
import { BlogPost } from '@/types'
import Link from 'next/link'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Calendar, User, Tag } from 'lucide-react'

export default async function BlogPage() {
  const posts: BlogPost[] = await getAllPosts()
  const archiveData = await getArchiveData()

  // 年別アーカイブデータを処理
  const yearCounts = archiveData.yearArchives.reduce((acc: Record<string, number>, post: { year?: number }) => {
    if (post.year) {
      const year = post.year
      acc[year] = (acc[year] || 0) + 1
    }
    return acc
  }, {})

  // 月別アーカイブデータを処理
  const monthCounts = archiveData.yearArchives.reduce((acc: Record<string, number>, post: { year?: number; month?: number }) => {
    if (post.year && post.month) {
      const yearMonth = `${post.year}-${post.month.toString().padStart(2, '0')}`
      acc[yearMonth] = (acc[yearMonth] || 0) + 1
    }
    return acc
  }, {})

  const sortedYears = Object.keys(yearCounts).sort((a, b) => Number(b) - Number(a))
  const sortedMonths = Object.keys(monthCounts).sort((a, b) => b.localeCompare(a)).slice(0, 5) // 最新5ヶ月

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>更新情報</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#2D5A5A', opacity: 0.8}}>
            AI活用の最新トレンドや実事例、お役立ち情報をお届けします
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* メインコンテンツ */}
          <div className="lg:col-span-1">
            {/* 記事一覧 */}
            {posts.length > 0 ? (
              <div className="space-y-8">
                {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="md:flex">
                  {/* メイン画像 */}
                  <div className="md:w-1/3">
                    {post.mainImage?.asset?.url ? (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    ) : (
                      // デフォルト画像を使用
                      <img
                        src="/default-og-image.png"
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="p-6 md:w-2/3">
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

                    {/* カテゴリとタグ */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
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
                      
                      {post.tags?.map((tag) => (
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
            ) : (
              /* 記事がない場合 */
              <div className="text-center py-16">
                <div className="rounded-xl p-12" style={{background: 'linear-gradient(135deg, #E0F2F1 0%, #F0FFFE 100%)'}}>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>更新情報を準備中です</h3>
                  <p className="text-lg mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                    AI活用に関する最新情報や実事例を順次公開予定です。
                  </p>
                  <p className="text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
                    公開まで今しばらくお待ちください。
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* サイドバー - 一時的に無効化 */}
          {/*
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{color: '#2D5A5A'}}>年別アーカイブ</h3>
                <div className="space-y-2">
                  {sortedYears.length > 0 ? (
                    sortedYears.map((year, index) => (
                      <div 
                        key={year}
                        className={`block py-2 px-3 rounded-lg ${index === 0 ? '' : ''}`}
                        style={index === 0 ? {backgroundColor: '#E0F2F1', color: '#2D5A5A'} : {color: '#2D5A5A', opacity: 0.7}}
                      >
                        {year}年 ({yearCounts[year]})
                      </div>
                    ))
                  ) : (
                    <div className="text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
                      アーカイブがありません
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{color: '#2D5A5A'}}>最近の投稿</h3>
                <div className="space-y-2">
                  {sortedMonths.length > 0 ? (
                    sortedMonths.map((yearMonth) => {
                      const [year, month] = yearMonth.split('-')
                      const monthName = format(new Date(Number(year), Number(month) - 1), 'yyyy年MM月', { locale: ja })
                      return (
                        <div 
                          key={yearMonth}
                          className="block py-2 px-3 rounded-lg"
                          style={{color: '#2D5A5A', opacity: 0.8}}
                        >
                          {monthName} ({monthCounts[yearMonth]})
                        </div>
                      )
                    })
                  ) : (
                    <div className="text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
                      投稿がありません
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{color: '#2D5A5A'}}>カテゴリ</h3>
                <div className="space-y-2">
                  {archiveData.categories.length > 0 ? (
                    archiveData.categories.map((category: { _id: string; title: string; slug?: { current: string }; postCount: number }) => (
                      <div 
                        key={category._id}
                        className="block py-2 px-3 rounded-lg"
                        style={{color: '#2D5A5A', opacity: 0.8}}
                      >
                        {category.title} ({category.postCount})
                      </div>
                    ))
                  ) : (
                    <div className="text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
                      カテゴリがありません
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4" style={{color: '#2D5A5A'}}>人気のタグ</h3>
                <div className="flex flex-wrap gap-2">
                  {archiveData.tags.length > 0 ? (
                    archiveData.tags.slice(0, 10).map((tag: { _id: string; name: string; slug?: { current: string } }) => (
                      <div 
                        key={tag._id}
                        className="inline-block px-3 py-1 text-xs rounded-full"
                        style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}
                      >
                        {tag.name}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
                      タグがありません
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}