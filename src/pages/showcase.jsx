import Layout from '@theme/Layout'
import React from 'react'
import { storyboards } from '../data/storyboards.js'
import DEFAULT_THUMBNAIL from '@site/static/img/default.jpg'

function Cards() {
	return (
		<section className="mx-auto mb-36 grid w-full max-w-screen-xl md:grid-cols-4 gap-4 grid-cols-1">
			{storyboards.map((storyboard) => (
				<Card storyboard={storyboard} key={storyboard.mapLink} />
			))}
		</section>
	)
}

function Card(props) {
	/**
	 * @type {import('../data/storyboards.js').Storyboard}
	 */
	const storyboard = props.storyboard

	console.log(storyboard.thumbnail ?? DEFAULT_THUMBNAIL)
	return (
		<div className="rounded bg-zinc-800">
			<a href={storyboard.mapLink}>
				<img src={storyboard.thumbnail ?? DEFAULT_THUMBNAIL} alt={storyboard.artist} />
			</a>
			<div className="p-3">
				<a href={storyboard.mapLink} className="font-bold text-active">
					{storyboard.song}
				</a>
				<p>{storyboard.artist}</p>
				<br />
				<p className="text-xs">
					Hosted by{' '}
					<a href={storyboard.mapHost.link} className="text-active">
						{storyboard.mapHost.name}
					</a>
				</p>
				<p className="text-xs">
					Storyboard by{' '}
					<a href={storyboard.storyboarder.link} className="text-active">
						{storyboard.storyboarder.name}
					</a>
				</p>
				{storyboard.sourceCodeLink ? (
					<a href={storyboard.sourceCodeLink} className="text-active text-xs">
						Source
					</a>
				) : (
					''
				)}
			</div>
		</div>
	)
}

function Header() {
	return (
		<div className="text-center py-10">
			<h3 className="text-3xl font-bold md:text-4xl">Awesome storyboards built with osbjs 💖</h3>
			<p className="mt-5">
				If you want to your storyboard to show up here, join our{' '}
				<a href="https://github.com/osbjs/osbjs" className="text-active">
					discord
				</a>{' '}
				and post in the #showcase channel!
			</p>
		</div>
	)
}

export default function Showcase() {
	return (
		<Layout>
			<main className="px-3">
				<Header />
				<Cards />
			</main>
		</Layout>
	)
}
