import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | LUA BLANCA CONNECT',
  description: 'LUA BLANCA CONNECTサービスの利用規約について説明します。',
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#2D5A5A'}}>
            利用規約
          </h1>
          <p className="text-lg" style={{color: '#2D5A5A', opacity: 0.8}}>
            LUA BLANCA CONNECTのサービスをご利用いただく際の規約です。
          </p>
        </div>

        {/* コンテンツ */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第1条（適用）
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                本規約は、LUA BLANCA CONNECT（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
                本サービスをご利用いただく際は、本規約に同意いただいたものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第2条（利用登録）
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                本サービスの利用を希望する方は、当社の定める方法により申し込みを行うものとします。
                利用登録は、当社が申し込みを承諾した時点で完了するものとします。
              </p>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、以下の場合には利用登録の申し込みを承諾しないことがあります：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>申し込みに際して虚偽の事項を届け出た場合</li>
                <li>本規約に違反したことがある者からの申し込みの場合</li>
                <li>その他、当社が不適切と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第3条（禁止事項）
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第4条（本サービスの提供の停止等）
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第5条（利用制限および登録抹消）
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、以下の場合には、事前の通知なく、ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします：
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>料金等の支払債務の不履行があった場合</li>
                <li>当社からの連絡に対し、一定期間返答がない場合</li>
                <li>本サービスについて、最後の利用から一定期間利用がない場合</li>
                <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第6条（保証の否認および免責事項）
              </h2>
              <p className="mb-4" style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </p>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
                ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第7条（サービス内容の変更等）
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第8条（利用規約の変更）
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第9条（個人情報の取扱い）
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                当社は、本サービスの利用によって取得する個人情報については、当社の「プライバシーポリシー」に従い適切に取り扱うものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第10条（通知または連絡）
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
                当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第11条（権利義務の譲渡の禁止）
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{color: '#2D5A5A'}}>
                第12条（準拠法・裁判管轄）
              </h2>
              <p style={{color: '#2D5A5A', opacity: 0.8}}>
                本規約の解釈にあたっては、日本法を準拠法とします。
                本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </section>

            <section>
              <p className="text-sm text-right mt-8" style={{color: '#2D5A5A', opacity: 0.6}}>
                制定日：2024年7月18日
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}