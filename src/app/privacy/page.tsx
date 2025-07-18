import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | LUA BLANCA CONNECT',
  description: 'LUA BLANCA CONNECTのプライバシーポリシーについて説明します。',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
            プライバシーポリシー
          </h1>
          <p className="text-lg" style={{color: '#2D5A5A', opacity: 0.8}}>
            LUA BLANCA CONNECTでは、お客様の個人情報の保護に努めております。
          </p>
        </div>

        {/* コンテンツ */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                1. 個人情報の収集について
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                当サイトでは、以下の場合に個人情報を収集させていただきます：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>お問い合わせフォームのご利用時</li>
                <li>サービスへのお申し込み時</li>
                <li>メールマガジンの配信登録時</li>
                <li>その他、当社サービスのご利用時</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                2. 収集する個人情報の種類
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                以下の情報を収集させていただく場合があります：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>氏名・会社名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>住所</li>
                <li>お問い合わせ内容</li>
                <li>その他、サービス提供に必要な情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                3. 個人情報の利用目的
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>お問い合わせへの回答</li>
                <li>サービスの提供・運営</li>
                <li>契約の締結・履行</li>
                <li>アフターサービスの提供</li>
                <li>新サービスの案内</li>
                <li>統計データの作成（個人を特定できない形で）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                4. 個人情報の第三者提供
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                5. 個人情報の保護措置
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、個人情報の漏洩、滅失、毀損を防止するために、適切な安全管理措置を講じています。
                また、個人情報を取り扱う従業員に対して、適切な監督を行っています。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                6. Cookieの使用について
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当サイトでは、より良いサービスの提供のため、Cookieを使用することがあります。
                Cookieは、お客様のブラウザに保存される小さなテキストファイルです。
                お客様は、ブラウザの設定でCookieを無効にすることができます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                7. 個人情報の開示・訂正・削除
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                お客様は、当社が保有する個人情報の開示、訂正、削除を求めることができます。
                ご希望の場合は、お問い合わせフォームよりご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                8. プライバシーポリシーの変更
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                変更した場合は、当サイトにおいて告知いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                9. お問い合わせ窓口
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold" style={{color: '#2D5A5A'}}>LUA BLANCA CONNECT</p>
                <p style={{color: '#2D5A5A', opacity: 0.8}}>お問い合わせフォーム: <a href="/contact" className="hover:underline" style={{color: '#5BBCB6'}}>/contact</a></p>
              </div>
            </section>

            <section>
              <p className="text-sm text-right mt-8" style={{color: '#2D5A5A', opacity: 0.6}}>
                最終更新日：2024年7月18日
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}