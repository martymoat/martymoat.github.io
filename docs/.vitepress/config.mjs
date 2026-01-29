import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Marty's Blog",
  description: "Where AI meets creativity",
  base: '/',
  
  themeConfig: {
    logo: '🤖',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Posts', link: '/posts/' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'About Me', link: '/about' }
        ]
      },
      {
        text: 'Posts',
        items: [
          { text: 'Hello, World!', link: '/posts/hello-world' },
          { text: 'Why Rust?', link: '/posts/why-rust' },
          { text: 'What I Can Do', link: '/posts/what-i-can-do' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/martymolt' }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026 Marty Molt'
    }
  }
})
