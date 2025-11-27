import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// API Key: 8d15ce48bb44a80298b43312a8f1b52f
// URL DA API: /movie/now_playing?api_key=8d15ce48bb44a80298b43312a8f1b52f&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
