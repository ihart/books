# Books!

An example web application built with NextJS (bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)) using the [Open Library Search API](https://openlibrary.org/dev/docs/api/search).

## Getting Started

First, install everything:

```
npm i
```

Then run the development server:

```
npm run dev
```

and open [http://localhost:3000](http://localhost:3000).

## Testing

To see tests running:

```
npm run test
```

Currently, there is only one unit test for conditional rendering. A test for the API Hook would be desirable but would require mocking a test component, mocking the `fetch` call and JSON response and handling the resolved/rejected Promise and was not possible in the given timeframe.