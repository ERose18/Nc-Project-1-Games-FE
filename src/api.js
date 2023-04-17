import axios from 'axios';

const ncGamesAPI = axios.create({
    baseURL: 'https://nc-project-games-r6n8.onrender.com/api'
  });

  export const fetchReviews = () => {
    return ncGamesAPI.get(`/reviews`)
    .then((response) => {
        return response.data.reviews;
    })
  }