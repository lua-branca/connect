import { User, MapPin, Calendar, Globe, Github, Twitter, Mail, BookOpen, Linkedin, Facebook, Briefcase, Award, Target, Code, Brain, Users, Instagram, Youtube, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getProfile } from '@/lib/profile'
import { urlFor } from '@/lib/sanity'

// アイコンコンポーネントのマップ
const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: any } = {
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

export default async function ProfilePage() {
  const profile = await getProfile()
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
            AI活用アドバイザー
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
            <p className="text-lg leading-relaxed mb-6" style={{color: '#2D5A5A'}}>
              私は、これまでの経験で培った「課題解決能力」と「情報発信力」を基盤に、新たな価値創造に挑戦したいと考えています。
              特に、急速に進化するAI技術を社会に実装し、より多くの企業や個人がその恩恵を受けられるよう支援することを使命としています。
            </p>
            <p className="text-center font-medium" style={{color: '#2D5A5A', opacity: 0.8}}>
              以下の3つの領域で皆様のビジネスと社会に貢献してまいります。
            </p>
          </div>
        </div>

        {/* 3つの事業領域 */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12" style={{color: '#2D5A5A'}}>取り組んでいること</h2>
          <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #E0F2F1 0%, #F0FFFE 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#5BBCB6'}}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>AI活用コンサルティング</h3>
            </div>
            <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
              企業がAI技術を効果的に導入し、ビジネス課題を解決するための戦略立案から実行までをサポートします。
            </p>
            <ul className="text-sm space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
              <li>• AI活用業務効率化</li>
              <li>• 新規事業開発支援</li>
              <li>• データ基盤意思決定</li>
              <li>• 企業競争力向上</li>
            </ul>
          </div>

          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #FFF4E6 0%, #FFFEF0 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#F6E96B'}}>
                <Target className="w-6 h-6" style={{color: '#2D5A5A'}} />
              </div>
              <h3 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>AIマーケティング戦略</h3>
            </div>
            <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
              AIツールを駆使し、データに基づいた精度の高いマーケティング戦略と、効率的かつ高品質なコンテンツ生成を提案します。
            </p>
            <ul className="text-sm space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
              <li>• パーソナライズ顧客体験</li>
              <li>• マーケティングROI最大化</li>
              <li>• AI活用コンテンツ生成</li>
              <li>• データドリブン戦略</li>
            </ul>
          </div>

          <div className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" style={{background: 'linear-gradient(135deg, #E8F5E8 0%, #F0FFFE 100%)'}}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{backgroundColor: '#A8D5D0'}}>
                <User className="w-6 h-6" style={{color: '#2D5A5A'}} />
              </div>
              <h3 className="text-2xl font-bold" style={{color: '#2D5A5A'}}>地方・食の生産者支援</h3>
            </div>
            <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
              地方の生産者と消費者を直接結びつけるオンラインプラットフォームを構築し、生産者の収益向上と地域経済の活性化に貢献します。
            </p>
            <ul className="text-sm space-y-1" style={{color: '#2D5A5A', opacity: 0.7}}>
              <li>• 生産者ストーリー発信</li>
              <li>• 安心安全な食材選択</li>
              <li>• 地域経済活性化</li>
              <li>• 生産者×消費者の絆</li>
            </ul>
          </div>
          </div>
        </div>

        {/* 私の強み */}
        <div className="rounded-2xl p-12 mb-16" style={{background: 'linear-gradient(135deg, #F6E96B 0%, #A8D5D0 100%)'}}>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>私の強み</h2>
            <p className="text-lg" style={{color: '#2D5A5A', opacity: 0.8}}>
              これらの取り組みを通じて、私が発揮できる強みをご紹介します。
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

        {/* スキル・専門分野 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#2D5A5A'}}>スキル・専門分野</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {profile?.skills && profile.skills.length > 0 ? (
              profile.skills.map((skill, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4" style={{color: '#2D5A5A'}}>{skill.category}</h3>
                  <ul className="space-y-2" style={{color: '#2D5A5A', opacity: 0.8}}>
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              // デフォルトのスキル表示
              <>
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{color: '#2D5A5A'}}>プロジェクトマネジメント</h3>
                  <ul className="space-y-2" style={{color: '#2D5A5A', opacity: 0.8}}>
                    <li>• 10名規模チーム管理</li>
                    <li>• コスト・品質・進捗管理</li>
                    <li>• 複雑要件の整理・計画策定</li>
                    <li>• ステークホルダー関係構築</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{color: '#2D5A5A'}}>コンテンツ・CMS運用</h3>
                  <ul className="space-y-2" style={{color: '#2D5A5A', opacity: 0.8}}>
                    <li>• CMS構築・運用</li>
                    <li>• ウェブメディア企画・編集</li>
                    <li>• 読者の心に響くライティング</li>
                    <li>• 情報発信によるビジネス貢献</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{color: '#2D5A5A'}}>AI技術活用</h3>
                  <ul className="space-y-2" style={{color: '#2D5A5A', opacity: 0.8}}>
                    <li>• ChatGPT/Claude API活用</li>
                    <li>• AI業務効率化戦略</li>
                    <li>• データドリブン意思決定</li>
                    <li>• AIマーケティング支援</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>


        {/* 職歴・経験 */}
        {profile?.experience && profile.experience.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
              職歴・経験
            </h2>
            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{exp.company}</h3>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="font-medium text-gray-700 mb-2">{exp.position}</p>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 提供サービス */}
        {profile?.services && profile.services.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2 text-blue-600" />
              提供サービス
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.services.map((service, index) => {
                const IconComponent = getIconComponent(service.icon)
                return (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-6 h-6 mr-2 text-blue-600" />
                      <h3 className="font-semibold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* 実績・成果 */}
        {profile?.achievements && profile.achievements.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-blue-600" />
              実績・成果
            </h2>
            <div className="space-y-4">
              {profile.achievements.map((achievement, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                    <span className="text-sm text-gray-500">{achievement.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* お問い合わせCTA */}
        <div className="text-center rounded-2xl p-12" style={{background: 'linear-gradient(135deg, #A8D5D0 0%, #5BBCB6 100%)'}}>
          <h2 className="text-4xl font-bold mb-6" style={{color: '#2D5A5A'}}>共に新しい価値を創造しませんか</h2>
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