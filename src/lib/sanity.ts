import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Add your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: true, // Enable CDN for faster response times
})

// Image URL builder
const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => {
  return builder.image(source)
}

// Helper function to get image dimensions
export const getImageDimensions = (image: { asset?: { _ref?: string } }) => {
  if (!image?.asset?._ref) return { width: 0, height: 0 }
  
  const dimensions = image.asset._ref.split('-')[2]
  const [width, height] = dimensions.split('x').map(Number)
  
  return { width, height }
}