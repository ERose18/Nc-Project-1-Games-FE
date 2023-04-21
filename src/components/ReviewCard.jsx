import ReviewVotes from "./ReviewVotes";

const ReviewCard = ({review, review_id, setVotes, votes}) => {
   return <ul className='review-single-grid'>   
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
                <br/>
                Date: {new Date(review.created_at).toLocaleDateString()}
                <h4>
                Votes: {votes}
                </h4>
                <ReviewVotes review_id={review_id} setVotes={setVotes}/>
                </section>
                </li>
        </ul>
}

export default ReviewCard;