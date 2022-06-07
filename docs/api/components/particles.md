---
title: Particles
---

# Particles

```typescript
const particles = new Particles(
	path: string,
	startTime: number,
	endTime: number,
	options?: ParticlesOptions
)
```

Create a particle scene

* **path**: relative path to image file. For example, if you have a folder named `sb` inside your beatmap folder and your sprite named `image.jpg` is in it, then it should be `sb/image.jpg`
* **startTime**/**endTime**: times in milliseconds/timestamp indicate when the image will be shown.
* **options**: 
```ts
interface IParticlesOptions {
	/**
	 * The duration of the effect in milliseconds.
	 * @default 2000
	 */
	duration?: number
	/**
	 * The amount of particles to spawn.
	 * @default 16
	 */
	amount?: number
	/**
	 * The start position of the particles.
	 * @default new OsbVector2(-107, 0)
	 */
	startPosition?: OsbVector2
	/**
	 * The end position of the particles.
	 * @default new OsbVector2(747, 480)
	 */
	endPosition?: OsbVector2
	/**
	 * The axis to spawn particles on.
	 * @default 'x'
	 */
	axis?: 'x' | 'y'
	/**
	 * The easing of the effect.
	 * @default Easing.Linear
	 */
	easing?: Easing
	/**
	 * Whether to use a random easing.
	 * @default false
	 */
	randomEasing?: boolean
	/**
	 * The duration of the fade in effect in milliseconds.
	 * @default 200
	 */
	fadeInDuration?: number
	/**
	 * The duration of the fade out effect in milliseconds.
	 * @default 200
	 */
	fadeOutDuration?: number
	/**
	 * The color of the particles.
	 * @default new OsbColor(1, 1, 1)
	 */
	color?: OsbColor
	/**
	 * The start scale of the particles.
	 * @default 0.1
	 */
	startScale?: number
	/**
	 * The end scale of the particles.
	 * @default 1
	 */
	endScale?: number
	/**
	 * Whether to use a random scale.
	 * @default false
	 */
	randomScale?: boolean
	/**
	 * The start angle of the particles in radians.
	 * @default 0
	 */
	startRotation?: number
	/**
	 * The end angle of the particles in radians.
	 * @default 0
	 */
	endRotation?: number
	/**
	 * Whether to randomly rotate.
	 * @default false
	 */
	randomRotation?: boolean
	/**
	 * The origin of the particles.
	 * @default Origin.Center
	 */
	origin?: Origin
	/**
	 * Whether to use additive blending.
	 * @default true
	 */
	additive?: boolean
	/**
	 * The opacity of the particles.
	 * @default 1
	 */
	opacity?: number
}
```


## Example
```javascript
const particles = new Particles("sb/leaf.png", 0, 1000, { amount: 32 })

scene.registerComponents(particles)
```
