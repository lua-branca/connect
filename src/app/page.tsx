import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, User, Mail, Brain, Target, CheckCircle, Star, Award, Zap, Users, TrendingUp, Clock, BarChart3, MessageCircle, Calendar, FileText, Settings, Search, Lightbulb, HandHeart } from 'lucide-react'
import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { BlogPost } from '@/types'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export const metadata: Metadata = {
  title: 'LUA BLANCA CONNECT | AI活用で課題をスピーディに解決',
  description: 'ビジネスの困りごとをAIでスピーディに解決し、継続的に自社でAI活用できる体制を構築するコンサルティングサービスです。',
  openGraph: {
    title: 'LUA BLANCA CONNECT | AI活用で課題をスピーディに解決',
    description: 'ビジネスの困りごとをAIでスピーディに解決し、継続的に自社でAI活用できる体制を構築するコンサルティングサービスです。',
    images: [
      {
        url: '/default-og-image.png',
        width: 1200,
        height: 630,
        alt: 'LUA BLANCA CONNECT - AI活用で課題をスピーディに解決',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUA BLANCA CONNECT | AI活用で課題をスピーディに解決',
    description: 'ビジネスの困りごとをAIでスピーディに解決し、継続的に自社でAI活用できる体制を構築するコンサルティングサービスです。',
    images: ['/default-og-image.png'],
  },
}

export default async function Home() {
  // 最新の記事を3件取得
  const posts: BlogPost[] = await getAllPosts()
  const latestPosts = posts.slice(0, 3)
  return (
    <div className="overflow-hidden">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 100%)'}}>
        {/* 装飾的な背景要素 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 animate-pulse" style={{background: '#F6E96B'}}></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-15 animate-bounce" style={{background: '#2D5A5A', animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 animate-spin" style={{background: 'radial-gradient(circle, #F6E96B 0%, transparent 70%)', animationDuration: '20s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
            {/* 左側: テキストコンテンツ */}
            <div className="text-left space-y-6">
              <div className="mb-6 animate-in fade-in-50 slide-in-from-left-4 duration-700">
                <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium" style={{color: '#2D5A5A'}}>
                  15年の実績 × コンテンツ制作 × AI活用
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-in fade-in-50 slide-in-from-left-4 duration-1000 delay-300" style={{color: '#2D5A5A'}}>
                小規模事業者の<br />
                <span style={{color: '#F6E96B', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>AI活用を成功に導く</span><br />
                実践的パートナー
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed animate-in fade-in-50 slide-in-from-left-4 duration-1000 delay-500" style={{color: '#2D5A5A', opacity: 0.8}}>
                コンテンツ制作・プロジェクト管理の豊富な経験を活かし、<br />
                あなたの事業にAIを確実に定着させる継続サポートを提供します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-in fade-in-50 slide-in-from-left-4 duration-1000 delay-700">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{backgroundColor: '#F6E96B', color: '#2D5A5A'}}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  無料相談を申し込む
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm font-medium rounded-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 border border-white/50"
                  style={{color: '#2D5A5A'}}
                >
                  サービス詳細を見る
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* 右側: サービスの流れ */}
            <div className="relative">
              <div className="relative z-10">
                {/* サービスの3ステップ */}
                <div className="space-y-6">
                  {/* STEP 1 */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-right-4 delay-500">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#5BBCB6'}}>
                        <Search className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1" style={{color: '#2D5A5A'}}>課題の見える化</h3>
                        <p className="text-sm" style={{color: '#2D5A5A', opacity: 0.7}}>現状の課題を整理し、AI活用の方向性を明確化</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* STEP 2 */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-right-4 delay-700">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F6E96B'}}>
                        <Lightbulb className="w-6 h-6" style={{color: '#2D5A5A'}} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1" style={{color: '#2D5A5A'}}>最適解の提案</h3>
                        <p className="text-sm" style={{color: '#2D5A5A', opacity: 0.7}}>あなたの事業に最適なAIソリューションを提案</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* STEP 3 */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-right-4 delay-900">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#A8D5D0'}}>
                        <HandHeart className="w-6 h-6" style={{color: '#2D5A5A'}} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1" style={{color: '#2D5A5A'}}>成果創出まで伴走</h3>
                        <p className="text-sm" style={{color: '#2D5A5A', opacity: 0.7}}>導入から運用定着まで継続的にサポート</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 背景の装飾要素 */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{backgroundColor: '#F6E96B'}}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20" style={{backgroundColor: '#2D5A5A'}}></div>
              </div>
            </div>
          </div>
          
        </div>
      </section>


      {/* サービス概要セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                3つの主要サービス
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                AI技術とこれまでの経験を融合させ、あなたのビジネス課題を解決します
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* AI活用コンサルティング */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{backgroundColor: '#E0F2F1'}}>
                    <Brain className="w-8 h-8" style={{color: '#5BBCB6'}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>AI活用コンサルティング</h3>
                  <p className="mb-6 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                    企業がAI技術を効果的に導入し、ビジネス課題を解決するための戦略立案から実行までをサポート
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      課題の根本解決
                    </li>
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      自社でAI運用可能
                    </li>
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      継続的な改善支援
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center font-medium hover:underline"
                    style={{color: '#5BBCB6'}}
                  >
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* AIマーケティング戦略 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{backgroundColor: '#E8F5E8'}}>
                    <Target className="w-8 h-8" style={{color: '#5BBCB6'}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>AIマーケティング戦略</h3>
                  <p className="mb-6 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                    AIツールを駆使したデータ基盤の精度の高いマーケティング戦略と高品質なコンテンツ生成を提案
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      データ活用の仕組み構築
                    </li>
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      コンテンツ制作の自動化
                    </li>
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      社内運用体制の確立
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center font-medium hover:underline"
                    style={{color: '#5BBCB6'}}
                  >
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* 地方・食の生産者支援 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{backgroundColor: '#FFF4E6'}}>
                    <User className="w-8 h-8" style={{color: '#F6E96B'}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>AI活用地方生産者支援</h3>
                  <p className="mb-6 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                    AI・デジタル技術を活用して地方生産者の課題を解決し、消費者との深いつながりを創出
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      AIマーケティングによる販売力向上
                    </li>
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      データ活用による戦略最適化
                    </li>
                    <li className="flex items-center text-sm" style={{color: '#2D5A5A'}}>
                      <CheckCircle className="w-4 h-4 mr-2" style={{color: '#5BBCB6'}} />
                      AI活用コンテンツによる魅力発信
                    </li>
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center font-medium hover:underline"
                    style={{color: '#5BBCB6'}}
                  >
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロフィール概要セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                コンサルタント紹介
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{color: '#2D5A5A', opacity: 0.8}}>
                コンテンツ・AI活用コンサルタントとして、実用性重視・継続支援・個別対応の3つの要素で、あなたの事業のAI活用を成功に導きます
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* プロフィール画像・情報 */}
              <div className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-8 overflow-hidden bg-white shadow-lg">
                  <Image
                    src="/profile-avatar.png"
                    alt="LUA BLANCA CONNECT代表のプロフィール画像"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                  実務経験に基づく実践的なAI活用支援
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                  15年以上のIT業界経験とコンテンツ制作・メディア運営の実績を活かし、現場で確実に成果を出せるAI活用方法を提案します。
                  各事業者様の目的と規模に合わせたオーダーメイドサポートで、AI導入から運用まで継続的に伴走します。
                </p>
                <Link
                  href="/profile"
                  className="inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors text-white"
                  style={{backgroundColor: '#5BBCB6'}}
                >
                  詳しいプロフィールを見る
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              
              {/* 強み・特徴 */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0" style={{backgroundColor: '#E0F2F1'}}>
                    <Award className="w-6 h-6" style={{color: '#5BBCB6'}} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{color: '#2D5A5A'}}>
                      豊富な実務経験
                    </h4>
                    <p style={{color: '#2D5A5A', opacity: 0.8}}>
                      大手企業でのCMS構築・運用、教育系スタートアップでのコンテンツ制作など、多様な実務経験に基づいた実証済みの手法をご提供します
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0" style={{backgroundColor: '#E8F5E8'}}>
                    <Users className="w-6 h-6" style={{color: '#5BBCB6'}} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{color: '#2D5A5A'}}>
                      技術×コンテンツ×AI
                    </h4>
                    <p style={{color: '#2D5A5A', opacity: 0.8}}>
                      プロジェクトマネジメント、コンテンツ制作、AI活用の3つの専門領域を組み合わせた独自のアプローチでサポートします
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0" style={{backgroundColor: '#FFF4E6'}}>
                    <TrendingUp className="w-6 h-6" style={{color: '#F6E96B'}} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{color: '#2D5A5A'}}>
                      継続的な成長支援
                    </h4>
                    <p style={{color: '#2D5A5A', opacity: 0.8}}>
                      導入後も継続的にサポートし、事業の成長に合わせて最適化を続けます
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 最新記事セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold" style={{color: '#2D5A5A'}}>最新の更新情報</h2>
              <Link
                href="/updates"
                className="font-medium hover:underline"
                style={{color: '#5BBCB6'}}
              >
                更新情報一覧を見る →
              </Link>
            </div>
            
            {/* 実際の記事カード */}
            {latestPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/updates/${post.slug.current}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                  >
                    {/* 記事画像 */}
                    {post.mainImage?.asset?.url ? (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <img
                        src="/default-og-image.png"
                        alt={post.title}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    
                    <div className="p-6">
                      {/* メタ情報 */}
                      <div className="flex items-center justify-between mb-3">
                        {/* カテゴリ */}
                        {post.categories?.[0] && (
                          <span className="px-3 py-1 text-xs font-medium rounded-full" style={{backgroundColor: '#E0F2F1', color: '#2D5A5A'}}>
                            {post.categories[0].title}
                          </span>
                        )}
                        
                        {/* 日付 */}
                        <div className="flex items-center text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
                          <Calendar className="w-3 h-3 mr-1" style={{color: '#5BBCB6'}} />
                          {format(new Date(post.publishedAt), 'MM月dd日', { locale: ja })}
                        </div>
                      </div>

                      {/* タイトル */}
                      <h3 className="font-semibold mb-2 group-hover:opacity-80 transition-opacity" style={{color: '#2D5A5A'}}>
                        {post.title}
                      </h3>

                      {/* 抜粋 */}
                      <p className="text-sm line-clamp-3" style={{color: '#2D5A5A', opacity: 0.8}}>
                        {post.excerpt || '記事の抜粋がありません。'}
                      </p>

                      {/* タグ */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag._id}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{backgroundColor: '#F0FFFE', color: '#2D5A5A', opacity: 0.8}}
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
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
        </div>
      </section>

      {/* 今すぐ始めるCTAセクション */}
      <section className="py-20" style={{backgroundColor: '#A8D5D0'}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#2D5A5A'}}>まずはお気軽にご相談ください</h2>
            <p className="text-xl mb-8" style={{color: '#2D5A5A', opacity: 0.9}}>
              あなたのビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-12 py-5 text-xl font-bold rounded-2xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-3xl animate-pulse"
                style={{backgroundColor: '#F6E96B', color: '#2D5A5A', boxShadow: '0 0 30px rgba(246, 233, 107, 0.5)'}}
              >
                <Mail className="w-6 h-6 mr-3" />
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
