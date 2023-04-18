import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewByID } from "../api";
import SingleLoading from "./SingleLoading";
import Comments from "./Comments";

const Review = () => {
    const {review_id} = useParams();
    const [review, setReview] = useState({});
    const [isLoadingSingleRev, setIsLoadingSingleRev] = useState(true);

    useEffect(() => {
        fetchReviewByID(review_id)
        .then((data) => {
            setReview(data);
            setIsLoadingSingleRev(false);
        })
    }, [review_id]); 

    if(isLoadingSingleRev){return <SingleLoading/>}

    return <section>    
         <ul className='review-single-grid'>   
            <li className='single-game-review' key={review.review_id}>
                <img className="images" alt={review.title} src={review.review_img_url}></img>
                <section>
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
                </section>
                </li>
        </ul>
        <Comments reviewID={review_id}/>
    </section>
}

export default Review;