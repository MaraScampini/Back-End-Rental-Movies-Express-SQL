const movieUrl = "https://api.themoviedb.org/3/movie/popular?api_key=a3d7f49bca7bbd3f64cacbed37fec85b&language=es-ES&page=1"

const bestRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=d92bb5bd539d0b412db142f571e03957&language=en-US&page=1"

const showUrl = "https://api.themoviedb.org/3/tv/popular?api_key=4a447395d020b0b20875f6037aa1ec85&language=en-US&page=1"



const getMovies = async () => {
  try {
    let response = await axios.get(movieUrl)
    console.log(response.data.results)
    response.data.results.map((movie) => {
      let movie1 = {
        title: movie.title,
        poster: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        original_language: movie.original_language
      }
      console.log(movie1)
    })
  }
  catch(error) {
    console.error(error)
  }
}

const getShows = () => {
  axios.get(showUrl)
    .then(function (response) {
      response.data.results.map((show) => {
        let pelicula = {
          title: show.name,
          poster: show.poster_path,
          first_air_date: show.first_air_date,
          overview: show.overview
        }
        console.log(pelicula)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}

getMovies()
