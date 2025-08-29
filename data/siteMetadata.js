/**
 * @type {import("pliny/config").PlinyConfig }
 * 这是一个 JSDoc 类型提示，它告诉 VS Code 等编辑器这个对象的结构是怎样的，
 * 从而在你编写代码时提供智能的自动补全功能。
 */
const siteMetadata = {
  // ===================================================================================
  //                                基础信息配置
  // ===================================================================================

  // 网站标题，会显示在浏览器标签页和搜索结果中
  title: '小金刚的博客',
  // 你的名字或昵称
  author: '小金刚',
  // 显示在网站顶部的导航栏标题
  headerTitle: '小金刚的博客',
  // 网站的简短描述，对 SEO 非常重要
  description: '欢迎来到我的博客，这里记录学习与思考。',
  // 网站的主要语言。'zh-CN' 代表简体中文
  language: 'zh-CN',
  // 网站的默认主题。可选值: 'system' (跟随系统), 'dark' (暗色模式), 'light' (亮色模式)
  theme: 'system',

  // ===================================================================================
  //                                URL 与仓库配置
  // ===================================================================================

  // 【重要】网站的公开访问 URL。请务必替换成你自己的域名
  siteUrl: 'https://blog.czwjss.top',
  // 你的博客所在的 GitHub 仓库地址
  siteRepo: 'https://github.com/czwjss/my-blog',

  // ===================================================================================
  //                           网站 Logo 与社交分享图配置
  // ===================================================================================

  // `${process.env.BASE_PATH || ''}` 是一个技巧，用于适配部署到 GitHub Pages 时的子目录路径
  // 显示在网站左上角的 Logo 图片路径
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  // 当你的博客链接被分享到社交媒体（如微信、Twitter）时显示的预览大图
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,

  // ===================================================================================
  //                              社交媒体链接配置
  // ===================================================================================

  // 在此处填写你的社交媒体链接，不填写的图标将不会在网站上显示
  email: 'czwjss68@qq.com',
  github: 'https://github.com/czwjss',
  x: 'https://twitter.com/x',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/',

  // ===================================================================================
  //                              本地化与导航配置
  // ===================================================================================

  // 地区代码，主要用于社交媒体分享时声明内容地区 (og:locale)
  locale: 'zh-CN',
  // 如果设置为 true，当页面向下滚动时，顶部导航栏会固定在屏幕顶端
  stickyNav: false,

  // ===================================================================================
  //                              网站分析工具配置
  // ===================================================================================

  analytics: {
    // 注意：如果你启用任何分析工具，必须将对应的脚本域名添加到 next.config.js 的 CSP (内容安全策略) 中。
    // 支持 Plausible, Simple Analytics, Umami, Posthog 或 Google Analytics。
    umamiAnalytics: {
      // 推荐使用环境变量来存储 Umami 的网站 ID，以避免将敏感信息提交到代码库。
      // 例如: '123e4567-e89b-12d3-a456-426614174000'
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
    /*
    // --- Plausible Analytics ---
    // 另一个广受欢迎的、注重隐私的、轻量级的开源分析工具。
    plausibleAnalytics: {
     // 在 Plausible 官网注册你的网站后获得的数据域，通常就是你的网站域名。
     // 例如: 'your-domain.com'
     plausibleDataDomain: '',
     // 如果你是自建 Plausible 服务，请在此处填入你自建服务的脚本地址。
     // 使用官方云服务则无需填写。
     // src: '', // 例如: 'https://plausible.my-domain.com/js/script.js'
    },
    */

    /*
    // --- Simple Analytics ---
    // 一个极其简单、干净、注重隐私的分析工具。
    // 通常通过环境变量进行配置，这里的空对象仅用于启用功能。
    simpleAnalytics: {},
    */

    /*
    // --- PostHog Analytics ---
    // 一个功能强大的“产品分析”平台，远不止网站流量统计，还包括用户行为追踪、A/B测试等。
    posthogAnalytics: {
      // 在 PostHog 平台上创建项目后获得的公开 API Key。
      // 例如: 'phc_xxxxxxxxxxxxxxxxxxxxxxxx'
      posthogProjectApiKey: '',
    },
    */

    /*
    // --- Google Analytics ---
    // 全球最主流、功能最全面的免费网站分析工具。
    googleAnalytics: {
      // 你的 Google Analytics 4 (GA4) 的衡量 ID (Measurement ID)。
      // 例如: 'G-XXXXXXX'
      googleAnalyticsId: '',
    },
    */
  },

  // ===================================================================================
  //                              邮件订阅功能配置
  // ===================================================================================

  newsletter: {
    // 支持 mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive 等服务。
    // 请根据你的选择，在 .env 文件中添加并修改对应的环境变量。
    provider: 'buttondown',
  },

  // ===================================================================================
  //                                评论系统配置
  // ===================================================================================

  comments: {
    // 注意：同样需要将评论系统的域名添加到 next.config.js 的 CSP 中。
    // 选择一个提供商，并使用与之关联的环境变量进行配置。
    // 支持的提供商: giscus, utterances, disqus
    provider: 'giscus',
    giscusConfig: {
      // 访问 giscus.app 网站，按照 'configuration' 部分的步骤获取你的配置信息。
      // 推荐使用环境变量来存储这些值，以保证安全。
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      // 评论与页面的映射方式，'pathname' 是最推荐的稳定选项
      mapping: 'pathname',
      // 是否启用 Emoji 反应: '1' 表示启用, '0' 表示禁用
      reactions: '1',
      // 是否向父窗口发送元数据: '1' 表示启用, '0' 表示禁用
      metadata: '0',
      // 亮色模式下的主题
      theme: 'light',
      // 暗色模式下的主题
      darkTheme: 'transparent_dark',
      // 如果上面的 theme 设置为 'custom'，请在这里提供你的自定义主题 CSS 文件链接。
      themeURL: '',
      // Giscus 小部件的显示语言
      lang: 'zh-CN',
    },
  },

  // ===================================================================================
  //                                搜索功能配置
  // ===================================================================================

  search: {
    // 可选 'kbar' (本地搜索) 或 'algolia' (第三方服务)
    provider: 'kbar',
    kbarConfig: {
      // 用于加载搜索数据的 JSON 文件路径。
      // 这个 search.json 文件会在构建时由脚本自动生成。
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    // },
  },
}

export default siteMetadata
