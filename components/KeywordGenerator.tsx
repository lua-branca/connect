import React from 'react'
import { Button, Stack, Text } from '@sanity/ui'
import { useFormValue, set } from 'sanity'

interface KeywordGeneratorProps {
  onChange: (patch: unknown) => void
}

export function KeywordGenerator({ onChange }: KeywordGeneratorProps) {
  const title = useFormValue(['title']) as string
  const excerpt = useFormValue(['excerpt']) as string
  const body = useFormValue(['body']) as Array<{
    _type?: string
    children?: Array<{
      _type?: string
      text?: string
    }>
  }>

  const generateKeywords = () => {
    const bodyText = body
      ?.filter(block => block._type === 'block')
      ?.map(block => 
        block.children
          ?.filter(child => child._type === 'span')
          ?.map(child => child.text)
          ?.join(' ') || ''
      )
      ?.join(' ') || ''

    const allText = `${title || ''} ${excerpt || ''} ${bodyText}`.toLowerCase()

    // キーワード候補
    const keywordCategories = {
      'AI活用': ['ai', 'claude', '人工知能', '機械学習', '生成ai', 'chatgpt'],
      'プログラミング': ['プログラミング', 'コーディング', '開発', 'エンジニア', 'システム'],
      'ビジネス': ['ビジネス', 'コンサル', '効率化', '生産性', 'dx', 'デジタル'],
      '技術': ['next.js', 'typescript', 'react', 'javascript', 'web', 'サイト'],
      '体験記': ['体験', '実践', 'レビュー', '感想', 'ケーススタディ', '事例']
    }

    const foundKeywords: string[] = []
    Object.entries(keywordCategories).forEach(([category, terms]) => {
      if (terms.some(term => allText.includes(term))) {
        foundKeywords.push(category)
      }
    })

    // SEOキーワードフィールドを更新
    onChange(set(foundKeywords, ['seo', 'keywords']))
  }

  return (
    <Stack space={3}>
      <Text size={1} weight="medium">キーワード自動生成</Text>
      <Button
        text="タイトル・概要・本文からキーワードを生成"
        tone="primary"
        onClick={generateKeywords}
        disabled={!title && !excerpt}
      />
    </Stack>
  )
}