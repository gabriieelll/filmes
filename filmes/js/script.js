const apiKey = 'a05c652fca6a07b392d1cbf291cdd906'; // Insira sua chave de API do TMDb aqui

    // Função para buscar filmes populares
    async function fetchPopularMovies() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      const data = await response.json();
      return data.results;
    }

    // Função para exibir filmes populares na página
    async function displayPopularMovies() {
      const moviesList = document.getElementById('moviesList');
      const movies = await fetchPopularMovies();

      movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `<h2>${movie.title}</h2>
                                  <p>${movie.overview}</p>
                                  <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} Poster">`;
        moviesList.appendChild(movieElement);
      });
    }

    // Chamada para exibir filmes populares na página inicial
    displayPopularMovies();

    // Função para pesquisar filmes
    async function searchMovies() {
      const query = document.getElementById('searchInput').value;
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
      const data = await response.json();
      displaySearchedMovies(data.results);
    }

    // Função para exibir resultados da pesquisa na página
    function displaySearchedMovies(results) {
      const moviesList = document.getElementById('moviesList');
      moviesList.innerHTML = '';

      results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `<h2>${movie.title}</h2>
                                  <p>${movie.overview}</p>
                                  <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} Poster">`;
        moviesList.appendChild(movieElement);
      });
    }
    document.addEventListener('DOMContentLoaded', loadPopularMovies);
