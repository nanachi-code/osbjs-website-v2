---
name: Mirgrating from v1 to v2
---

# Mirgrating from v1 to v2
osbjs v2 is now in stable status and it is highly recommended to migrate to v2 if you are still using v1. 
The migration process is quite easy, as osbjs now only has 1 package instead of multiple packages like before.

First, update `@osbjs/osbjs` to the latest version
```bash
npm i @osbjs/osbjs@latest
```

You need to remove `@osbjs/cli`, `@osbjs/math`, `@osbjs/txtgen`, `@osbjs/components`, `@osbjs/osujs` if you have them installed.
```bash
npm uni @osbjs/cli @osbjs/math @osbjs/txtgen @osbjs/components @osbjs/osujs
```

Update the imported modules from those packages to `@osbjs/osbjs`, for example:
```diff
- import { Vector2 } from '@osbjs/math' 
+ import { Vector2 } from '@osbjs/osbjs' 
```

After that, you can try rebuild your storyboard:
```bash
npm run build
```
