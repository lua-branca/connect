const fs = require('fs')
const { createCanvas } = require('canvas')

function generateModernOG() {
  try {
    console.log('モダンなOG画像を生成中...')
    
    // キャンバス作成
    const canvas = createCanvas(1200, 630)
    const ctx = canvas.getContext('2d')

    // 背景色
    ctx.fillStyle = '#F8FFFE'
    ctx.fillRect(0, 0, 1200, 630)

    // 左上: ダークティールセクション
    ctx.fillStyle = '#2D5A5A'
    ctx.fillRect(0, 0, 400, 315)
    
    // 左上の円
    ctx.fillStyle = '#5BBCB6'
    ctx.beginPath()
    ctx.arc(200, 157, 75, 0, 2 * Math.PI)
    ctx.fill()

    // 右上: イエローセクション
    ctx.fillStyle = '#F6E96B'
    ctx.fillRect(400, 0, 800, 315)
    
    // 三角形
    ctx.fillStyle = '#2D5A5A'
    ctx.beginPath()
    ctx.moveTo(600, 100)
    ctx.lineTo(540, 220)
    ctx.lineTo(660, 220)
    ctx.closePath()
    ctx.fill()
    
    // 四角形（回転）
    ctx.save()
    ctx.translate(800, 157)
    ctx.rotate(Math.PI / 4)
    ctx.fillStyle = '#5BBCB6'
    ctx.fillRect(-40, -40, 80, 80)
    ctx.restore()
    
    // 半円
    ctx.fillStyle = '#A8D5D0'
    ctx.beginPath()
    ctx.arc(1000, 200, 50, Math.PI, 0)
    ctx.fill()

    // 下部左: ライトティールセクション
    ctx.fillStyle = '#A8D5D0'
    ctx.fillRect(0, 315, 600, 315)
    
    // 大きな円
    ctx.fillStyle = '#5BBCB6'
    ctx.beginPath()
    ctx.arc(200, 472, 60, 0, 2 * Math.PI)
    ctx.fill()
    
    // プラス記号
    ctx.fillStyle = '#2D5A5A'
    ctx.fillRect(370, 468, 60, 8)
    ctx.fillRect(396, 442, 8, 60)

    // 下部右: ターコイズセクション
    ctx.fillStyle = '#5BBCB6'
    ctx.fillRect(600, 315, 600, 315)
    
    // ドットパターン
    ctx.fillStyle = '#F6E96B'
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        ctx.beginPath()
        ctx.arc(750 + i * 30, 420 + j * 30, 6, 0, 2 * Math.PI)
        ctx.fill()
      }
    }
    
    // 矢印
    ctx.fillStyle = '#2D5A5A'
    ctx.beginPath()
    ctx.moveTo(950, 442)
    ctx.lineTo(1030, 472)
    ctx.lineTo(950, 502)
    ctx.closePath()
    ctx.fill()
    
    // 小さな円
    ctx.fillStyle = '#A8D5D0'
    ctx.beginPath()
    ctx.arc(1100, 472, 30, 0, 2 * Math.PI)
    ctx.fill()

    // 中央のアクセント
    ctx.fillStyle = 'rgba(224, 242, 241, 0.9)'
    ctx.fillRect(450, 200, 300, 230)
    
    // 中央の三角形
    ctx.fillStyle = '#F6E96B'
    ctx.beginPath()
    ctx.moveTo(600, 280)
    ctx.lineTo(550, 360)
    ctx.lineTo(650, 360)
    ctx.closePath()
    ctx.fill()

    // 画像保存
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./public/modern-og-image.png', buffer)
    console.log('モダンなOG画像を保存しました: ./public/modern-og-image.png')
    
  } catch (error) {
    console.error('エラー:', error.message)
    console.log('canvasパッケージがインストールされていない可能性があります。')
    console.log('npm install canvas でインストールしてください。')
  }
}

generateModernOG()