// 支持的语言
// 真正保存的时候：用户选择>浏览器默认>项目默认 （浏览器默认不属于我们支持语言的时候才使用项目默认）
// 为了保证顺序，使用数组[]代替对象{}
// {
//     fr: 'Français',
//     de: 'Deutsch',
//     en: 'English',
//     'zh-CN': '简体中文',
//     ru: 'Pусский',
//     po: 'Português',
//     es: 'Español',
//     kr: '한국어'
// }
export const supportLangs = [
  {
    text: 'English',
    locale: 'en'
  },
  {
    text: 'Pусский',
    locale: 'ru'
  },
  {
    text: 'Deutsch',
    locale: 'de'
  },
  {
    text: '简体中文',
    locale: 'zh-CN'
  },
  {
    text: 'Français',
    locale: 'fr'
  },
  {
    text: '한국어',
    locale: 'kr'
  },

  {
    text: 'Español',
    locale: 'es'
  },
  {
    text: 'Português',
    locale: 'po'
  }
]

export const telegram = 'https://t.me/WINk_org_official'
export const twitter = 'https://twitter.com/WINkorg'
export const whitePaper = lang => './pdf/whitepaper_' + lang + '.pdf'
export const roadmap = './pdf/WINk_Roadmap_2020.pdf'
export const trontrade = 'https://trontrade.io/'
