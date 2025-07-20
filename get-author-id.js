import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: '1nyzygfo',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

async function getAuthorId() {
  try {
    const query = `*[_type == "author" && name == "福田 美佐子"][0]._id`
    const authorId = await client.fetch(query)
    
    if (authorId) {
      console.log('福田美佐子の著者ID:', authorId)
      return authorId
    } else {
      console.log('福田美佐子の著者が見つかりません')
      return null
    }
  } catch (error) {
    console.error('著者ID取得エラー:', error)
    return null
  }
}

getAuthorId()