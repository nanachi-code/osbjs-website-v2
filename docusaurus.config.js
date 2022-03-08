// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/vsDark')
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'osbjs - A minimalist component-based osu! storboarding framework',
	tagline: 'A minimalist component-based osu! storboarding framework',
	url: 'https://osbjs.vercel.app',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'osbjs', // Usually your GitHub org/user name.
	projectName: 'osbjs-website-v2', // Usually your repo name.
	staticDirectories: ['static'],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					remarkPlugins: [[npm2yarn, { sync: true }]],
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'osbjs',
				logo: {
					alt: 'osbjs',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'introduction/installation',
						position: 'left',
						label: 'Documentation',
					},
					{
						to: '/showcase',
						label: 'Showcase',
						position: 'left',
					},
					{
						className: 'header-github-link',
						href: 'https://github.com/osbjs/osbjs',
						'aria-label': 'GitHub repository',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				copyright: `Copyright © ${new Date().getFullYear()} Nanachi.`,
			},
			prism: {
				theme: darkCodeTheme,
			},
		}),
}

module.exports = config
