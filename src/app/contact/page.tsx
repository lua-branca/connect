'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { trackContactForm } from '@/lib/gtag'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Formspreeエンドポイント
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzzvzelw"
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || '（未入力）',
          service: formData.service || '（未選択）',
          message: formData.message,
          _subject: `お問い合わせ: ${formData.name}様より`,
          _replyto: formData.email,
          _autoresponse: `${formData.name}様

この度は、LUA BLANCA CONNECTにお問い合わせいただき、ありがとうございます。

以下の内容でお問い合わせを受け付けいたしました。

【お問い合わせ内容】
お名前: ${formData.name}
会社名: ${formData.company || '（未入力）'}
ご興味のあるサービス: ${formData.service || '（未選択）'}
お問い合わせ内容: ${formData.message}

追って担当者よりご連絡いたします。
何かご不明な点がございましたら、お気軽にお問い合わせください。

──────────────────────
LUA BLANCA CONNECT
AI活用アドバイザー 福田美佐子
──────────────────────`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Google Analytics イベント追跡
        trackContactForm()
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        throw new Error('送信に失敗しました')
      }
    } catch (error) {
      console.error('フォーム送信エラー:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitStatus === 'success') {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#E0F2F1'}}>
            <CheckCircle className="w-10 h-10" style={{color: '#5BBCB6'}} />
          </div>
          <h1 className="text-3xl font-bold mb-4" style={{color: '#2D5A5A'}}>送信完了</h1>
          <p className="text-lg text-gray-600 mb-8">
            お問い合わせいただき、ありがとうございます。
            <br />
            追って担当者よりご連絡いたします。
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors"
            style={{backgroundColor: '#5BBCB6'}}
          >
            戻る
          </button>
        </div>
      </div>
    )
  }

  if (submitStatus === 'error') {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">送信エラー</h1>
          <p className="text-lg text-gray-600 mb-8">
            申し訳ございません。送信中にエラーが発生しました。
            <br />
            しばらく時間をおいて再度お試しください。
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            戻る
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#2D5A5A'}}>
            お問い合わせ
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#2D5A5A', opacity: 0.8}}>
            あなたの会社の困りごとをAIで解決しませんか？<br />
            まずはお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* お問い合わせフォーム */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6" style={{color: '#2D5A5A'}}>お問い合わせフォーム</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="山田太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名・組織名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="株式会社〇〇"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    ご興味のあるサービス
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">選択してください</option>
                    <option value="ai-consulting">AI活用コンサルティング</option>
                    <option value="ai-marketing">AIマーケティング戦略</option>
                    <option value="producer-support">AI活用地方生産者支援</option>
                    <option value="ai-tools">生成AI・コーディングAI活用支援</option>
                    <option value="project-management">AIプロジェクト管理支援</option>
                    <option value="content-strategy">AI時代のコンテンツ戦略</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="ご相談内容、課題、ご質問など、お気軽にお書きください。具体的にお教えいただけると、より適切なご提案が可能です。"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  style={{backgroundColor: '#5BBCB6'}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      送信する
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* サイドバー */}
          <div className="space-y-8">

            {/* 対応サービス */}
            <div className="rounded-xl p-6" style={{backgroundColor: '#E0F2F1'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#2D5A5A'}}>対応サービス</h3>
              <ul className="space-y-2 text-sm" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>• AI活用コンサルティング</li>
                <li>• AIマーケティング戦略</li>
                <li>• AI活用地方生産者支援</li>
                <li>• 生成AI・コーディングAI活用支援</li>
                <li>• AIプロジェクト管理支援</li>
                <li>• AI時代のコンテンツ戦略</li>
              </ul>
            </div>
          </div>
        </div>

        {/* よくある質問 */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#2D5A5A'}}>よくある質問</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3" style={{color: '#2D5A5A'}}>相談は無料ですか？</h3>
              <p className="text-gray-600">
                はい、初回相談は無料です。お客様の課題をお聞きし、最適なソリューションをご提案いたします。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3" style={{color: '#2D5A5A'}}>どのような規模の企業に対応していますか？</h3>
              <p className="text-gray-600">
                スタートアップから大企業まで、様々な規模の企業様にご対応しています。規模に応じた最適なプランをご提案します。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3" style={{color: '#2D5A5A'}}>オンラインでの対応は可能ですか？</h3>
              <p className="text-gray-600">
                はい、全国どこからでもオンラインでご相談いただけます。Zoom、Teams等のツールに対応しています。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3" style={{color: '#2D5A5A'}}>プロジェクトの期間はどの程度ですか？</h3>
              <p className="text-gray-600">
                プロジェクトの内容により異なりますが、1ヶ月〜1年程度が一般的です。詳細はご相談時にお伝えいたします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}