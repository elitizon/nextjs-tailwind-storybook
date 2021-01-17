# A [NextJS](https://nextjs.org/) template with typescript, tailwindcss and storybook support

> The configuration of NextJS, TailwindCSS and Storybook can be **complex** 😰 🤪
> 👉 So we have decided to make this template public 🎉

This project was bootstrapped with [npx create-next-app](https://nextjs.org/learn/basics/create-nextjs-app/setup) and we have added support for:

- ✅ [Typescript](https://www.typescriptlang.org/)
- ✅ [Taillwindcss](https://www.tailwindcss.com)
- ✅ [Storybook](https://storybook.js.org/)
- ✅ [Jest](https://jestjs.io/)
- ✅ [Import SVG as React Component (SVGR)](https://react-svgr.com/) (Thanks to [@neoziro](https://twitter.com/neoziro))

You are welcome to contribute to this project to make it better. Contact us at [contact@elitizon.com](contact@elitizon.com)

Created with ❤️ by [Elitizon](https://www.elitizon.com)

This template is available at [https://github.com/elitizon/nextjs-tailwind-storybook](https://github.com/elitizon/nextjs-tailwind-storybook)

## To use this template:

- clone it
- remove the .git folder
- git init .
- git add .
- git commit -m "First commit"

## Structure of the template

```bash
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── build.toml
├── next-env.d.ts
├── nextjs.config.js
├── out
│   ├── 404.html
│   ├── _next
│   ├── favicon.ico
│   ├── index.html
│   └── vercel.svg
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   └── styles
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock

```

Pages and components are developed in `src` directory.

## Install all the dependencies

### 👉 `yarn install`

## Available Scripts

In the project directory, you can run:

### 👉 `yarn dev`

**Results:**

```bash
ready - started server on http://localhost:3000
   ✅ purgeEnabled=false

event - compiled successfully
event - build page: /next/dist/pages/_error
wait  - compiling...
event - compiled successfully
event - build page: /
wait  - compiling...```

Run the project in the dev mode.
````

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### 👉 `yarn storybook`

Runs storybook.

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### 👉 `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> If you get an error that contained this line:

Use this command:

`brew install watchman`

### 👉`yarn build`

Builds the app for production to the `.next` folder.\
It correctly bundles NextJS in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

👉 **Result of execution**

```bash
yarn run v1.22.10
$ cross-env NODE_ENV=production next build
info  - Creating an optimized production build...


   TailwindCSS

   -----------

   ✅ purgeEnabled=true

info  - Compiled successfully
info  - Collecting page data...
info  - Generating static pages (0/2)
info  - Generating static pages (2/2)
info  - Finalizing page optimization...

Page                                                           Size     First Load JS
┌ ○ /                                                          1.55 kB        64.3 kB
├   /_app                                                      0 B            62.7 kB
├ ○ /404                                                       3.46 kB        66.2 kB
└ λ /api/hello                                                 0 B            62.7 kB
+ First Load JS shared by all                                  62.7 kB
  ├ chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.d4f570.js  13.1 kB
  ├ chunks/framework.abffcf.js                                 41.8 kB
  ├ chunks/main.1fee81.js                                      6.62 kB
  ├ chunks/pages/_app.1315ea.js                                523 B
  ├ chunks/webpack.50bee0.js                                   751 B
  └ css/ff7ad52a1259dc7bd680.css                               1.88 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

Done in 9.00s.

```

See the section about [deployment](https://nextjs.org/docs/deployment) for more information.

### 👉`yarn start`

Starts a server with the output for the `yarn build` command.

`yarn build` must be executed before to use this command.

### 👉`yarn export`

Export the output of the `yarn build` command execution to the `./out` directory.

`yarn build` must be executed before to use this command.

### 👉`npx serve ./out`

To launch a **static server** from the `./out` directory. This command can be useful to control the outcome of `yarn export`.

`yarn build` and `yarn export` must be executed before to use this command.

## Learn More

You can learn more in the [NextJS documentation](https://nextjs.org/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn how to develop UIs with component and design systems with Storybook, check out the [Learn Storybook documentation](https://www.learnstorybook.com/)
