import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewByID } from "../api";

const Review = () => {
    const {review_id} = useParams();
    const [review, setReview] = useState({});

    useEffect(() => {
        fetchReviewByID(review_id)
        .then((data) => {
            setReview(data);
        })
    })
    
    return <section>    
         <ul className='review-single-grid'>   
            <li className='single-game-review' key={review.review_id}>
                <img className="images" alt={review.title} src={review.review_img_url}></img>
                <p>
                <h3>{review.title}</h3> 
                Designer: {review.designer}
                <br/>
                Owner: {review.owner}
                <br/>
                Review: {review.review_body}
                <br/>
                <h4>
                Votes: {review.votes}
                </h4>
                </p>
                </li>
        </ul>
    </section>
}

export default Review;