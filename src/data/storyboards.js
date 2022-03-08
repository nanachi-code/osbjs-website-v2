/**
 * @type {Storyboard[]}
 */
export const storyboards = [
	{
		thumbnail: '/img/thumbnails/pcedy-ayate.jpg',
		song: 'Phải Chăng Em Đã Yêu?',
		artist: 'Juky San feat. RedT',
		mapHost: {
			name: 'Ayate',
			link: 'https://osu.ppy.sh/users/18319978',
		},
		storyboarder: {
			name: 'Smug Nanachi',
			link: undefined,
		},
		mapLink: 'https://osu.ppy.sh/beatmapsets/1526749#osu/3123402',
		sourceCodeLink: 'https://github.com/nanachi-code/phai-chang-em-da-yeu',
	},
	{
		thumbnail: '/img/thumbnails/watch-blue-nagaraia.jpg',
		song: 'Watch blue',
		artist: 'culenasm',
		mapHost: {
			name: 'Nagaraia',
			link: 'https://osu.ppy.sh/users/13673790',
		},
		storyboarder: {
			name: 'Smug Nanachi',
			link: undefined,
		},
		mapLink: 'https://osu.ppy.sh/beatmapsets/1706965#osu/3487931',
		sourceCodeLink: 'https://github.com/nanachi-code/watch-blue',
	},
	{
		thumbnail: '/img/thumbnails/time-fluc-nagaraia.jpg',
		song: 'Time Fluctuation',
		artist: 'Itsue',
		mapHost: {
			name: 'Nagaraia',
			link: 'https://osu.ppy.sh/users/13673790',
		},
		storyboarder: {
			name: 'Smug Nanachi',
			link: undefined,
		},
		mapLink: 'https://osu.ppy.sh/beatmapsets/1636715#osu/3340270',
		sourceCodeLink: 'https://github.com/nanachi-code/time-fluctuation-sb',
	},
]

/**
 * @typedef Storyboard
 * @property {string?} thumbnail
 * @property {string} song
 * @property {string} artist
 * @property {OsuUser} mapHost
 * @property {OsuUser} storyboarder
 * @property {string} mapLink
 * @property {string?} sourceCodeLink
 */

/**
 * @typedef OsuUser
 * @property {string} name
 * @property {string?} link
 */
