import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { fetchReviews } from '../api';
import LoadingReviews from './LoadingReviews';
import Categories from './Categories';

const Reviews = () => {
    const [reviewData, setReviewData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState('');


    useEffect(() => {
        fetchReviews(category)
        .then((data) => {
            setReviewData(data)
            setIsLoading(false);
        }) 
    }, [category]);

    if(isLoading){return <LoadingReviews/>}

    return <section>
        <div>
            <Categories className="category-selector" setCategory={setCategory}/>
        </div>
        <ul className='review-grid'>
           {reviewData.map((review) => {
            return <li className='game-review' key={review.review_id}>
                <img className="images" alt={review.title} src={review.review_img_url}></img>
                <section >
                <Link className="title" to={`/reviews/${review.review_id}`}> {review.title} </Link>
                <br/>
                Designer: {review.designer}
                <br/>
                Owner: {review.owner}
                <h4>
                Votes: {review.votes}
                </h4>
                </section>
                </li>
           })}
        </ul>
    </section>

}

export default Reviews;