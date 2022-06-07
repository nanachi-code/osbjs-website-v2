---
name: Lyrics 
---

# Lyrics

```typescript
new Lyrics(
	folderPath: string,
	osbFolderPath: string,
	subtitlePath: string,
	options?: LyricsOptions,
	registerFontOptions?: FontOptions)
```

Generate lyrics from a `.srt`/`.vtt`/`.json` file.

* **folderPath**: full path to beatmap folder
* **osbFolderPath**: relative path to the folder that will be used to save generated text images. For example: `sb/lyrics`
* **subtitlePath**: full path to the subtitle file. For example, `./lyrics.srt` if your lyrics file is same folder with your script file.
* **options**: Avaiable options:
```typescript
interface ILyricsOptions {
	/**
	 * Duration of the fade in/out.
	 * @default 200
	 */
	fadeDuration?: number
	/**
	 * Opacity of the text.
	 * @default 1
	 */
	opacity?: number
	/**
	 * Font name.
	 * @default 'Arial'
	 */
	fontName?: string
	/**
	 * Font size.
	 * @default 72
	 */
	fontSize?: number
	/**
	 * Font scale.
	 * @default 1
	 */
	fontScale?: number
	/**
	 * Whether to generate a sprite per character.
	 * @default false
	 */
	perCharacter?: boolean
	/**
	 * Y position of the text.
	 * @default 400
	 */
	y?: number
	/**
	 * Whether to use additive blending.
	 * @default true
	 */
	additive?: boolean
	/**
	 * Color of the text.
	 * @default {r: 255, g: 255, b: 255}
	 */
	color?: IColor
}

```

* **registerFontOptions**: in case you want to use a non-system font.
```typescript
interface FontOptions {
	fontPath: string // full path to font file
	family: string // font family name
}
```

## Example
```javascript
const folderPath = "D:/osu!/Songs/map_folder"
const lyrics = new Lyrics(folderPath, "sb/lyrics", "./lyrics.srt", {
	perCharacter: true,
	fontName: "Nexa"
}, {
	fontPath: "./Nexa.otf",
	family: "Nexa"
})

scene.registerComponents(lyrics)
```
