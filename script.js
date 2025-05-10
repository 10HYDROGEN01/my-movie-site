// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the movies.json file
    fetch('movies.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch movies.json');
        }
        return res.json();
      })
      .then(data => {
        // Get the movie-list div
        const movieListDiv = document.getElementById('movie-list');
        
        // Clear the "Loading..." text
        movieListDiv.innerHTML = '';
  
        // Iterate over the movies and create HTML elements for each
        data.movies.forEach(movie => {
          const movieDiv = document.createElement('div');
          movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title} poster" style="max-width: 200px;">
            <p>
              <a href="${movie.stream_url}" target="_blank">Stream</a> |
              <a href="${movie.download_url}" target="_blank">Download</a>
            </p>
          `;
          movieListDiv.appendChild(movieDiv);
        });
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('movie-list').innerHTML = 'Error loading movies. Check the console for details.';
      });
  });