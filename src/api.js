const KEY = "_K26h8PJdcLQWXYk3U5cjFOMMV3SA5J8euEEL__TlCY";

function api(page, query) {
  return `https://api.unsplash.com/search/photos?client_id=${KEY}&page=${page}&query=${query}`;
}

function photo(id) {
  return `https://api.unsplash.com/photos/${id}/?client_id=${KEY}`;
}

export { KEY, api, photo };
