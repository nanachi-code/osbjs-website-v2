---
title: HitObjectHighlight 
---

# HitObjectHighlight
```typescript
const highlight = new HitObjectHighlight(
	osbPath: string,
	startTime: number | string,
	endTime: number | string,
	beatmap: Beatmap,
	options?: IHitObjectHighlightOptions
)
```

Highlight every objects inbetween start and end time.

* **osbPath**: relative path to image file used to highlight. For example, if you have a folder named `sb` inside your beatmap folder and your `highlight.png` is in it, then it should be `sb/highlight.png`
* **startTime**/**endTime**: times in milliseconds/timestamp indicate the start/end time of the section you want to highlight.
* **beatmap**: Beatmap instance of difficulty you want to use
* **options**: Avaiable options:
```typescript
interface IHitObjectHighlightOptions {
	/**
	 * Scale factor of the sprite at the end of each slider highlight animation.
	 * @default 1.2
	 */
	endScale?: number
	/**
	 * Scale factor of the sprite at the start of each slider highlight animation.
	 * @default 1
	 */
	startScale?: number
	/**
	 * How long (in milliseconds) should the highlight sprite start fading in/out.
	 * @default 200
	 */
	fadeDuration?: number
	/**
	 * Used to calculate the timestep between each `Move` command.
	 * The higher the number, the more smooth the animation will be.
	 * @default 8
	 */
	beatDivisor?: number
	/**
	 * Should the highlight follow the slider path?
	 * @default true
	 */
	followSliderPath?: boolean
}

```

## Example
```javascript
const beatmapPath = "D:/osu!/Songs/map_folder/map.osu"
const beatmap = new Beatmap(beatmapPath)
const highlight = new HitObjectHighlight("sb/circle.png", 1000, 5000, beatmap, {
	startScale: 1,
	endScale: 1.2,
	followSliderPath: true
})

scene.registerComponents(highlight)
```
