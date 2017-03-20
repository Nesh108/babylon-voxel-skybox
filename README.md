# Babylon Voxel Skybox
Voxel skybox for Babylon.js

> Skybox for [Babylon.js](https://github.com/BabylonJS/Babylon.js).

> Best when used with [Noa-Engine](https://github.com/andyhall/noa).

## Example

```js
let skybox = require('babylon-voxel-skybox')({
  	// Pass it a copy of the Babylon scene
	scene: scene,

	// Texture of the skybox
	skybox_path: 'textures/skybox1',

	// Size skybox
	skybox_size: 200.0,
});

// If using Noa-Engine: Tell engine to render it
noa.rendering.addDynamicMesh(skybox.get_skybox());

// If you want to change skybox
skybox.set_skybox('textures/skybox2');

```

## Run the Example

1. `git clone git://github.com/Nesh108/babylon-voxel-skybox && cd babylon-voxel-skybox`
1. `npm install`
1. `npm start`

## Install

With [npm](https://npmjs.org) do:

```
npm install --save babylon-voxel-skybox
```

## Release History

* 1.0.0 - initial release

## License

Copyright (c) 2017 Nesh108<br/>

Licensed under the MIT license.