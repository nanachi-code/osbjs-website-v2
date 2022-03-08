---
title: Hit objects 
---

# Hit objects

## Slider
### Propeties
- `x`: number
- `y`: number
- `startPoint`: Vector2
- `endPoint`: Vector2
- `startTime`: number
- `endTime`: number
- `duration`: number
- `hitsound`: [Hitsound](/docs/api/beatmap/enums)
- `hitSample`: `IHitSample`
```typescript
interface IHitSample {
	normalSet: SampleSet
	additionSet: SampleSet
	index: number | undefined
	volume: number | undefined
	filename: string | undefined
}
```
- `params`: `ISliderParams`
```typescript
interface ISliderParams {
	curveType: CurveType | string
	curvePoints: Vector2[]
	slides: number
	length: number
	edgeSounds: Hitsound[]
	edgeSets: IHitSample[]
}
```
### Methods
- `positionAtTime(time: number)`: Vector2

Returns slider ball position at a specific timestamp.

## Circle
### Properties
- `x`: number
- `y`: number
- `startTime`: number
- `hitsound`: [Hitsound](/docs/api/beatmap/enums)
- `hitSample`: `IHitSample`
```typescript
interface IHitSample {
	normalSet: SampleSet
	additionSet: SampleSet
	index: number | undefined
	volume: number | undefined
	filename: string | undefined
}
```
- `position`: [Vector2](/docs/api/math/vector2)
  
## Spinner
### Properties
- `x`: number = 256
- `y`: number = 192
- `startTime`: number
- `endTime`: number
- `hitsound`: [Hitsound](/docs/api/beatmap/enums)
- `hitSample`: `IHitSample`
```typescript
interface IHitSample {
	normalSet: SampleSet
	additionSet: SampleSet
	index: number | undefined
	volume: number | undefined
	filename: string | undefined
}
```
