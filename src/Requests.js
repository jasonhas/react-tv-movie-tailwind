const key = 'ab855dbb013067e7b8b1a561d7a8a0ff'

const requests = {
    requestPopular: `http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `http://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
    requestUpcoming: `http://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

}

export default requests