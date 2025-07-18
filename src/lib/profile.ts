import { client } from './sanity'
import { Author } from '@/types'

// プロフィール情報を取得
export async function getProfile(): Promise<Author | null> {
  const query = `
    *[_type == "author" && slug.current == "lua-branca"][0] {
      _id,
      name,
      title,
      bio,
      location,
      website,
      image {
        asset->{
          _id,
          url
        },
        alt
      },
      skills[] {
        category,
        items
      },
      experience[] {
        company,
        position,
        period,
        description
      },
      services[] {
        title,
        description,
        icon
      },
      achievements[] {
        title,
        description,
        year
      },
      social {
        twitter,
        instagram,
        youtube,
        github
      }
    }
  `
  
  return await client.fetch(query)
}