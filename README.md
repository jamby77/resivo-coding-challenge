# dormakaba coding challenge

The challenge contains a door list and detail page. The applicants are asked to implement new use cases and fix some bugs based on the handout, which is provided together with the challenge itself.

## Getting Started

Make sure you have at least [Node.js](https://nodejs.org/en/) version 16.13.0 installed.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

The project is covered by unit tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
To run the tests in watch mode, execute:

```bash
npm run test
```

## Linting

[ESLint](https://eslint.org/) analyzes code for potential errors and enforces coding style consistency. It is executed automatically during build process or by manual execution:

```bash
npm run lint
```

## Prettier

- [Prettier](https://prettier.io/) is a code formatter to automatically style code for consistency and readability. It is executed as pre commit hook. To run it manually, execute:

```bash
npm run format:write
```

## Build

To create a new production ready build, execute:

```bash
npm run build
```

## Architecture

This is a [Next.js](https://nextjs.org/) project and it has two layers, an `UI` and a `server` layer.

### UI Layer

The UI is written in `React` and also supports server side rendering (SSR).
The UI entry point can be found in the `src/pages` folder. This folder is used for file-system based application routing.
[Next.js routing introduction](https://nextjs.org/docs/routing/introduction)

The components are located within `src/ui` folder.

### Server Layer

This project has also a small server layer to tailor and optimize the APIs and data for the frontend's specific needs. This pattern is also called [backend for frontend (BFF)](https://blog.bitsrc.io/bff-pattern-backend-for-frontend-an-introduction-e4fa965128bf).
The server layer is based on [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) and has a file-system based routing starting at `/src/pages/api` folder.

## File structure

```
├── /src
    ├── /__mocks__          # mocked data, DON'T TOUCH THIS!
    ├── /lib                # shared modules across the entire application, can be used by UI and server layer
    ├── /models             # shared entities between server and ui layer
    ├── /pages              # Next.js routes for ui and server layer
    │   ├── /api            # Next.js API / server layer routes
    │   ├── /doors          # UI routes for doors pages
    │   ├── _app.tsx        # wraps all pages and enables customization of initial props and global styles or shared components
    │   ├── _document.tsx   # customize the HTML document that is rendered for each page
    │   └── index.tsx       # root page of the application
    ├── /server             # modules for server layer
    │   ├── /lib            # shared modules across server layer
    │   ├── /mappers        # map and aggregate microservices dto to application models
    │   ├── /repositories   # repositories are connecting microservices with the application
    │   └── /useCases       # implementation of server api endpoint behaviors, connects repositories and mappers handles errors and validations
    └── /ui                 # UI layer modules / react components
        ├── /components     # react components
        ├── /layout         # application layout specific react components
        ├── /lib            # shared modules for UI layer
        ├── apiSlice.ts     # Redux Toolkit Query endpoints. React hooks to fetch data from the server layer
        ├── store.ts        # Redux store configuration
        └── theme.ts        # custom Material UI application theme
```

## Important 3rd party libraries

- [Next.js](https://nextjs.org/) React-based open-source framework
- [Material UI](https://mui.com/) React UI library that provides pre-designed components and styles based on Google's Material Design guidelines.
- [Redux Tool Query](https://nextjs.org/https://redux-toolkit.js.org/rtk-query/overview) simplifies making API requests and managing their state in a React.
- [tsyringe](https://github.com/microsoft/tsyringe) Dependency injection library
- [luxon](https://moment.github.io/luxon/) JavaScript library for working with dates and times.
- [Jest](https://jestjs.io/) JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) Library to test UI components from the user's perspective.
- [ESLint](https://eslint.org/) A linter tool for JavaScript that analyzes code for potential errors and enforces coding style consistency.
- [Prettier](https://prettier.io/) Code formatter to automatically style code for consistency and readability.
