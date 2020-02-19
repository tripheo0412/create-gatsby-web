# Create Gatsby Web [![Node Version](https://img.shields.io/badge/Node-10.16.0-339933.svg?style=flat&logo=Node.js)]() [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat&logo=Read-The-Docs)](https://github.com/tripheo0412/create-gatsby-web/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/tripheo0412/create-gatsby-web/blob/master/CONTRIBUTING.md)

Create Gatsby web with pre-configuration.

- [Creating a Gatsby Web](#creating-a-gatsby-web) – How to create a new Gatsby web.

Create Gatsby Web works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/tripheo0412/create-gatsby-web/issues/new).<br>
If you have questions or need help, please email me at [hoangtri241097@gmail.com](mailto:hoangtri241097@gmail.com).

## Quick Overview

```sh
mkdir <your-project-name>
cd <your-project-name>
npx create-gatsby-web --install
npm run develop
```
If you've previously installed `create-gatsby-web` globally via `npm install -g create-gatsby-web`, we recommend you uninstall the package using `npm uninstall -g create-gatsby-web` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<!-- to do add gif how to use -->

### Get Started Immediately

You **don’t** need to install or configure tools.<br>
They are preconfigured so that you can focus on the code. However, all configuration files are exposed so you can custom them whenever you need.

Create a project, and you’re good to go.

## Creating a Gatsby Web

**You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new web, you may choose one of the following methods:

### npx

```sh
npx create-gatsby-web
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

It will generate the the initial project structure inside the current folder.<br>

## Template structure
```
├── .circleci
│   └── config.yml
├── .storybook
│   ├── addons.js
│   ├── config.js
│   └── webpack.config.js
├── config
│   └── testing
│       ├── setupTests.js
│       └── __ mocks __
│          ├── file-mock.js
│          ├── gatsby.js
│          └── styleMock.js
├── node_modules
├── src
│   ├── images
│   ├── pages
│   │   ├── index.jsx/tsx
│   │   └── your_page
│   |       └── index.jsx/tsx
│   └── components
│       ├── seo
│       │   └── index.jsx/tsx
│       └── < your component >
│           ├── index.jsx/tsx
│           ├── __ stories __
│           │  └── your_component.stories.jsx/tsx
│           └── __ tests __
│              └── your_component.test.jsx/tsx
├── tasks
│   └── deployment
│       ├── gatsby-deploy-end.sh
│       ├── gatsby-deploy-start.sh
│       ├── storybook-deploy-end.sh
│       └── storybook-deploy-start.sh
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── jest-preprocess.js
├── jest.config.js
├── LICENSE
├── loadershim.js
├── README.md
├── package.json
├── tsconfig.json -- only available on typescript template
└── yarn.lock/package-lock.json
```

All configurations are exposed and predefined folder structures, just write codes, no need to config<br>
Once the installation is done, you can start develop right away!

Inside the newly created project, you can run some built-in commands:

### `npm run develop` or `yarn develop`

Runs the app in development mode.<br>
Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<!-- <p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p> -->

### `npm run test` or `yarn test`

Run all of your test.

### `npm run test:watch` or `yarn test:watch`

Runs the test watcher in an interactive mode.<br>


### `npm run build` or `yarn build`

Builds the app for production to the `public` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## User Guide

In-progress
<!-- You can find detailed instructions on using Create React App and many tips in [its documentation](https://facebook.github.io/create-react-app/). -->


## Philosophy

- **All exposed:** All configurations are exposed. You have total control of your project settings.

- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

- **CI/CD pipeline built-in:** You can setup your own CI/CD pipeline with just a few steps.

## What’s Included?

Your environment will have everything you need to build a modern Gatsby web:

- React, Gatsby, JSX, ES6, TypeScript syntax support.
- CI/CD ready with CircleCI and Netlify
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

The tradeoff is that **these are a lot of configuration files**. But that is why we have a detail explaination [here](#project-structure) 

## Contributing

We'd love to have your helping hand on `create-gatsby-web`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Credits

This project exists thanks to all the people who [contribute](CONTRIBUTING.md).<br>
<!-- <a href="https://github.com/tripheo0412/create-gatsby-web/graphs/contributors"><img src="https://opencollective.com/create-react-app/contributors.svg?width=890&button=false" /></a> -->

## License

Create Gatsby Web is open source software [licensed as MIT](https://github.com/tripheo0412/create-gatsby-web/blob/master/LICENSE).