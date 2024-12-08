import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AnkeCore.xyz Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/ankecore-logo.png',

  // Set the production url of your site here
  url: 'https://docs.ankecore.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'AnkeCore', 
  projectName: 'AnkeDocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/AnkeCore/AnkeDocs/edit/main/',
          showLastUpdateTime: true, 
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AnkeCore.xyz Docs',
      logo: {
        alt: 'AnkeCore.xyz Logo',
        src: 'img/ankecore-logo.png',
      },
      items: [
        {
          href: 'https://ankecore.xyz',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://github.com/AnkeCore/AnkeDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} AnkeCore.xyz Docs`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark', 
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

  } satisfies Preset.ThemeConfig,

  titleDelimiter: '🤖',
};

export default config;
