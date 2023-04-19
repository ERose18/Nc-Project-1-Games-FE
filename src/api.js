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

  export const fetchReviewByID = (id) => {
      return ncGamesAPI.get(`/reviews/${id}`)
      .then((response) => {
        return response.data.review;
      })
  }

  export const fetchComments = (id) => { console.log(id)
      return ncGamesAPI.get(`/reviews/${id}/comments`)
      .then((response) => {
        return response.data.comments;
      })
  }

  export const patchVotes = (id, incVotes) => {
    return ncGamesAPI.patch(`/reviews/${id}`, {inc_votes: incVotes})
    .then((response) => {
      return response.data.review.votes;
    })
  }