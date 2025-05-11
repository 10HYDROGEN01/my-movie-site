document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.includes('movies.html')) {
    fetch('movies.json')
      .then(res => res.json())
      .then(data => {
        const movies = data.movies.filter(movie => movie.type === 'movie');
        const moviesContainer = document.getElementById('movies');
        movies.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.className = 'movie-card';
          movieCard.innerHTML = `
            <a href="movie.html?id=${movie.id}"><img src="${movie.poster}" alt="${movie.title}"></a>
            <div class="movie-card-title">${movie.title}</div>
          `;
          moviesContainer.appendChild(movieCard);
        });

        // Search functionality
        const searchBar = document.getElementById('search-bar');
        searchBar.addEventListener('input', () => {
          const searchTerm = searchBar.value.toLowerCase();
          const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
          moviesContainer.innerHTML = '';
          filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
              <a href="movie.html?id=${movie.id}"><img src="${movie.poster}" alt="${movie.title}"></a>
              <div class="movie-card-title">${movie.title}</div>
            `;
            moviesContainer.appendChild(movieCard);
          });
        });
      })
      .catch(err => {
        console.error('Error fetching movies:', err);
      });
  } else if (path.includes('series.html')) {
    fetch('movies.json')
      .then(res => res.json())
      .then(data => {
        const series = data.movies.filter(movie => movie.type === 'series');
        const seriesContainer = document.getElementById('web-series');
        series.forEach(serie => {
          const serieCard = document.createElement('div');
          serieCard.className = 'movie-card';
          serieCard.innerHTML = `
            <a href="movie.html?id=${serie.id}"><img src="${serie.poster}" alt="${serie.title}"></a>
            <div class="movie-card-title">${serie.title}</div>
          `;
          seriesContainer.appendChild(serieCard);
        });

        // Search functionality
        const searchBar = document.getElementById('search-bar');
        searchBar.addEventListener('input', () => {
          const searchTerm = searchBar.value.toLowerCase();
          const filteredSeries = series.filter(serie => serie.title.toLowerCase().includes(searchTerm));
          seriesContainer.innerHTML = '';
          filteredSeries.forEach(serie => {
            const serieCard = document.createElement('div');
            serieCard.className = 'movie-card';
            serieCard.innerHTML = `
              <a href="movie.html?id=${serie.id}"><img src="${serie.poster}" alt="${serie.title}"></a>
              <div class="movie-card-title">${serie.title}</div>
            `;
            seriesContainer.appendChild(serieCard);
          });
        });
      })
      .catch(err => {
        console.error('Error fetching series:', err);
      });
  }
});