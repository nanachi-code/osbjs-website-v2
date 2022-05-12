---
name: Installation
---

# Installation
## CLI (Recommended)

A recommended way to setup your project is to use the cli, which sets up everything automatically for you.
```bash
npx @osbjs/osbjs create-storyboard
```

If you want to use typescript:
```bash
npx @osbjs/osbjs create-storyboard -t ts
```

After the installation is complete:
- you need to change `path` and `filename` in the osbjs config file to your beatmap folder path and osb filename respectively.
- start writing some codes.
- run `npm run build` and see the result in the osu editor.

## Manual setup
If you are creating a simple storyboard that doesn't need to be seperated into multiple files, you can simply install `osbjs` in your project.
```bash
npm i @osbjs/osbjs
```
Open package.json and add the following script:
```json title="package.json"
"scripts": {
	"build": "node index",
}
```
Create a new `index.js` file and start editing. Run `npm run build` to generate storyboard after you finish.

If you want to update your storyboard everytime you make changes to your code, `nodemon` is perfect for that.
```bash
npm i -D nodemon
```
Open package.json and add the following script:
```json title="package.json"
"scripts": {
	//...
	"dev": "nodemon index",
}
```
Now instead of running `npm run build` everytime you saved, you only need to run `npm run dev` one time instead. 
