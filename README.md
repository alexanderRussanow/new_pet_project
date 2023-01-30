This pet project without any meaningful name was bootstrapped with Typescript @4.5.5 + React @18.2.0.

App also availible on a link [https://master--lambent-froyo-b2f4c7.netlify.app/](https://master--lambent-froyo-b2f4c7.netlify.app/)

## To use this app you need to login:
### `login:` Jara
### `password:` cimrman

## Project architecture

Project implemented using Feature-Sliced Design methodology ([https://feature-sliced.design/](https://feature-sliced.design/))

## Data flow

Interacting with data is done with the Redux Toolkit.
Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For async reducers import is used
[DynamicReducerLoader](/src/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader.tsx
)
## Internationalization 

Project also uses internationalization [https://www.i18next.com/](https://www.i18next.com/) with English and Czech languages.
Files with translations are stored in public/locales.

## Tests

The project uses 3 types of tests:
1) Normal unit tests on jest - `npm run test:unit`. Jest - [https://jestjs.io/](https://jestjs.io/),
2) Component tests with React testing library - `npm run test:unit`. React Testing Library -[https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
3) Screenshot testing with loki `npm run test:ui`. Loki - [https://loki.js.org/](https://loki.js.org/)

## Storybook

The project uses a Storybook [https://storybook.js.org/](https://storybook.js.org/).

## CI pipeline 

The configuration of Github Actions is in /.github/workflows.
The CI runs all kinds of tests, project and storibook builds.

## Available Scripts

In the project directory:

### `npm install`
To install all dependencies

### `npm run start:dev`

Runs the app in the development mode with WebPack.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Backend implemented using json-server.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm run start:vite:dev`

Runs the app in the development mode with Vite.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

Backend implemented using json-server.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm run storybook`

Runs storybook.\
Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

### `npm run build:dev`

Build project in Dev mode.\

### `npm run build:prod`

Build project in Prod mode.\

Webpack Bundle Analyzer availible only with Dev mode.\
Open [http://127.0.0.1:8888/](http://127.0.0.1:8888/) to view it in the browser.


The page will reload if you make edits.\
You will also see any lint errors in the console.