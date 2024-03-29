# Product Feedback App - Design System

This is a design system application for the Product Feedback App following the given designs in Figma/Sketch.
This would be used by the actual Product Feedback App application.

This design system is built with `create-react-app` to bootstrap the application with pregenerated configuration which works well with `storybook`, used for building and testing the design system components in isolation and self-documents the usage of the said components.

## Stpes in Publishing to NPM as a module

1. Register an npm account at npmjs.com
2. Login in npm through your terminal under your project's directory.
3. Use `@babel/cli` and `cross-env` to help us with the build process.
4. Use the existing build script and change it to build our design system to the dist directory.
   Add script to transpile scss to css too.

```
{
  "scripts": {
    "build": "cross-env BABEL_ENV=production babel src -d dist && node-sass src/ -o dist",
  }
}
```

5. Locate the babel key in your package.json and update it to the following:

```
{
  "babel": {
    "presets": [
      [
        "react-app",
        {
          "absoluteRuntime": false
        }
      ]
    ]
  }
}
```

6. Now we can run `npm run build` to build our code into the dist directory -- we should add that directory to `.gitignore` too, so we don't accidentally commit it.

7. Adding package metadata for publication. Run the ff command: `npm init --scope=@your-npm-username`

8. Make sure all packages are separated by their purpose: "dependencies" and "devDependencies".

9. Don't include the `storybook` files in your build. (TODO)

10. Build your app before publishing: `npm run build`

11. Only the `dist` folder will be included in our package. Specify it in package.json under `files` key

12. Publish to npm using the ff command: `npm publish --access public`

For the full details of the steps, refer here: https://storybook.js.org/tutorials/design-systems-for-developers/react/en/distribute/

## Stpes in hosting svg icons

1. Make an `icons` directory under `src`. Import all your svg icons there.
2. Install svgr: `npm i -D @svgr/cli
3. Add a `compile-icons` script in your package.json:

```
    "compile-icons": "npx @svgr/cli -d src/icons src/icons"
```

Ideally the command above should work but there's a bug (read here: https://github.com/gregberge/svgr/issues/51) that makes it not working as expected. To address that, change the script to the ff instead:

```
    "compile-icons": "node node_modules/@svgr/cli/bin/svgr -d src/assets/icons src/assets/icons"
```
