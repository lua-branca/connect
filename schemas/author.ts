import { defineField, defineType } from 'sanity'

export const author = defineType({
  name: 'author',
  title: '著者',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名前',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'プロフィール画像',
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
      name: 'bio',
      title: '自己紹介',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'title',
      title: '肩書き',
      type: 'string',
      description: 'Web Developer & Tech Enthusiast など',
    }),
    defineField({
      name: 'location',
      title: '拠点',
      type: 'string',
      description: '東京, 日本 など',
    }),
    defineField({
      name: 'website',
      title: 'ウェブサイト',
      type: 'url',
    }),
    defineField({
      name: 'skills',
      title: 'スキル',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'カテゴリ',
              type: 'string',
            },
            {
              name: 'items',
              title: 'スキル項目',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'experience',
      title: '職歴・経験',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'company',
              title: '会社名',
              type: 'string',
            },
            {
              name: 'position',
              title: '役職・ポジション',
              type: 'string',
            },
            {
              name: 'period',
              title: '期間',
              type: 'string',
              description: '例: 2020年4月 - 2023年3月',
            },
            {
              name: 'description',
              title: '業務内容',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'services',
      title: '提供サービス',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'サービス名',
              type: 'string',
            },
            {
              name: 'description',
              title: '説明',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'アイコン',
              type: 'string',
              description: 'Lucideアイコン名（例: Code, Brain, Users）',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'achievements',
      title: '実績・成果',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: '実績タイトル',
              type: 'string',
            },
            {
              name: 'description',
              title: '詳細',
              type: 'text',
              rows: 2,
            },
            {
              name: 'year',
              title: '年',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'social',
      title: 'SNS',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'note',
          title: 'note',
          type: 'url',
        },
        {
          name: 'zenn',
          title: 'Zenn',
          type: 'url',
        },
        {
          name: 'qiita',
          title: 'Qiita',
          type: 'url',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})