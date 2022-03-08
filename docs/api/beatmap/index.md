---
title: Beatmap
sidebar_label: Usage
---

# Beatmap

```typescript
const beatmap = new Beatmap(pathToBeatmap: string)
```
- **pathToBeatmap**: full path to .osu file

## Properties
### `audioFilename`: string

### `difficulty`: `IBeatmapDifficulty`
```typescript
interface IBeatmapDifficulty {
	hp: number
	circleSize: number
	overallDifficulty: number
	approachRate: number
	sliderMultiplier: number
	sliderTickRate: number
}
```

### `metadata`: `IBeatmapMetadata`
```typescript
interface IBeatmapMetadata {
	title: string
	artist: string
	creator: string
	difficulty: string
}
```

### `colors`: [OsbColor](/docs/api/core/utils#osbcolor)[]

### `hitObjects`: `IBeatmapHitObjects`
```typescript
interface IBeatmapHitObjects {
	spinners: Spinner[]
	sliders: Slider[]
	circles: Circle[]
}
```

### `timingPoints`: `ITimingPoint`
```typescript
interface ITimingPoint {
	time: number
	beatLength: number
	meter: number
	sampleSet: SampleSet
	sampleIndex: number
	volume: number
	uninherited: boolean
	kiai: boolean
}
```

