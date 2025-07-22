'use client'

import React from 'react'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n')
    const elements: React.ReactNode[] = []
    let currentParagraph: string[] = []
    let listItems: string[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    let codeBlockLanguage = ''

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join('\n')
        elements.push(
          <p key={elements.length} className="mb-6 leading-relaxed text-base" 
             style={{color: '#2D5A5A', opacity: 0.9, lineHeight: '1.8'}}>
            {parseInlineMarkdown(paragraphText)}
          </p>
        )
        currentParagraph = []
      }
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc ml-6 mb-6 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="leading-relaxed" 
                  style={{color: '#2D5A5A', opacity: 0.9}}>
                {parseInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        )
        listItems = []
      }
    }

    const flushCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        elements.push(
          <pre key={elements.length} className="bg-gray-100 p-6 rounded-lg overflow-x-auto mb-6 border" 
               style={{backgroundColor: '#F8F9FA', borderColor: '#E1E5E9'}}>
            <code className="text-sm font-mono" style={{color: '#2D5A5A'}}>
              {codeBlockContent.join('\n')}
            </code>
          </pre>
        )
        codeBlockContent = []
        codeBlockLanguage = ''
      }
    }

    lines.forEach((line, index) => {
      // コードブロック処理
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock()
          inCodeBlock = false
        } else {
          flushParagraph()
          flushList()
          inCodeBlock = true
          codeBlockLanguage = line.substring(3)
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      // 水平線処理
      if (line.trim() === '---' || line.trim() === '***') {
        flushParagraph()
        flushList()
        elements.push(
          <hr key={elements.length} className="my-8 border-0 h-px" 
              style={{backgroundColor: '#A8D5D0'}} />
        )
        return
      }

      // 見出し処理
      if (line.startsWith('# ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h1 key={elements.length} className="text-4xl font-bold mt-12 mb-6 pb-3 border-b-2" 
              style={{color: '#2D5A5A', borderColor: '#5BBCB6'}}>
            {parseInlineMarkdown(line.substring(2))}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h2 key={elements.length} className="text-3xl font-bold mt-10 mb-5 pb-2 border-b" 
              style={{color: '#2D5A5A', borderColor: '#A8D5D0'}}>
            {parseInlineMarkdown(line.substring(3))}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h3 key={elements.length} className="text-2xl font-bold mt-8 mb-4" 
              style={{color: '#2D5A5A'}}>
            {parseInlineMarkdown(line.substring(4))}
          </h3>
        )
      } else if (line.startsWith('#### ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h4 key={elements.length} className="text-xl font-bold mt-6 mb-3" 
              style={{color: '#2D5A5A'}}>
            {parseInlineMarkdown(line.substring(5))}
          </h4>
        )
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        flushParagraph()
        listItems.push(line.substring(2))
      } else if (line.trim() === '') {
        flushParagraph()
        flushList()
        // 空行の場合、段落区切りとして扱う
      } else {
        flushList()
        // 通常のテキスト行を段落として追加
        currentParagraph.push(line)
        // 各行を個別の段落として扱う（改行を保持）
        flushParagraph()
      }
    })

    // 残りの要素をフラッシュ
    flushParagraph()
    flushList()
    flushCodeBlock()

    return elements
  }

  const parseInlineMarkdown = (text: string): React.ReactNode => {
    // **bold** を処理
    const parts = text.split(/(\*\*.*?\*\*)/g)
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold" 
                  style={{color: '#2D5A5A', fontWeight: '700'}}>
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="markdown-content">
      {parseMarkdown(content)}
    </div>
  )
}