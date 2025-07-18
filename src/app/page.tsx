import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, User, Mail, Brain, Target, CheckCircle, Star, Award, Zap, Users, TrendingUp, Clock, BarChart3, MessageCircle, Calendar } from 'lucide-react'
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
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20" style={{background: '#F6E96B'}}></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-15" style={{background: '#2D5A5A'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, #F6E96B 0%, transparent 70%)'}}></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* 左側: テキストコンテンツ */}
            <div className="text-left space-y-6">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium" style={{color: '#2D5A5A'}}>
                  ビジネスの困りごとをAIで解決
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight" style={{color: '#2D5A5A'}}>
                あなたの会社が<br />
                <span style={{color: '#F6E96B', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>自分でAIを使える</span><br />
                ようになります
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                日々の困りごとをAIでスピーディに解決し、<br />
                継続的に自社でAI活用できる体制を構築します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  style={{backgroundColor: '#F6E96B', color: '#2D5A5A'}}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  無料相談を申し込む
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm font-medium rounded-xl hover:bg-white/90 transition-colors border border-white/50"
                  style={{color: '#2D5A5A'}}
                >
                  サービス詳細を見る
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* 右側: 視覚的要素 */}
            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                {/* メインの視覚的要素 */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#5BBCB6'}}>
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{color: '#2D5A5A'}}>AI導入相談</h3>
                        <p className="text-sm opacity-70">相談可能</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="h-2 rounded-full" style={{backgroundColor: '#F6E96B', width: '85%'}}></div>
                    </div>
                    <div className="text-xs opacity-60">進行状況: 85% 完了</div>
                  </div>
                </div>
                
                {/* 背景の装飾要素 */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{backgroundColor: '#F6E96B'}}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20" style={{backgroundColor: '#2D5A5A'}}></div>
              </div>
            </div>
          </div>
          
          {/* 統計情報 */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{color: '#2D5A5A'}}>課題解決</div>
              <div className="text-sm opacity-70" style={{color: '#2D5A5A'}}>スピーディに</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{color: '#2D5A5A'}}>自立運用</div>
              <div className="text-sm opacity-70" style={{color: '#2D5A5A'}}>できるように</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{color: '#2D5A5A'}}>スピーディ</div>
              <div className="text-sm opacity-70" style={{color: '#2D5A5A'}}>回答</div>
            </div>
          </div>
        </div>
      </section>

      {/* 実績・強みセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                なぜAI活用で成果が出るのか
              </h2>
              <p className="text-lg text-gray-600">
                IT業界15年の経験から見えてきた、AI導入成功の秘訣
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#F0FFFE'}}>
                <div className="text-4xl font-bold mb-2" style={{color: '#5BBCB6'}}>15年</div>
                <div className="text-sm" style={{color: '#2D5A5A'}}>IT業界での経験</div>
              </div>
              <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#FFFEF0'}}>
                <div className="text-4xl font-bold mb-2" style={{color: '#F6E96B'}}>スピーディ</div>
                <div className="text-sm" style={{color: '#2D5A5A'}}>初回返答</div>
              </div>
              <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#F0FFFE'}}>
                <div className="text-4xl font-bold mb-2" style={{color: '#5BBCB6'}}>実践重視</div>
                <div className="text-sm" style={{color: '#2D5A5A'}}>現場で使える手法</div>
              </div>
              <div className="text-center p-6 rounded-xl" style={{backgroundColor: '#FFFEF0'}}>
                <div className="text-4xl font-bold mb-2" style={{color: '#F6E96B'}}>継続支援</div>
                <div className="text-sm" style={{color: '#2D5A5A'}}>導入後もサポート</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                誰があなたをサポートするのか
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                IT業界で培った豊富な経験とAI技術への深い理解で、あなたのビジネス成長を支援します
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* プロフィール画像・情報 */}
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 rounded-full mx-auto lg:mx-0 mb-8 overflow-hidden bg-white shadow-lg">
                  <Image
                    src="/profile-avatar.png"
                    alt="LUA BLANCA CONNECT代表のプロフィール画像"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                  IT業界15年の実践経験
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                  大手IT企業での豊富なプロジェクト管理経験を活かし、AI技術をビジネスに効果的に導入する方法を熟知しています。
                  特に業務効率化とマーケティング自動化の分野で多くの成功事例を持ちます。
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
                      実証済みの手法
                    </h4>
                    <p style={{color: '#2D5A5A', opacity: 0.8}}>
                      多数のプロジェクトで実際に成果を上げてきた、実証済みのAI導入手法をご提供します
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0" style={{backgroundColor: '#E8F5E8'}}>
                    <Users className="w-6 h-6" style={{color: '#5BBCB6'}} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{color: '#2D5A5A'}}>
                      現場目線のサポート
                    </h4>
                    <p style={{color: '#2D5A5A', opacity: 0.8}}>
                      理論だけでなく、現場での実装・運用まで見据えた現実的なソリューションを提案します
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

      {/* AI活用のメリットセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                AI活用で解決できる課題
              </h2>
              <p className="text-lg" style={{color: '#2D5A5A', opacity: 0.8}}>
                多くの企業が抱える共通の課題を、AIでスマートに解決します
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 課題解決例1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#E0F2F1'}}>
                  <Clock className="w-8 h-8" style={{color: '#5BBCB6'}} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#2D5A5A'}}>時間のかかる定型作業</h3>
                <p className="mb-6" style={{color: '#2D5A5A', opacity: 0.8}}>
                  データ入力、レポート作成、顧客対応など、毎日繰り返している作業を自動化し、
                  本来のクリエイティブな業務に集中できるようにします。
                </p>
                <div className="text-sm font-medium" style={{color: '#5BBCB6'}}>
                  → 作業時間を大幅短縮
                </div>
              </div>

              {/* 課題解決例2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#FFF4E6'}}>
                  <BarChart3 className="w-8 h-8" style={{color: '#F6E96B'}} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#2D5A5A'}}>データ分析の難しさ</h3>
                <p className="mb-6" style={{color: '#2D5A5A', opacity: 0.8}}>
                  売上データ、顧客データなどを効果的に分析し、ビジネス判断に役立つ
                  インサイトを自動で抽出・可視化します。
                </p>
                <div className="text-sm font-medium" style={{color: '#5BBCB6'}}>
                  → より良い意思決定を実現
                </div>
              </div>

              {/* 課題解決例3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{backgroundColor: '#E8F5E8'}}>
                  <MessageCircle className="w-8 h-8" style={{color: '#5BBCB6'}} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{color: '#2D5A5A'}}>顧客対応の品質向上</h3>
                <p className="mb-6" style={{color: '#2D5A5A', opacity: 0.8}}>
                  チャットボットやFAQ自動生成により、
                  顧客満足度向上と人的コスト削減を両立します。
                </p>
                <div className="text-sm font-medium" style={{color: '#5BBCB6'}}>
                  → 顧客満足度と効率性の向上
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
              あなたの事業を次のレベルへ
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
              あなたの会社の課題をAIで解決しませんか？<br />
              まずは無料相談からお始めください
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl"
                style={{backgroundColor: '#F6E96B', color: '#2D5A5A'}}
              >
                <Zap className="w-5 h-5 mr-2" />
                無料相談を申し込む
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm font-medium rounded-lg hover:bg-white/90 transition-colors border border-white/50"
                style={{color: '#2D5A5A'}}
              >
                サービス詳細を確認
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2" style={{color: '#2D5A5A'}}>無料</div>
                <div className="text-sm" style={{color: '#2D5A5A', opacity: 0.7}}>初回相談</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2" style={{color: '#2D5A5A'}}>スピーディ</div>
                <div className="text-sm" style={{color: '#2D5A5A', opacity: 0.7}}>回答</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2" style={{color: '#2D5A5A'}}>守秘義務</div>
                <div className="text-sm" style={{color: '#2D5A5A', opacity: 0.7}}>完全保証</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 簡易お問い合わせセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              まずは気軽にご相談ください
            </h2>
            <p className="text-gray-600 mb-8">
              ご質問やお仕事のご依頼など、どんな些細なことでもお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 font-medium rounded-lg transition-colors shadow-lg"
                style={{backgroundColor: '#5BBCB6', color: '#FFFFFF'}}
              >
                <Mail className="w-5 h-5 mr-2" />
                お問い合わせフォーム
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
