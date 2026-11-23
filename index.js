function buildUrl(base, params = {}) {
    const url = new URL(base);

    for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
    }

    return url.toString();
}

function parseUrl(url) {
    const searchParams = new URL(url).searchParams;
    return Object.fromEntries(searchParams.entries());
}

function addParam(url, key, value) {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.set(key, value);
    return parsedUrl.toString();
}

function removeParam(url, key) {
    const parsedUrl = new URL(url);
    parsedUrl.searchParams.delete(key);
    return parsedUrl.toString();
}

function isValidUrl(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
    } catch {
        return false;
    }
}

module.exports = {
    buildUrl,
    parseUrl,
    addParam,
    removeParam,
    isValidUrl
};
