import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ルーアブランカ Blog',
  
  projectId: '1nyzygfo',
  dataset: 'production',
  
  plugins: [
    deskTool(), 
    visionTool(), 
    colorInput(), 
    codeInput()
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  document: {
    productionUrl: async (prev, { document }) => {
      if (document._type === 'blogPost' && (document as any).slug?.current) {
        return `http://localhost:3000/updates/${(document as any).slug.current}`
      }
      return prev
    }
  }
})