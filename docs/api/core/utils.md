---
title: Utils
---

# Utils

## SubtitleCollection
```typescript
new SubtitleCollection(path: string)
```
Convert lyrics file into a time-text collection

* **path**: full path to lyrics file. File types supported: `srt`, `vtt`

Property:
* **subtitles**: `ISubtitle`[]
```typescript
interface ISubtitle { 
	startTime: number
	endTime: number
	text: string
}
```

## `rgbToHex`
```typescript
function rgbToHex(r: number, g: number, b: number): string
```
Converts rgb color to its corresponding hex string.

## `parseOsuTimestamp`
```typescript
function parseOsuTimestamp(timestamp: string): number
```
Converts osu timestamp to miliseconds. osbjs calls this function under the hood.

## OsbColor
```typescript
new OsbColor(r: number, g: number, b: number)
```

* **r**: red
* **g**: green
* **b**: blue

Only use with sprite/animation.

### Instance methods
#### `toHexString`
```typescript
color.toHexString(): string
```
Converts rgb color to its corresponding hex string.

### Static methods
#### `fromHexString`
```typescript
OsbColor.fromHexString(color: string): OsbColor
```
Create an OsbColor from a hex string

#### `fromColor`
```typescript
OsbColor.fromColor(color: IColor): OsbColor
```
Create an OsbColor from any color object that contains r, g, b fields.

```ts
interface IColor {
	r: number
	g: number
	b: number
}
```

## OsbVector2
```typescript
new OsbVector2(x: number, y: number)
```

* **x**: x value of this vector
* **y**: y value of this vector

Only use with sprite/animation.

### Static methods
#### `fromVector2`
```typescript
OsbVector2.fromVector2(v: Vector2): OsbVector2
```
Create an OsbVector2 from a [Vector2](/docs/api/math/vector2). Helpful when u have a [Vector2](/docs/api/math/vector2) returned from a calculation
