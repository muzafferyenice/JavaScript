const searchShows = (query, cb) => {
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((resp) => resp.json())
    .then(function (data) {
      cb(data);
    });
};

export { searchShows };
