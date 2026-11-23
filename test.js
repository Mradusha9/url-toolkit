const {
    buildUrl,
    parseUrl,
    addParam,
    removeParam,
    isValidUrl
} = require("./index");

// Build a URL
console.log(buildUrl("https://example.com/search", { q: "javascript", page: 2 }));

// Parse a URL
console.log(parseUrl("https://example.com?name=Mru&age=18"));

// Add a parameter
console.log(addParam("https://example.com", "page", 3));

// Remove a parameter
console.log(removeParam("https://example.com?page=3&sort=asc", "page"));

// Validate a URL
console.log(isValidUrl("https://google.com")); // true
console.log(isValidUrl("not-a-url"));          // false
