import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviewByID } from "../api";
import SingleLoading from "./SingleLoading";
import Comments from "./Comments";
import ReviewCard from "./ReviewCard";


const Review = () => {
    const {review_id} = useParams();
    const [review, setReview] = useState({});
    const [isLoadingSingleRev, setIsLoadingSingleRev] = useState(true);
    const [votes, setVotes] = useState(0);

    useEffect(() => {
        fetchReviewByID(review_id)
        .then((data) => {
            setReview(data);
            setVotes(data.votes);
            setIsLoadingSingleRev(false);
        })
    }, [review_id]); 

    if(isLoadingSingleRev){return <SingleLoading/>}

    return <section>    
         <ReviewCard review={review} review_id={review_id} setVotes={setVotes} votes={votes}/>
         <Comments review_id={review_id}/>
    </section>
}

export default Review;