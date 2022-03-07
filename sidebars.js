/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	docs: [
		{
			type: 'category',
			label: 'Getting started',
			items: ['introduction/installation', 'introduction/typescript', 'introduction/migration'],
		},
		{
			type: 'category',
			label: 'Guides',
			items: ['guides/create-first-sb', 'guides/introducing-components'],
		},
	],
}

module.exports = sidebars
