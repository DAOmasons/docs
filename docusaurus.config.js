// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DAO Masons - Governance docs',
  tagline: 'Helping DAOs Win',
  url: 'https://www.daomasons.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dm-ico.ico',
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ["docusaurus-plugin-less", [require.resolve('docusaurus-lunr-search'), {
    indexBaseUrl: true
  }]],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // q: why is it configured this way?
          // a: we originally tried to use "docs only mode" by setting the `routeBasePath` to `/`, but this prevents the landing page from displaying the`/gentle-intro-dao-governance` slug, which is important for SEO.
          //    this doc elaborates: https://docusaurus.io/docs/docs-introduction#docs-only-mode
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DAOmasons/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.less'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DAO Masons - Governance docs',
        logo: {
          alt: 'DAO Masons',
          src: 'img/dm-logo.svg',
          href: '/gentle-intro-dao-governance',
        },
        items: [
          {
            href: 'https://github.com/DAOMasons/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/gentle-intro-dao-governance',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/FydbKxFnyU',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/daomasons',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DAO Masons.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "banner",
        content: `DAO Masons is officially open for business! <a rel="noopener noreferrer" href='https://www.daomasons.com/#services/'>Schedule a free consulation.</a>`,
        backgroundColor: 'rgb(8 53 117)',
        textColor: 'white',
        isCloseable: false,
      },
    }),
  // scripts: [
  //   // Fathom Analytics
  //   {
  //     src: 'https://thirty-thirtyfour.daomasons.foundation/script.js',
  //     'data-site': 'QLNDABBR',
  //     defer: true,
  //   },
  // ],
};

module.exports = config;
