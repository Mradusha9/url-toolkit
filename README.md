# URL Toolkit

A small, beginner-friendly npm package for common URL operations.

## Functions

- `buildUrl(base, params)` — creates a URL with query parameters.
- `parseUrl(url)` — returns query parameters as an object.
- `addParam(url, key, value)` — adds or updates a query parameter.
- `removeParam(url, key)` — removes a query parameter.
- `isValidUrl(url)` — checks whether a URL is a valid absolute HTTP or HTTPS URL.

## Example

```js
const { buildUrl, parseUrl } = require("@your-npm-username/url-toolkit");

const url = buildUrl("https://example.com/search", {
    q: "javascript",
    page: 2
});

console.log(url);
// https://example.com/search?q=javascript&page=2

console.log(parseUrl(url));
// { q: "javascript", page: "2" }
```

## Run the examples

```bash
node test.js
```


