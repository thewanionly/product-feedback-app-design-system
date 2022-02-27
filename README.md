# Product Feedback App - Design System

This is a design system application for the Product Feedback App following the given designs in Figma/Sketch.
This would be used by the actual Product Feedback App application.

This design system is built with `create-react-app` to bootstrap the application with pregenerated configuration which works well with `storybook`, used for building and testing the design system components in isolation and self-documents the usage of the said components.

## Stpes in Publishing to NPM as a module

1. Register an npm account at npmjs.com
2. Login in npm through your terminal under your project's directory.
3. Use `@babel/cli` and `cross-env` to help us with the build process.
4. Use the existing build script and change it to build our design system to the dist directory:

```
{
  "scripts": {
    "build": "cross-env BABEL_ENV=production babel src -d dist"
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

For the full details of the steps, refer here: https://storybook.js.org/tutorials/design-systems-for-developers/react/en/distribute/
