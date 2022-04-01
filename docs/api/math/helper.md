---
title: Helper functions
---
# Helper functions

### `degToRad`
```typescript
degToRad(degrees: number): number
```
Converts degrees to radians.

### `radToDeg`
```typescript
radToDeg(radians: number): number
```
Converts radians to degrees.

### `clamp`
```typescript
clamp(value: number, min: number, max: number): number
```
Clamps the value to be between min and max.

### `lerp`
```typescript
lerp(x: number, xMin: number, xMax: number, yMin: number, yMax: number): number
```
Linear interpolation.

### `getImageDimensions`
```typescript
getImageDimensions(path: string): {
    width: number | undefined;
    height: number | undefined;
}
```
Returns the width and height of an image.
