const fs = require('fs')
const https = require('https')
const http = require('http')

// デフォルトOG画像をダウンロードして保存
const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    
    const file = fs.createWriteStream(dest)
    
    client.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`))
        return
      }
      
      response.pipe(file)
      
      file.on('finish', () => {
        file.close()
        resolve()
      })
      
      file.on('error', (err) => {
        fs.unlink(dest, () => {}) // ファイル削除
        reject(err)
      })
    }).on('error', (err) => {
      reject(err)
    })
  })
}

async function generateDefaultOG() {
  try {
    console.log('デフォルトOG画像を生成中...')
    
    // 開発サーバーからデフォルト画像を取得
    const url = 'http://localhost:3000/api/default-og'
    const dest = './public/default-og-image.png'
    
    await downloadImage(url, dest)
    console.log('デフォルトOG画像を保存しました:', dest)
    
  } catch (error) {
    console.error('エラー:', error.message)
  }
}

generateDefaultOG()