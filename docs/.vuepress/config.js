module.exports = {
    // 网站 Title
      title: 'cwb 的博客 ｜ cwb Blog',
      
      // 网站描述
      description: '个人博客',
      base: '/vuepressBlog/',
      
      // 网站 favicon 图标设置等
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
      evergreen: true,

      plugins: [
        ['@vuepress/google-analytics', {
          ga: 'UA-165839722-1',
        }],
      ],
      
      // 使用的主题
      theme: 'melodydl',
      
      // 主题配置
      themeConfig: {
        title: '个人博客',
        
    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
    // 名称
      name: '蔡文铂',
      
      // 头像 public文件夹下
      avatar: '/avatar-top.jpeg',
      
      // 头部背景图
      headerBackgroundImg: '/avatar-bg.jpeg',
      
      // 个人简介 (支持 HTML)
      description: 'In me the tiger sniffs the rose<br/>心有猛虎，细嗅蔷薇',
      
       // 电子邮箱
      email: 'cwb666a@163.com',
      
      // 所在地
      location: '重庆'
    },
    // 顶部导航栏内容
    nav: [ 
      {text: '主页', link: '/' },
      {text: '关于我',link: '/about/'},
      {text: '前端知识', link: '/tags/'}      
    ],
    
    // 首页头部标题背景图设置，图片直接放在 public 文件夹下
    header: {
      home: {
        title: '博客', 
        subtitle: '好好生活，慢慢相遇', 
        headerImage: '/home-bg.jpeg'
      },
      
      // tag页面头部标题背景图设置，图片直接放在 public 文件夹下
      tags: {
        title: '前端基础', 
        subtitle: '遇见你花光了我所有的运气', 
        headerImage: '/tags-bg.jpeg'
      },
      
      // 文章详情头部背景图
      postHeaderImg: '/about-bg.jpg',
    },
    
    // 底部 footer 的相关设置 
    footer: {
      // gitbutton  配置
      gitbtn: {
        // 仓库地址
        repository: "https://github.com/cccwbbb/fantastic-cw.github.io",
        frameborder: 0,
        scrolling: 0,
        width: "80px",
        height: "20px"
      },
      
      // 添加自定义 footer
      custom: `Copyright &copy; Top Blog 2020 <br /> 
        Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
        | <a href="https://www.github.com/youdeliang/" target="_blank">youdeliang</a>`
    },
    
    // 分页配置
    pagination: {
      // 每页文章数量
      perPage: 5,
    },
    
    // vssue 评论配置, 如果不需要，可以设置 comments: false
    comments: {    
      owner: 'youdeliang',
      repo: 'vuepress-theme-melodydl',
      clientId: 'dfba8ecad544784fec1f',
      clientSecret: '1358ac11bc8face24f598601991083e27372988d',
      autoCreateIssue: false,
    },
  }
}