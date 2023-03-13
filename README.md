# ESNext + ESBuild + MUI Template
A Material UI base template designed with simplicity in the tool-chain and strong opinions in the coding style.

- Supports as modern of ES standard as possible (ESNext).
- Uses eslint to enforce ALL React, React-Hooks, and StandardJS coding rules and styles.
- Incorporates Material UI v5  with a basic theme provider, CSS Baseline, and fixed container.
- Incorporates hooks for management of state (in example code).
- Uses ESBuild to transpile and bundle.
- Uses ESBuild's built-in server and watching for development.
- Uses ESBuild's server event to auto-reload browser on a rebuild.

## Basic Usage
### Tools and Initialization
- Ensure node.js is installed (tested with node v18.x)
- Recommend VS Code for editing with the ESLint extension
- Do `npm install` once to install dependencies

### Development
- Run `npm run client:dev` to start the dev server and watch for changes
- On file save, the code will rebuild and browser will auto refresh
- Exit the dev server and builder with `ctrl+c` when done

### Deployment
- Run `npm run client` to build a minified production version in the `public` folder
- App is contained entirely in the public folder

### Notes
- When running in development mode, the global boolean `_DEV_` will be true in your JS code
- `_VER_` is a global string equal to your semantic version in package.json
