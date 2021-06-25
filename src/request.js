
const API_KEY = '4f9d37a0fc38022e760f0c1aecb73d68'
export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
}
