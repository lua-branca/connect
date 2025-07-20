export default function AIExperienceArticle() {
  return (
    <div style={{color: '#2D5A5A'}}>
      
      <h2 className="text-3xl font-bold mb-4 mt-8">今回作ったもの</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>サイト名</strong>: LUA BLANCA CONNECT（まさに今ご覧いただいているこのサイトです！）</li>
        <li><strong>使った技術</strong>: Next.js（ウェブサイト作成の仕組み）、TypeScript（プログラミング言語）</li>
        <li><strong>かかった時間</strong>: 約3日間</li>
        <li><strong>サイトの内容</strong>: 会社紹介、サービス紹介、お問い合わせフォーム、更新情報</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-6">どんな風に作ったか</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>私</strong>: 「こんなサイトにしたい」というアイデアを伝える</li>
        <li><strong>AI（Claude Code）</strong>: 実際のプログラムを書いてくれる</li>
        <li><strong>結果</strong>: 想像以上にスムーズに完成！</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4 mt-8">AIと一緒にサイトを作った実体験</h2>

      <h3 className="text-2xl font-semibold mb-3 mt-6">1. お問い合わせフォーム作成（2時間）</h3>
      
      <p className="mb-4"><strong>やりたかったこと</strong>: 「お問い合わせフォームを作って、メールが自動で送られるようにしたい」</p>
      
      <p className="mb-2 font-semibold">私がやったこと:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>「お問い合わせフォームを作ってください」とAIにお願い</li>
        <li>「自動返信メールも設定したい」と追加要望</li>
      </ul>

      <p className="mb-2 font-semibold">AIがやってくれたこと:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>フォームのデザインと機能を全部作成</li>
        <li>スマートフォン表示にも自動対応</li>
        <li>エラーが出た時の処理も含めて完璧に実装</li>
      </ul>

      <p className="mb-2 font-semibold">つまずいたポイント:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>自動返信メールの設定が思うようにいかない</li>
        <li>→最終的に外部サービス（Formspree）の管理画面で設定が必要と判明</li>
      </ul>

      <p className="mb-6 font-semibold text-lg" style={{color: '#5BBCB6'}}>すごいと思ったこと: 普通なら1日かかる作業が2時間で完成！</p>

      <h3 className="text-2xl font-semibold mb-3 mt-6">2. サイトの色合いとデザイン調整（1日）</h3>
      
      <p className="mb-4"><strong>やりたかったこと</strong>: 「会社のイメージに合う、落ち着いた色合いにしたい」</p>
      
      <p className="mb-2 font-semibold">私がやったこと:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>「もう少し緑っぽく、でも優しい感じで」などの感覚的な要求</li>
      </ul>

      <p className="mb-2 font-semibold">AIがやってくれたこと:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>4つの色を組み合わせた統一感のあるデザイン</li>
        <li>サイト全体で一貫した色使い</li>
        <li>文字の読みやすさも自動で調整</li>
      </ul>

      <p className="mb-6 font-semibold text-lg" style={{color: '#5BBCB6'}}>感動したポイント: 曖昧な要求でも、プロっぽいデザインに仕上げてくれた！</p>

      <h3 className="text-2xl font-semibold mb-3 mt-6">3. ページ構成の大幅変更（半日）</h3>
      
      <p className="mb-4"><strong>やりたかったこと</strong>: 「ブログページを『更新情報』に変更したい」</p>
      
      <p className="mb-4"><strong>普通だったら</strong>: 全部のファイルを手作業で変更する大作業</p>

      <p className="mb-2 font-semibold">AIと一緒だと:</p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>「ブログを更新情報に変更して」と一言</li>
        <li>関連する全てのファイルを自動で発見・修正</li>
        <li>リンク切れも発生せず完璧に変更完了</li>
      </ul>

      <p className="mb-6 font-semibold text-lg" style={{color: '#5BBCB6'}}>驚いたこと: 見落としがちな細かい箇所まで全部対応してくれた</p>

      <h2 className="text-3xl font-bold mb-4 mt-8">時間とコストがこんなに変わった！</h2>

      <h3 className="text-2xl font-semibold mb-3 mt-6">かかった時間の比較</h3>
      
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left">作業内容</th>
              <th className="border border-gray-300 px-4 py-2 text-left">普通にやったら</th>
              <th className="border border-gray-300 px-4 py-2 text-left">AIと一緒だと</th>
              <th className="border border-gray-300 px-4 py-2 text-left">短縮効果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">お問い合わせフォーム</td>
              <td className="border border-gray-300 px-4 py-2">1日</td>
              <td className="border border-gray-300 px-4 py-2">2時間</td>
              <td className="border border-gray-300 px-4 py-2 font-bold" style={{color: '#5BBCB6'}}>6倍速い！</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">デザイン調整</td>
              <td className="border border-gray-300 px-4 py-2">2-3日</td>
              <td className="border border-gray-300 px-4 py-2">1日</td>
              <td className="border border-gray-300 px-4 py-2 font-bold" style={{color: '#5BBCB6'}}>2-3倍速い！</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">ページ構成変更</td>
              <td className="border border-gray-300 px-4 py-2">1-2日</td>
              <td className="border border-gray-300 px-4 py-2">半日</td>
              <td className="border border-gray-300 px-4 py-2 font-bold" style={{color: '#5BBCB6'}}>2-4倍速い！</td>
            </tr>
            <tr className="bg-gray-50 font-bold">
              <td className="border border-gray-300 px-4 py-2">合計</td>
              <td className="border border-gray-300 px-4 py-2">1-2週間</td>
              <td className="border border-gray-300 px-4 py-2">3日間</td>
              <td className="border border-gray-300 px-4 py-2" style={{color: '#5BBCB6'}}>約5倍速い！</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold mb-3 mt-6">かかったお金</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 rounded-lg" style={{backgroundColor: '#FFF4E6'}}>
          <h4 className="font-bold mb-3 text-lg">プログラマーに依頼した場合:</h4>
          <ul className="space-y-2">
            <li>期間: 1-2週間</li>
            <li>費用: 15-30万円程度</li>
          </ul>
        </div>
        <div className="p-6 rounded-lg" style={{backgroundColor: '#E0F2F1'}}>
          <h4 className="font-bold mb-3 text-lg">AIと一緒に作った場合:</h4>
          <ul className="space-y-2">
            <li>期間: 3日間</li>
            <li>費用: Claude Pro月額費用のみ（約3,000円）</li>
            <li className="font-bold" style={{color: '#5BBCB6'}}>節約効果: 10-20万円以上！</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-8">AIプログラミングの良いところ・大変なところ</h2>

      <h3 className="text-2xl font-semibold mb-3 mt-6">良いところ 😊</h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-bold mb-2">1. とにかく速い！</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>思いついたアイデアがすぐ形になる</li>
            <li>「こんな感じで」と言うだけで実装してくれる</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">2. 品質が高い</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>プロが書くような綺麗なコードができる</li>
            <li>エラー対策も自動で含めてくれる</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">3. 勉強になる</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>AIが作ったコードを見て学べる</li>
            <li>新しい技術を知ることができる</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-3 mt-6">大変なところ 😅</h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-bold mb-2">1. 外部サービスとの連携は難しい</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>メール送信サービスの設定など、別途手作業が必要</li>
            <li>AIだけでは解決できない部分もある</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">2. 最終判断は人間が必要</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>「このデザインで良いか？」の判断</li>
            <li>ビジネス的な要件の整理</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">3. たまに理解が必要</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>エラーが出た時の原因調査</li>
            <li>どういう仕組みで動いているかの把握</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-8">「AIに興味があるけど...」という方へ</h2>

      <h3 className="text-2xl font-semibold mb-3 mt-6">こんな方におすすめ</h3>
      <ul className="list-none space-y-2 mb-6">
        <li>✅ ホームページを作りたいけど、業者に頼むと高い</li>
        <li>✅ プログラミングに興味があるけど、難しそう</li>
        <li>✅ AIを仕事で活用してみたい</li>
        <li>✅ 新しいことにチャレンジしたい</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-3 mt-6">始める前に知っておくと良いこと</h3>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>パソコンの基本操作ができれば大丈夫</li>
        <li>最初は簡単なものから始める</li>
        <li>完璧を求めすぎない</li>
        <li>AIも万能ではないことを理解する</li>
      </ul>

      <h2 className="text-3xl font-bold mb-4 mt-8">まとめ：AIは素晴らしい相棒</h2>

      <p className="mb-6 text-lg">この体験を通して分かったのは、<strong>AIは魔法ではないけれど、とても頼りになるパートナー</strong>だということです。</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-3" style={{color: '#5BBCB6'}}>AIが得意なこと</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>繰り返し作業の自動化</li>
            <li>技術的な実装</li>
            <li>一貫性のあるデザイン作成</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3" style={{color: '#5BBCB6'}}>人間が必要なこと</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>アイデアや方向性の決定</li>
            <li>最終的な品質チェック</li>
            <li>ビジネス戦略の判断</li>
          </ul>
        </div>
      </div>

      <div className="p-6 rounded-lg text-center" style={{backgroundColor: '#E0F2F1'}}>
        <p className="text-xl font-bold mb-4" style={{color: '#2D5A5A'}}>
          結論: AIと人間が協力することで、一人でも本格的なウェブサイトが作れる時代になりました！
        </p>
      </div>

      <hr className="my-8" style={{borderColor: '#A8D5D0'}} />

      <p className="text-center italic" style={{color: '#2D5A5A', opacity: 0.8}}>
        「AIでこんなことができるの？」などのご質問がありましたら、お気軽にお問い合わせください。
      </p>
    </div>
  )
}