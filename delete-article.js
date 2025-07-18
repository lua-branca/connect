import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'q4miavp3',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

async function deleteArticle() {
  try {
    console.log('穴八幡宮の記事を削除中...')
    
    const result = await client.delete('fb1aff98-21a3-49aa-856d-17582a57b5ab')
    
    console.log('記事削除完了:', result)
    console.log('削除された記事ID: fb1aff98-21a3-49aa-856d-17582a57b5ab')
    
  } catch (error) {
    console.error('記事削除エラー:', error)
  }
}

deleteArticle()