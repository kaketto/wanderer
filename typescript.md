# Typescript focus
- Launching the game
  - Open the [boilerplate](./boilerplates) directory
  - On your computer at the downloaded boilerpalte directory:
    - Run `npm install` for initializating the modules
    - For running the app run: `npm start`
    - Open `localhost:8080` in your browser
- When reading through the specification and the stories keep this in mind.
- Here's an example, it contains
  - a big drawable canvas with one image painted on it
  - and handling pressing keys, for moving your hero around
  - be aware that these are just all the needed concepts put in one place
  - you can separate anything anyhow

```typescript
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw image

// Draws a floor
const image = document.getElementById('floor') as HTMLImageElement;
ctx.drawImage(image, 50, 50);

// Possible images
/* - floor
 * - wall
 * - hero-up
 * - hero-right
 * - hero-down
 * - hero-left
 * - boss
 * - skeleton
 */

document.body.addEventListener('keydown', function (event) {
  // Handle arrow keys
  switch (e.keyCode) {
    case 37:
      alert('left');
      break;
    case 38:
      alert('up');
      break;
    case 39:
      alert('right');
      break;
    case 40:
      alert('down');
      break;
  }
});
```
