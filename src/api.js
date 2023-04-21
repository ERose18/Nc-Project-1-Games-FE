import axios from 'axios';

const ncGamesAPI = axios.create({
    baseURL: 'https://nc-project-games-r6n8.onrender.com/api'
  });

  export const fetchReviews = (category) => {
    return ncGamesAPI.get(`/reviews`, {params: {category}})
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

  export const fetchComments = (id) => {
      return ncGamesAPI.get(`/reviews/${id}/comments`)
      .then((response) => {
        return response.data.comments;
      })
  }

  export const patchVotes = (id, newVotes) => {
    return ncGamesAPI.patch(`/reviews/${id}`, {new_votes: newVotes})
    .then((response) => {
      return response.data.review.votes;
    })
  }

  export const fetchUsers = () => {
    return ncGamesAPI.get(`/users`)
    .then((response) => {
      return response.data.users
    });
  }

  export const postComment = (id, comment) => {
    return ncGamesAPI.post(`/reviews/${id}/comments`, comment)
    .then((response) => {
      return response.data.comments;
    })
  }