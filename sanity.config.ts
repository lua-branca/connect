import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ルーアブランカ Blog',
  
  projectId: 'q4miavp3',
  dataset: 'production',
  
  plugins: [deskTool(), visionTool(), colorInput(), codeInput()],
  
  schema: {
    types: schemaTypes,
  },
})