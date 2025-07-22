declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Google Analytics にページビューを送信
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Google Analytics にイベントを送信
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// お問い合わせフォーム送信イベント
export const trackContactForm = () => {
  event({
    action: 'submit',
    category: 'Contact',
    label: 'Contact Form Submission',
  })
}

// ページ滞在時間の追跡
export const trackEngagement = (timeOnPage: number) => {
  event({
    action: 'engagement',
    category: 'User Engagement',
    label: 'Time on Page',
    value: timeOnPage,
  })
}

// サービスページの閲覧追跡
export const trackServiceView = (serviceName: string) => {
  event({
    action: 'view',
    category: 'Service',
    label: serviceName,
  })
}

// ブログ記事の閲覧追跡
export const trackBlogView = (articleTitle: string) => {
  event({
    action: 'view',
    category: 'Blog',
    label: articleTitle,
  })
}