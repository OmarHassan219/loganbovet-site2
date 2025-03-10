export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      sitemap: 'https://logan-bovet.com/sitemap.xml',
    }
  }