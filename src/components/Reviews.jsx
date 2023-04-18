import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { fetchReviews } from '../api';
import Loading from './Loading';

const Reviews = () => {
    const [reviewData, setReviewData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchReviews()
        .then((data) => {
            setReviewData(data)
            setIsLoading(false);
        }) 
    }, []);

    if(isLoading){return <Loading/>}

    return <section>
        <ul className='review-grid'>
           {reviewData.map((review) => {
            return <li className='game-review' key={review.review_id}>
                <img className="images" alt={review.title} src={review.review_img_url}></img>
                <p >
                <Link className="title" to={`/review/${review.review_id}`}> {review.title} </Link>
                <br/>
                Designer: {review.designer}
                <br/>
                Owner: {review.owner}
                <br/>
                Votes: {review.votes}
                </p>
                </li>
           })}
        </ul>
    </section>

}

export default Reviews;