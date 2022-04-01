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
		{
			type: 'category',
			label: 'API',
			items: [
				{
					type: 'category',
					label: 'Core',
					items: [
						'api/core/storyboard',
						'api/core/diff-storyboard',
						'api/core/component',
						'api/core/sprite',
						'api/core/animation',
						'api/core/scene',
						'api/core/sample',
						'api/core/expressions',
						'api/core/utils',
						'api/core/enums',
					],
				},
				{
					type: 'category',
					label: 'Beatmap',
					items: ['api/beatmap/index', 'api/beatmap/hitobjects', 'api/beatmap/enums'],
				},
				{
					type: 'category',
					label: 'Pre-built components',
					items: [
						'api/components/bg',
						'api/components/hitobjecthighlight',
						'api/components/importosb',
						'api/components/lyrics',
						'api/components/removebg',
						'api/components/particles',
					],
				},
				'api/cli/index',
				'api/txtgen/index',
				{
					type: 'category',
					label: 'Math',
					items: [
						'api/math/helper',
						'api/math/easing',
						'api/math/random',
						'api/math/matrix3',
						'api/math/matrix4',
						'api/math/vector2',
						'api/math/vector3',
						'api/math/vector4',
						'api/math/quaternion',
					],
				},
			],
		},
	],
}

module.exports = sidebars
