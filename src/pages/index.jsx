import React from 'react'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'

// prettier-ignore
const defaultCode =
`// Create storyboard instance.
const sb = new Storyboard('Artist - Song Name (Map Host).osb')

// Create a sprite
let sprite = new Sprite('sb/s.png', Layer.Background, Origin.Center)

// Add move command to sprite.
let startTime = 0,
	endTime = 10000,
	startPos = new OsbVector2(320, 345),
	endPos = new OsbVector2(240, 480)
sprite.Move(startTime, endTime, startPos, endPos, Easing.OutExpo)

// Register sprite.
sb.registerComponents(sprite)

// Generate storyboard file.
sb.generate()`

// prettier-ignore
const componentCode =
`class Flash extends Component {
	constructor(startTime, endTime) {
		super()
        this.startTime = startTime
        this.endTime = endTime
	}

	generate() {
		let startScale = new OsbVector2(854, 480),
			endScale = new OsbVector2(854, 480)
		let fl = new Sprite('sb/dot.png', Layer.Background)
		fl.ScaleVec(this.startTime, this.startTime, startScale, endScale)
		fl.Fade(this.startTime, this.endTime, 1, 0)
		this.registerComponents(fl)
	}
}`

// prettier-ignore
const componentCode1 =
`let fl = new Flash(0, 3000)

sb.registerComponents(fl)`

export default function Home() {
	return (
		<Layout>
			<main className="px-3">
				{/* Hero section */}
				<section className="mx-auto mt-32 mb-44 w-full text-center">
					<div className="mb-16">
						<h1 className="text-5xl font-bold md:text-7xl">
							A minimalist component-based<br></br> <span className="text-osu">osu!</span> storboarding framework.
						</h1>
						<p className="mt-12 text-xl">Create osu storyboard in a simple yet flexible way.</p>
					</div>
					<div className="mr-3 inline-block rounded border border-black bg-slate-100 p-3 font-mono dark:text-black">npm i @osbjs/osbjs</div>

					<a href="/docs/introduction/installation">
						<div className="hover:bg inline-block rounded border border-black bg-blue-600 p-3 text-white transition duration-200 hover:bg-blue-800">
							Get started &gt;
						</div>
					</a>
				</section>

				{/* Features 1 */}
				<section className="mx-auto mb-36 grid w-full max-w-screen-xl grid-cols-2 gap-3 md:mb-48 md:gap-12">
					<div className="col-span-2 md:col-span-1">
						<h2 className="text-3xl font-bold md:text-5xl">Fast. Simple. Easy to pick up.</h2>
						<p className="mt-3 md:mt-6 md:text-lg">
							Creating storyboard has never been easier. Just tell osbjs where your beatmap folder and what the output osb filename
							should be. No extra configurations.
						</p>
					</div>

					<div className="col-span-2 md:col-span-1">
						<CodeBlock language="js" title="index.js">
							{defaultCode}
						</CodeBlock>
					</div>
				</section>

				{/* Features 2 */}
				<section className="mx-auto mb-40 grid w-full max-w-screen-xl grid-cols-2 gap-3 md:mb-48 md:gap-12">
					<div className="col-span-2 md:col-span-1">
						<CodeBlock language="js" title="components/Flash.js">
							{componentCode}
						</CodeBlock>
						<CodeBlock language="js" title="index.js">
							{componentCode1}
						</CodeBlock>
					</div>

					<div className="order-first col-span-2 md:order-last md:col-span-1">
						<h2 className="text-3xl font-bold md:text-5xl">Flexible. Reusable.</h2>
						<p className="mt-3 md:mt-6 md:text-lg">
							Since everything is a component, you can reuse your code and manage your project however you want. Even better, you can
							publish your own component and let others use it!
						</p>
					</div>
				</section>

				{/* Feature 3 */}
				<section className="mx-auto mb-40 w-full max-w-screen-xl md:mb-48">
					<div className="mb-6 md:mb-20 md:text-center">
						<h2 className="text-3xl font-bold md:text-5xl">Features</h2>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						<a
							href="docs/api/cli"
							className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100 dark:hover:bg-zinc-800"
						>
							<div className="font-bold">CLI</div>
						</a>

						<a
							href="docs/api/beatmap"
							className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100 dark:hover:bg-zinc-800"
						>
							<div className="font-bold">Beatmap parser</div>
						</a>

						<a
							href="docs/api/math/helpers"
							className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100 dark:hover:bg-zinc-800"
						>
							<div className="font-bold">Math library</div>
						</a>

						<a
							href="docs/api/txtgen"
							className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100 dark:hover:bg-zinc-800"
						>
							<div className="font-bold">Texture generator</div>
						</a>

						<a
							href="docs/api/components/background"
							className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100 dark:hover:bg-zinc-800"
						>
							<div className="font-bold">Pre-built components</div>
						</a>

						<a
							href="docs/introduction/typescript"
							className="rounded border border-black p-3 transition duration-200 hover:bg-blue-100 dark:hover:bg-zinc-800"
						>
							<div className="font-bold">TypeScript support</div>
						</a>
					</div>
				</section>
			</main>
		</Layout>
	)
}
