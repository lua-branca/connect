import { Brain, Target, User, CheckCircle, ArrowRight, Mail, Calendar, Settings, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
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
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium" style={{color: '#2D5A5A'}}>
                サービス一覧
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#2D5A5A'}}>
              3つの領域で<br />
              <span style={{color: '#F6E96B', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>あなたのビジネス</span>を<br />
              サポートします
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{color: '#2D5A5A', opacity: 0.8}}>
              AI技術とこれまでの経験を融合させ、<br />
              持続可能な成長と価値創造を支援します
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto">

        {/* サービスの特徴 */}
        <div className="rounded-2xl p-8 mb-16" style={{background: 'linear-gradient(135deg, #F8FBFA 0%, #E8F5E8 100%)'}}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#2D5A5A'}}>サービスの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#E0F2F1'}}>
                <Brain className="w-8 h-8" style={{color: '#5BBCB6'}} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#2D5A5A'}}>技術×ビジネス×共感力</h3>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                最先端AI技術を理解し、具体的なビジネス課題に適用する戦略的思考と、
                人間的な共感力を兼ね備えたアプローチ
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#FFF4E6'}}>
                <Target className="w-8 h-8" style={{color: '#F6E96B'}} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#2D5A5A'}}>実績に基づく提案</h3>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                10名規模のチーム管理経験とCMS運用実績を基に、
                実現可能性の高い具体的なソリューションを提案
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#E8F5E8'}}>
                <User className="w-8 h-8" style={{color: '#A8D5D0'}} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#2D5A5A'}}>継続的なサポート</h3>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                導入後も継続的にサポートし、効果測定と改善を重ねることで、
                長期的な成果創出を支援
              </p>
            </div>
          </div>
          
          {/* 提供者について */}
          <div className="text-center mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <p className="text-lg leading-relaxed" style={{color: '#2D5A5A'}}>
              <span className="font-semibold">IT業界20年の経験</span>を持つ福田美佐子が、
              現場で本当に使える実践的なソリューションをご提案します。
            </p>
            <div className="mt-4">
              <Link
                href="/profile"
                className="inline-flex items-center text-sm font-medium hover:underline"
                style={{color: '#5BBCB6'}}
              >
                詳しいプロフィールを見る
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3つのメインサービス */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* AI活用コンサルティング */}
          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #E0F2F1 0%, #F0FFFE 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#5BBCB6'}}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>AI活用コンサルティング</h2>
                <p className="font-medium" style={{color: '#5BBCB6'}}>戦略立案から実行まで</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              企業がAI技術を効果的に導入し、ビジネス課題を解決するための戦略立案から実行までをサポートします。
              特に、AIを活用した業務効率化、新規事業開発、そしてデータに基づいた意思決定を支援することで、企業の競争力向上に貢献します。
            </p>

            <h3 className="font-semibold text-gray-800 mb-4">提供内容</h3>
            <ul className="space-y-3 mb-8">
              {[
                'AI導入戦略の策定',
                '業務プロセスの効率化設計',
                '生成AI活用支援',
                'コーディングAI活用支援',
                'データ分析基盤構築',
                'AI人材育成プログラム',
                'ROI測定と改善提案'
              ].map((item, index) => (
                <li key={index} className="flex items-center" style={{color: '#2D5A5A', opacity: 0.8}}>
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#5BBCB6'}} />
                  {item}
                </li>
              ))}
            </ul>


          </div>

          {/* AIマーケティング戦略 */}
          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #FFF4E6 0%, #FFFEF0 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#F6E96B'}}>
                <Target className="w-6 h-6" style={{color: '#2D5A5A'}} />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>AIマーケティング戦略</h2>
                <p className="font-medium" style={{color: '#F6E96B'}}>データドリブン × 高品質コンテンツ</p>
              </div>
            </div>
            
            <p className="mb-6 leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
              AIツールを駆使し、データに基づいた精度の高いマーケティング戦略と、効率的かつ高品質なコンテンツ生成を提案します。
              パーソナライズされた顧客体験の提供を通じて、マーケティングROIの最大化を目指します。
            </p>

            <h3 className="font-semibold mb-4" style={{color: '#2D5A5A'}}>提供内容</h3>
            <ul className="space-y-3 mb-8">
              {[
                'AI活用マーケティング戦略策定',
                'パーソナライズコンテンツ生成',
                '顧客セグメンテーション自動化',
                'SNS・ブログ投稿自動化',
                'A/Bテスト設計・分析',
                'カスタマージャーニー最適化'
              ].map((item, index) => (
                <li key={index} className="flex items-center" style={{color: '#2D5A5A', opacity: 0.8}}>
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#5BBCB6'}} />
                  {item}
                </li>
              ))}
            </ul>


          </div>

          {/* 地方・食の生産者支援 */}
          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #E8F5E8 0%, #F0FFFE 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#A8D5D0'}}>
                <User className="w-6 h-6" style={{color: '#2D5A5A'}} />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>AI活用地方生産者支援</h2>
                <p className="font-medium" style={{color: '#A8D5D0'}}>デジタル × リアル = 持続可能な成長</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              AI・デジタル技術を活用して地方の生産者の課題を解決し、消費者との深いつながりを創出します。
              データドリブンなマーケティングと温かみのあるストーリーテリングを組み合わせ、持続可能なビジネス成長を支援します。
            </p>

            <h3 className="font-semibold text-gray-800 mb-4">提供内容</h3>
            <ul className="space-y-3 mb-8">
              {[
                'AIマーケティング × オンライン販売システム',
                'データ分析による顧客インサイト抽出',
                'AI活用コンテンツ生成 × ストーリー発信',
                'データ活用による販売戦略最適化',
                'SNS自動化 × リアルコミュニティ形成'
              ].map((item, index) => (
                <li key={index} className="flex items-center" style={{color: '#2D5A5A', opacity: 0.8}}>
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{color: '#5BBCB6'}} />
                  {item}
                </li>
              ))}
            </ul>


          </div>
        </div>

        {/* 付加価値サービス */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>AI導入成功のための基盤サービス</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: '#2D5A5A', opacity: 0.8}}>
              15年の実績を活かし、AI導入プロジェクトを確実に成功に導くための追加サポート
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* AIプロジェクト管理支援 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#E0F2F1'}}>
                  <Settings className="w-5 h-5" style={{color: '#5BBCB6'}} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{color: '#2D5A5A'}}>AIプロジェクト管理支援</h3>
                  <p className="text-sm" style={{color: '#5BBCB6'}}>確実な実行をサポート</p>
                </div>
              </div>
              
              <p className="mb-4 text-sm leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                10名規模のチーム管理経験を活かし、AI導入プロジェクトの計画策定から実行、効果測定まで一貫してサポートします。
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  'プロジェクト計画策定・進捗管理',
                  'ステークホルダー調整',
                  'リスク管理・品質管理',
                  'チーム育成・知識移転'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-xs" style={{color: '#2D5A5A', opacity: 0.7}}>
                    <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" style={{color: '#5BBCB6'}} />
                    {item}
                  </li>
                ))}
              </ul>

            </div>

            {/* AI時代のコンテンツ戦略 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{backgroundColor: '#FFF4E6'}}>
                  <FileText className="w-5 h-5" style={{color: '#F6E96B'}} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{color: '#2D5A5A'}}>AI時代のコンテンツ戦略</h3>
                  <p className="text-sm" style={{color: '#F6E96B'}}>効率的な制作体制構築</p>
                </div>
              </div>
              
              <p className="mb-4 text-sm leading-relaxed" style={{color: '#2D5A5A', opacity: 0.8}}>
                CMS運用とメディア編集の経験を基に、AIツールを活用した効率的なコンテンツ制作体制を構築します。
              </p>

              <ul className="space-y-2 mb-4">
                {[
                  'コンテンツ戦略策定・編集体制構築',
                  'AIツール活用ワークフロー設計',
                  'ブランディング・トーン設定',
                  'SEO・エンゲージメント最適化'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-xs" style={{color: '#2D5A5A', opacity: 0.7}}>
                    <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" style={{color: '#5BBCB6'}} />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm" style={{color: '#2D5A5A', opacity: 0.6}}>
              ※ これらのサービスは、AI導入プロジェクトと組み合わせてご提供いたします
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center rounded-2xl p-12" style={{background: 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 100%)'}}>
          <h2 className="text-3xl font-bold mb-4" style={{color: '#2D5A5A'}}>まずはお気軽にご相談ください</h2>
          <p className="text-xl mb-8" style={{color: '#2D5A5A', opacity: 0.9}}>
            あなたのビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 font-bold rounded-lg transition-colors shadow-lg"
              style={{backgroundColor: '#F6E96B', color: '#2D5A5A'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              無料相談を申し込む
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm font-medium rounded-lg hover:bg-white/90 transition-colors border border-white/50"
              style={{color: '#2D5A5A'}}
            >
              <User className="w-5 h-5 mr-2" />
              プロフィールを見る
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}