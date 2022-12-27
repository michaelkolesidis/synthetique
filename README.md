# synthétique
Made with [Three.js](https://threejs.org/)

![screenshot](/screenshots/screenshot-main.png)



## Other Technologies Used
* [dat.GUI](https://github.com/dataarts/dat.gui)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Yarn](https://yarnpkg.com/)
* [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)



## Controls

| Key                | Function           |
| ------------------ |:------------------:|
| S                  | Start/stop music   |
| M                  | Toggle Mark Fisher |
| H                  | Show controls      |

### Control panel
| Option          | Function                                                   |
| --------------- |:----------------------------------------------------------:|
| enabled         | Enable orbit controls (hold left-click and move mouse)     |
| enablePan       | Enable camera panning (hold right-click and move mouse)    |
| freeControls    | Remove limits to camera's horizontal and vertical rotation |
| autoRotate      | Rotate the structure automatically around the Y-axis       |
| autoRotateSpeed | Set the speed of  the automatic rotation                   |



## Setup

First, you need to download and install [Node.js](https://nodejs.org/en/download/), as well as, install Yarn globally. Then, clone or download the project, and while inside its main folder run the following commands:

```bash
# Install dependencies (only the first time)
yarn

# Run the local server at localhost:8080
yarn dev

# Build for production in the dist/ directory
yarn build
```


## Screenshots
![screenshot](/screenshots/screenshot-menu.png)

![screenshot](/screenshots/screenshot-01.png)

![screenshot](/screenshots/screenshot-02.png)



## Acknowledgments
Music by [Aries Beats](https://free-songs.de/synthwave-piano/)

Special thanks to [Ricardo Cabello, aka Mr. doob](https://mrdoob.com/) for creating Three.js and to [Bruno Simon](https://bruno-simon.com/) for being such an inspiring teacher.

Inspired by the works of [Mark Fisher, aka k-punk](https://en.wikipedia.org/wiki/Mark_Fisher)



## Copyright
Copyright (c) 2022 Michael Kolesidis. All rights reserved.
