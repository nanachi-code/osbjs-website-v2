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
interface ParticlesOptions {
	duration?: number // default: 2000
	amount?: number // default: 16
	startPosition?: OsbVector2 // default: OsbVector2(-107, 0)
	endPosition?: OsbVector2 // default: OsbVector2(747, 480)
	axis: 'x' | 'y' // default: x
	easing?: Easing // default: Easing.Linear
	randomEasing?: boolean // default: false
	fadeInDuration?: number // default: 200
	fadeOutDuration?: number // default: 200
	color?: OsbColor // default: OsbColor(1, 1, 1)
	startScale?: number // default: 0.1
	endScale?: number // default: 1
	randomScale?: boolean // default: false
	startRotation?: number // default: 0
	endRotation?: number // default: 0
	randomRotation?: boolean // default: false
	origin?: Origin // default: Origin.Center
	additive?: boolean // default: true
	opacity?: number // default: 1
}
```


## Example
```javascript
const particles = new Particles("sb/leaf.png", 0, 1000, { amount: 32 })

scene.registerComponents(particles)
```
