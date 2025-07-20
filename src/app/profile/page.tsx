import { User, Mail, BookOpen, Facebook, Briefcase, Award, Target, Code, Brain, Users, Instagram, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// アイコンコンポーネントのマップ
const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Code,
    Brain,
    Users,
    Target,
    Award,
    Briefcase,
    User,
    BookOpen,
    Globe,
    Mail,
  }
  return icons[iconName] || User
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden bg-white shadow-2xl ring-4 ring-white/20">
            <Image
              src="/profile-avatar.png"
              alt="LUA BLANCA CONNECT代表のプロフィール画像"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{color: '#2D5A5A'}}>
            福田 美佐子
          </h1>
          <p className="text-xl mb-6" style={{color: '#5BBCB6'}}>
            コンテンツ・AI活用コンサルタント
          </p>
          
          {/* ソーシャルアイコン */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/lua_branca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{backgroundColor: '#2D5A5A'}}
              aria-label="X (旧Twitter)"
            >
              <X className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://instagram.com/lua_branca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{backgroundColor: '#F6E96B'}}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" style={{color: '#2D5A5A'}} />
            </a>
            <a
              href="https://note.com/lua_branca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{backgroundColor: '#5BBCB6'}}
              aria-label="note"
            >
              <BookOpen className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/fukuda.misako"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{backgroundColor: '#A8D5D0'}}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" style={{color: '#2D5A5A'}} />
            </a>
          </div>
        </div>

        {/* 私が目指すこと */}
        <div className="rounded-2xl p-12 mb-16" style={{background: 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 100%)'}}>
          <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#2D5A5A'}}>私が目指すこと</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-center" style={{color: '#2D5A5A'}}>
              私は、これまでの経験で培った「課題解決能力」と「情報発信力」を基盤に、新たな価値創造に挑戦したいと考えています。
              特に、急速に進化するAI技術を社会に実装し、より多くの企業や個人がその恩恵を受けられるよう支援することを使命としています。
            </p>
          </div>
        </div>

        {/* 私の強み */}
        <div className="rounded-2xl p-12 mb-16" style={{background: 'linear-gradient(135deg, #F6E96B 0%, #A8D5D0 100%)'}}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>私の強み</h2>
            <p className="text-lg" style={{color: '#2D5A5A', opacity: 0.8}}>
              この使命を実現するために、私が発揮できる強みをご紹介します。
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{color: '#2D5A5A'}}>技術×ビジネス×共感力</h3>
                <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                  私の最大の強みは、技術的な知見とビジネス視点、そして人間的な共感力を兼ね備えている点です。
                  AIという最先端の技術を理解し、それを具体的なビジネス課題にどう適用するかを戦略的に考え、
                  さらにそれを実行に移すためのプロジェクトマネジメント能力があります。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4" style={{color: '#2D5A5A'}}>情報発信力と共感創造</h3>
                <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                  ウェブメディアでの経験から、複雑な情報を分かりやすく伝え、人々の心を動かすコンテンツを創造する力も持ち合わせています。
                  特に、地方の生産者支援においては、単なるビジネスとしてだけでなく、
                  日本の豊かな食文化を守り、次世代に繋いでいくという強い情熱を持って取り組んでまいります。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 私の歩み・経験 */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#2D5A5A'}}>私の歩み・経験</h2>
          <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #E0F2F1 0%, #F0FFFE 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#5BBCB6'}}>
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>プロジェクトマネジメント</h3>
            </div>
            <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
              IT業界で15年以上にわたり、10名規模のチーム管理から複雑なプロジェクトの計画策定・実行まで幅広く経験してきました。
            </p>
            <ul className="text-sm space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
              <li>• 大規模システム開発プロジェクト管理</li>
              <li>• コスト・品質・進捗の統合管理</li>
              <li>• ステークホルダー調整・合意形成</li>
              <li>• チーム育成・知識移転</li>
            </ul>
          </div>

          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #FFF4E6 0%, #FFFEF0 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#F6E96B'}}>
                <BookOpen className="w-6 h-6" style={{color: '#2D5A5A'}} />
              </div>
              <h3 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>コンテンツ・メディア運営</h3>
            </div>
            <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
              CMS構築・運用からウェブメディアの企画・編集まで、デジタルコンテンツ制作の全工程を経験し、情報発信力を磨いてきました。
            </p>
            <ul className="text-sm space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
              <li>• CMS設計・構築・運用</li>
              <li>• ウェブメディア企画・編集</li>
              <li>• ユーザー目線のライティング</li>
              <li>• ブランド価値向上への貢献</li>
            </ul>
          </div>

          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #E8F5E8 0%, #F0FFFE 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#A8D5D0'}}>
                <Brain className="w-6 h-6" style={{color: '#2D5A5A'}} />
              </div>
              <h3 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>AI技術への探求</h3>
            </div>
            <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
              ChatGPTやClaude等の生成AIが登場した当初から積極的に活用し、ビジネス現場での実践的な応用方法を研究・実装してきました。
            </p>
            <ul className="text-sm space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
              <li>• 生成AI活用による業務効率化</li>
              <li>• AI API統合・自動化システム構築</li>
              <li>• データ分析・意思決定支援</li>
              <li>• AI時代の働き方改革推進</li>
            </ul>
          </div>
          </div>
        </div>

        {/* 主な実績 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#2D5A5A'}}>主な実績</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 pl-6" style={{borderColor: '#5BBCB6'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#2D5A5A'}}>教育系スタートアップ支援</h3>
                <p className="text-sm mb-2" style={{color: '#5BBCB6', fontWeight: 'medium'}}>コンテンツ企画・編集</p>
                <p className="text-sm mb-3" style={{color: '#2D5A5A', opacity: 0.8}}>
                  教育向けWebサービスの導入事例制作を4年間担当。教育現場への取材を通じてコンテンツマーケティングを推進。
                </p>
                <ul className="text-xs space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
                  <li>• 教育委員会・学校法人への取材実施</li>
                  <li>• コンテンツ企画から記事編集まで一貫対応</li>
                  <li>• 導入効果を可視化したストーリー制作</li>
                </ul>
              </div>
              
              <div className="border-l-4 pl-6" style={{borderColor: '#F6E96B'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#2D5A5A'}}>カスタマーサクセス・PM業務</h3>
                <p className="text-sm mb-2" style={{color: '#F6E96B', fontWeight: 'medium'}}>プロジェクトマネージャー</p>
                <p className="text-sm mb-3" style={{color: '#2D5A5A', opacity: 0.8}}>
                  BtoBサービスの複数クライアントプロジェクトを担当。2〜10名のチームメンバー管理により継続的な成果創出を実現。
                </p>
                <ul className="text-xs space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
                  <li>• 混乱プロジェクトのタスク整理・実行プラン策定</li>
                  <li>• クライアント関係構築・チーム環境づくり</li>
                  <li>• 継続的な品質向上・業務効率化推進</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 pl-6" style={{borderColor: '#A8D5D0'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#2D5A5A'}}>大手企業CMS構築・運用</h3>
                <p className="text-sm mb-2" style={{color: '#A8D5D0', fontWeight: 'medium'}}>Webディレクター</p>
                <p className="text-sm mb-3" style={{color: '#2D5A5A', opacity: 0.8}}>
                  大手企業のコーポレートサイト・オウンドメディアのCMS構築・運用を多数担当。金融・保険・教育・IT業界での豊富な実績。
                </p>
                <ul className="text-xs space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
                  <li>• Movable Type、Sitecore、AEM等の運用手順確立</li>
                  <li>• IRサイト決算対応・安定運用体制構築</li>
                  <li>• GitHub活用によるコンテンツ管理効率化</li>
                </ul>
              </div>
              
              <div className="border-l-4 pl-6" style={{borderColor: '#5BBCB6'}}>
                <h3 className="text-xl font-bold mb-2" style={{color: '#2D5A5A'}}>AI活用コンテンツ制作</h3>
                <p className="text-sm mb-2" style={{color: '#5BBCB6', fontWeight: 'medium'}}>SEOライター</p>
                <p className="text-sm mb-3" style={{color: '#2D5A5A', opacity: 0.8}}>
                  地域情報サイトでのSEO記事制作において、AIライティングツールを活用した効率的な制作体制を構築。
                </p>
                <ul className="text-xs space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
                  <li>• AIツール活用による記事制作効率化</li>
                  <li>• SEO最適化された高品質コンテンツ制作</li>
                  <li>• 地域情報発信を通じた観光促進貢献</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        {/* お問い合わせCTA */}
        <div className="text-center rounded-2xl p-12" style={{background: 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 100%)'}}>
          <h2 className="text-4xl font-bold mb-6" style={{color: '#2D5A5A'}}>まずはお気軽にお話を聞かせてください</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: '#2D5A5A'}}>
            皆様のビジネスの成長、そしてより豊かな社会の実現に向けて、
            私の経験と情熱を最大限に活かして貢献できることを楽しみにしております。
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
    </div>
  )
}