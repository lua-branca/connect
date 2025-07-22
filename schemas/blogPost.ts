import { defineField, defineType } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'ブログ記事',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: '著者',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
      initialValue: () => ({
        _type: 'reference',
        _ref: '38edee4d-ffe3-45a5-9b02-ab8a4755c862' // 福田美佐子のID
      }),
    }),
    defineField({
      name: 'mainImage',
      title: 'メイン画像',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'カテゴリー',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'tags',
      title: 'タグ',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: '公開日',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '抜粋',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'body',
      title: '本文',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'markdownContent',
      title: 'マークダウン本文',
      type: 'text',
      rows: 30,
      description: 'マークダウン形式で記事を入力'
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEOタイトル',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'description',
          title: 'SEO説明',
          type: 'text',
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'keywords',
          title: 'キーワード',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'キーワードを手動で入力してください。AI活用、プログラミング、ビジネス、技術、体験記など'
        },
        {
          name: 'ogImage',
          title: 'OG画像',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
})