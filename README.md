# Create Gatsby Web [![Node Version](https://img.shields.io/badge/Node-10.16.0-339933.svg?style=flat&logo=Node.js)]() [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat&logo=Read-The-Docs)](https://github.com/tripheo0412/create-gatsby-web/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/tripheo0412/create-gatsby-web/blob/master/CONTRIBUTING.md)

Bootstrap a Gatsby Web with pre configured development utilities, ready support for CI/CD pipeline and CMS.

- [Creating a Gatsby Web](#creating-a-gatsby-web) – How to create a new Gatsby web.
- [Connecting CI/CD](#setup-ci-cd) - How to get CI/CD up and running.
- [Setup CMS webhook](#setup-cms-webhook) - How to set webhook from CMS to CircleCI pipeline.

Create Gatsby Web works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/tripheo0412/create-gatsby-web/issues/new).<br>
If you have questions or need help, please email me at [hoangtri241097@gmail.com](mailto:hoangtri241097@gmail.com).

## Quick Overview

```sh
npx create-gatsby-web --install
npm run develop/ yarn develop
```
If you've previously installed `create-gatsby-web` globally via `npm install -g create-gatsby-web`, we recommend you uninstall the package using `npm uninstall -g create-gatsby-web` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build/ yarn build`.

<!-- to do add gif how to use -->

### Get Started Immediately

You **don’t** need to install or configure tools.<br>
They are preconfigured so that you can focus on the code. However, all configuration files are exposed so you can customize them whenever you need.

Create a project, and you’re good to go!

### CI/CD pipeline support out-of-the-box

You **just** need to sign up for services, get access tokens and connect your services and the rest is handle my create-gatsby-web<br>
Integrated with scripts to provide real **develop-staging-production** experience.

Learn more [here](#user-guide)

### CMS support

Pre built webhooks support for CMS, you can configure your CMS to call to CircleCI webhooks. CircleCI is already pre configured run CI/CD job if being call by this webhook.<br>
No more broken deployment if client makes a mistake!

Learn more [here](#user-guide)

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
├── .huskyrc.json
├── .lintstagedrc.json
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

1.  **`./circleci`**: This directory contains CircleCI configuration file. Note that there are 4 type of jobs: preview-staging-release-webhook

2.  **`.storybook/`**: This directory contains all the configuration files for Storybook.

3.  **`./config/testing`**: This directory contains all the MOCK configuration files for Jest testing.

4.  **`./node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

5.  **`./src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

6.  **`.eslintignore`**: This file tells eslint which files it should not track.

7.  **`.eslintrc.js`**: Eslint configuration file.

8.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

8.  **`.huskyrc.json`**: Husky configuration file. Already setup with a pre git commit hooks.

9.  **`.lintstagedrc.json`**: Lint-staged configuration file. Already setup to auto lint and format code before commit.

10.  **`.prettierignore`**: This file tells prettier which files it should not track.

11.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

12.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

13.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail). SEO component already preconfigure, only production deployment will get index by Google bots all preview and staging will have **noindex** meta tag. 

14. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

15. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering. Preconfigured to convert stylesheet inline to link, preventing too long head which prevent Facebook, Twitter ... scraping data.

16. **`jest-preprocess.js`**: This file contains babel options to build gatsby project for Jest testing

17. **`jest.config.js`**: This file contains all of Jest configurations.

18. **`LICENSE`**: This boilerplate is licensed under the MIT license.

19. **`loadershim.js`**: This files contains loader setting for Jest.

20. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

21. **`README.md`**: A text file containing useful reference information about your project.

22. **`tsconfig.json`**: This file contains all of typescript configurations for type checking.

23. **`yarn.lock/package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

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
### `npm run build` or `yarn build`

Builds the app for production to the `public` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `npm run storybook` or `yarn storybook`

Runs storybook in development mode.<br>
Storybook live at `http://localhost:6006`!

### `npm run test` or `yarn test`

Run all of your test.

### `npm run test:watch` or `yarn test:watch`

Runs the test watcher in an interactive mode.<br>

## User Guide

### CLI 
<p align='center'>
<img src='https://lh3.googleusercontent.com/fJ7l7kpY2GHK9gGkRq94FwbPB3KTwun6nxy7DE6EQ9b3kXgUvEbLhONS-z5RkDZ8ihDp8Sz8ejsS14Q4sv7-B25Oql3IjeSlIWSLkyAviRu23WWeMSVtJWd-bhqPjgNpO8NkWmN0kmnKPOvYMwZSFUDBWsEw0GSmxh1WLhUlc7FbRMKb8Utzl4L5ZZxNQURBtNMrjTjxqtfxJLFtl96Dhfj4yMjj7T-tinPgAPMKJ9SGE_eh0lN_3lezFQD0Wp8t0dbdTodvzxBTEDK9Jk04OVuiM9BWMi3rWeMALfL3rsnzIMCKhvq5nOS4QPSonX1vssq69u74JgMm7G-yU1tB5B_sotuJbznnBobmlkWec4opmSUH7Fgw4MIODVr4sIC5JX_gEYet-El5IHHxWaHExj7hDuyB4jkFCwFN-JrOWW_H5s0Eqaz0H8KcxyZ8H1umcCm9mEykW3JvoBzigidSTWMYMX5OsA_3b6FuCT4uU39rQghH_VgcJbtD2NRpLfuJqzVqY6QEGukJq7FX1u3Eqlhqa8l7f1Vc6fjX86u9eMFoG4IuHmQfCkQ_Di71w2MNp66IgTxAPMYE38KJEVlWBSiOwT7aQWCZbARHpjKLrdFInJSh-yQ9PyWCLbiswJNuGD7WN-oQ7db4PRj49lVdyFaKXGZAk4hURiVZlw7qlBI23EvZBOjBtqbOHWGpocrbGsTmascfpZGIaeue24San5ZZgTEFdw24Lgg6duYniCzKJRnB=w731-h374-no' width='600' alt='Help Menu'>
</p>

### Setup CI CD
**Video tutorial**
In-progress

**Prerequisites**
- Github/CircleCI/Netlify account, we only need free version!
- Github [personal access token](https://github.com/settings/tokens) for CircleCI reporting deployment to Pull Request and Github Deployment, note down the token as ```GITHUB_DEPLOYMENTS_TOKEN=<the-token>```.
- Netlify **development** [personal access token](https://app.netlify.com/user/applications?&_ga=2.114107908.208815282.1582632982-167014225.1582120451#personal-access-tokens) for CircleCI to deploy preview and staging (this one belongs to Dev team Netlify's account). Note down the token as ```NETLIFY_ACCESS_TOKEN=<the-token>```. This is your staging website.
- Netlify **production** [personal access token](https://app.netlify.com/user/applications?&_ga=2.114107908.208815282.1582632982-167014225.1582120451#personal-access-tokens) for CircleCI to deploy production (this one belongs to Client Netlify's account - if you owned the project then development access token is enough). Note down the token as ```NETLIFY_CLIENT_ACCESS_TOKEN=<the-token>```. This is your production website.


**How to**
- Upload project to Github's repo, if you want to use CircleCI for free, Github's repo must be **public**.
- Run ```yarn build/ npm run build```, you will get Gatsby built **public** folder in the root directory.
- Run ```yarn build-storybook/ npm run build-storybook```, you will get Storybook built **build-storybook** folder in the root directory.
- Login to **Dev team** Netlify, upload the **public** folder via the image below **(DO NOT USE new site from GIT)**, after upload you should get new project deployment in Netlify, click on it and go to site settings, note down the API ID as ```NETLIFY_SITE_ID_STAGING=<the-API-ID >```.
- Still in **Dev team** Netlify, upload the **build-storybook** folder via the image below **(DO NOT USE new site from GIT)**, after upload you should get storybook deployment in Netlify, click on it and go to site settings, note down the API ID as ```NETLIFY_SITE_ID_STORYBOOK=<the-API-ID >```.
- Login to **Client** Netlify, upload the **public** folder via the image below **(DO NOT USE new site from GIT)**, after upload you should get new project deployment in Netlify, click on it and go to site settings, note down the API ID as ```NETLIFY_SITE_ID_RELEASE=<the-API-ID >```.

<p align='center'>
<img src='https://lh3.googleusercontent.com/5RmFw_73xtVA1fLCWyXR9UVjfXQUjkGfoCbhVjeLxpJ7JDFSdTodLFDbU0dTURmQS8WL1ZA1QC-9tI-cp3hc0wsSxhMWlSeCZkCiRs9AOOkISLnQ7GVjAQzJSoCe1c5cUnwSDYLa3OYYlZ0D559ys9AZ9SBh_3NjlxZkWUoigidL2jGw92GBUNfpSQMvHI56SUyBqPdEoyOin9-aJNQ-gK80BhNpRFDn1gsNMqQ3ezYVW8p-zSo850g3eb7vUh4eLPo5S9yyawivDU96QUhZbZo2WeCzVgcqhsKWB6cSJ_AP1oLqcNUROWHfPw2p_kTGNxwRWGA4Igv1BE5wMTfUlcUOyuH5CqXGT0AelSeddwe6QPxZewhw3lOa4RsAptCs1PHoOavSr8beiupHKieqIK8SUPERKHfU-RiM-2aWJk_UzVwKkGUd3M2LlAMBNDCUTMPbfldkc53i4hsB_etJR90dRwOMyGr7TbdM020wGnJCo-9cNKxKgIGPGtG7gukSdzYJXxN4yl1p4-2H0MBFFcNvSLdFFviaSoNSjI5J-5npgddDXe9ENBB-KwiWB0Gax2f67T0i6CbqTUw_Ob_q1lh2IEqAFRMSVchPNYkhmHbxhrDOdz-cBWi3hkgxPdQlBfyZKzhaR5VhHeQ7BA5ppf2U-JNhCIDdTVUGiTMUWbxwrBsh2dV1Vgk=w487-h175-no' alt='Netlify Upload'>
</p>

- Login to CircleCI, click on add project -> set up project -> start building -> add manually
- Go back to the main dashboard -> jobs -> click on the setting of your project -> environment variable -> add variable. Then add all the 6 ENV that we just got. After this, you should get somethign like this:

<p align='center'>
<img src='https://lh3.googleusercontent.com/0hsBZ58V7T9s3fVYuWghNv-0jFP0e4a2iW9FdJpRqg2PbOPNslrcOav6iuD4OiGENG7utsgUF1GZ6TbbB3UmlsMFkbRAHaMiVwUnbV6MvN-I1OjUX8-V3NRsaM4ZTQzPI9EEQVkZ0T8BsFiUn1-7jR1mM4r9PaCf_E2Xp-ogXJ7wRAHOgV2uB77z4ZhfgueXymiMpBr0cC6CQyxmOGMo2bA-2ra3eM05cwKpxsv4ziz-TemD1-aqZB3q1en_ZP1f37AM6wG4ZWR9FgKRuRVy4m7OWYueApQQGkFe6_fmmlqexMaXedLFt5iZjIgDt2-KAuLKFSdqjywZmFkHJ-dxRI1CnfEzhZg8XYF_NNnmU3L7fH0ocu4rPp1aP8GFA8TYBI_Z5eZz531Zz4XKoYk8BlljgCCatpFL8era615c0jG6pAZ_i-8TbCTXcmynCv4tWHAhQYJC9jfuzInLNeDaTn2cWjX8ndDvuPgSZdDbDLz-ocwYuyPwO4lEdney0EoeD2Kbv-47Hso9FkdULQpp5Q_6FbOLS-lw4coelEJm_f9-s22GT5QSkxcAnQy6LcDDDpjYWgH0eLL0SdpZDKBHo0JCGO3meLIAffC8lA5KWxOCFPDHfqwI9ZaLOjcOrFIAVRAuaa-LlViEe3a6D7s2tyN3zeB_enIvwFMs6Q1-9vWseCG8_77f2IM=w1092-h224-no' width='600' alt='CircleCI ENV'>
</p>

- Voila! Pat your back because you have done a great job 👏

### Setup CMS webhook
**Video tutorial**
In-progress

**Prerequisites**
- CircleCI [personal access token](https://circleci.com/docs/2.0/managing-api-tokens/) for CMS to call CircleCi webhooks. Note down the token as ```CIRCLE-TOKEN=<the-token>```.
- CMS account, recommended [Contentful](https://www.contentful.com/)
- Connection keys from CMS, if you use Contentful, click on settings -> API keys -> Content delivery/preview tokens -> Add API key. Note down as: 

```
CONTENTFUL_SPACE_ID=<the-Space-ID>
CONTENTFUL_ACCESS_TOKEN=<the-Content-Delivery-API-access token>
```

**How to** (example with Contentful - similar to other CMS)

1. **Setup Contentful**
- Create a **.env** in project root directory, put this in the .env file:
```
CONTENTFUL_SPACE_ID=<the-Space-ID>
CONTENTFUL_ACCESS_TOKEN=<the-Content-Delivery-API-access token>
```
- Run ```yarn add gatsby-source-contentful / npm install --save gatsby-source-contentful```
- Navigate to **gatsby-config**, uncomment the block of code:
```
/***** REMOVE COMMENT TO ENABLE CONTENTFUL CMS
{
	resolve: `gatsby-source-contentful`,
		options: {
			spaceId: process.env.CONTENTFUL_SPACE_ID,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
		},
	},
******/
```
- Login to CircleCI, main dashboard -> jobs -> click on the setting of your project -> environment variable -> add variable. Then add your CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.

2. **Setup webhook**
__Webhook for staging website__
- Login to Contentful, settings -> webhooks -> add webhooks
- Details -> name ```Trigger CircleCi Build Develop Branch```
- Details -> URL -> POST -> ```https://circleci.com/api/v2/project/github/<org-name-or-your-account-name>/<repo-name>/pipeline```
- Triggers -> Select specific triggering events -> tick all Publish + Unpublish
- Headers -> add custom header -> Name: ```Circle-Token``` -> Value: ```<the-token-value>```
- Content type -> application/json
- Payload -> Customize the webhook payload:
```
{
  "branch": "develop",
  "parameters": {
    "trigger": false,
    "cms-develop": true
  }
}
```
- Click save, voila! you got the **staging** webhook setup. Everytime there is change in contentful, the webhook will trigger CircleCI to run the pipeline and deploy the new content.

__Webhook for production website__
- Login to Contentful, settings -> webhooks -> add webhooks
- Details -> name ```Trigger CircleCi Build Master Branch```
- Details -> URL -> POST -> ```https://circleci.com/api/v2/project/github/<org-name-or-your-account-name>/<repo-name>/pipeline```
- Triggers -> Select specific triggering events -> tick all Publish + Unpublish
- Headers -> add custom header -> Name: ```Circle-Token``` -> Value: ```<the-token-value>```
- Content type -> application/json
- Payload -> Customize the webhook payload:
```
{
  "branch": "master",
  "parameters": {
    "trigger": false,
    "cms-master": true
  }
}
```
- Click save, voila! you got the **production** webhook setup. Everytime there is change in contentful, the webhook will trigger CircleCI to run the pipeline and deploy the new content.


## Philosophy

- **All exposed:** All configurations are exposed. You have total control of your project settings.

- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds are handled for you, so you can focus on writing code.

- **CI/CD pipeline ready:** You can setup your own CI/CD pipeline with just a few steps.

- **CMS support** Pre built webhooks support made CMS integration easy.

## What’s Included?

Your environment will have everything you need to build a modern Gatsby web:

- 🏎 React, Gatsby, JSX, ES6, TypeScript syntax support.
- 🏆 CI/CD ready with CircleCI and Netlify.
- 🤝 Out-of-the-box webhooks support for CMS.
- 💻 Language extras beyond ES6 like the object spread operator.
- 👌 Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- 💎 Rich utilities with Eslint, Prettier, Husky and Lint-staged built-in.
- 🛡 A fast interactive unit test runner with built-in support for coverage reporting.
- ✅ A live development server that warns about common mistakes.
- 🕵️‍♂️ A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

The tradeoff is that **these are a lot of configuration files**. But they are all pre-configured and we have a detail explaination [here](#template-structure) 

## Contributing

We'd love to have your helping hand on `create-gatsby-web`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Credits

This project exists thanks to all the people who [contribute](CONTRIBUTING.md).<br>
<!-- <a href="https://github.com/tripheo0412/create-gatsby-web/graphs/contributors"><img src="https://opencollective.com/create-react-app/contributors.svg?width=890&button=false" /></a> -->

## License

Create Gatsby Web is open source software [licensed as MIT](https://github.com/tripheo0412/create-gatsby-web/blob/master/LICENSE).