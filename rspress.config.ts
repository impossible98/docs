// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Docs',
  description: 'About Docs',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  markdown: {
    checkDeadLinks: true,
    showLineNumbers: true,
  },
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
    footer: {
      message:
        '<p>Copyright © 2020-${new Date().getFullYear()} My Project, Inc. Built with Rspress</p>',
    },
    hideNavbar: 'auto',
    enableScrollToTop: true,
    sidebar: {
      '/': [
        {
          text: 'INTRODUCTION',
          link: '/index',
        },
        {
          text: 'cloudflared',
          link: '/cloudflared',
        },
        {
          text: 'onlyoffice',
          link: '/onlyoffice',
        },
        {
          text: 'plex',
          link: '/plex',
        },
        {
          text: 'watchtower',
          link: '/watchtower',
        },
      ],
    },
  },
});
