import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { fetchReviews } from '../api';
import LoadingReviews from './LoadingReviews';
import Categories from './Categories';
import SortBy from './SortBy';
import { useSearchParams } from "react-router-dom";

const Reviews = () => {
    const [reviewData, setReviewData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState();
    const [sortBy, setSortBy] = useState('created_at');
    const [order, setOrder] = useState('DESC');
    const [searchParams, setSearchParams] = useSearchParams();
    
    
    useEffect(() => {
        fetchReviews(category, sortBy, order)
        .then((data) => {
            setReviewData(data)
            setIsLoading(false);
        }) 
    }, [category, sortBy, order]);

    if(isLoading){return <LoadingReviews/>}

    return <section>
        <div className='selector-headers'>
        <h5 className='sort-header'>Sort By:</h5>
        <h5 className='sort-header'>Order By:</h5>
        <h5 className='sort-header'>Category:</h5>
        </div>
        <div className='category-section'>
            <SortBy setSearchParams={setSearchParams} searchParams={searchParams} setSortBy={setSortBy} setOrder={setOrder}/>
            <Categories setSearchParams={setSearchParams} searchParams={searchParams} className="category-selector" setCategory={setCategory}/>
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