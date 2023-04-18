import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchComments } from "../api";
import LoadingComments from "./LoadingComments";
import NoComments from "./NoComments";
import CommentCard from "./CommentCard";

const Comments = () => {
    const {review_id} = useParams();
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);

    useEffect(() => {
        fetchComments(review_id)
        .then((comment) => {
            setComments(comment)
            setLoadingComments(false);
        })
    }, [review_id])
    
    if(loadingComments){return <LoadingComments/>}
    if (comments.length === 0){return <NoComments/>}

    return <section>
        <ul className='comment-grid'>
        {comments.map((comment) => {
           return <CommentCard comment={comment}/>
          })}
        </ul>
    </section>
}

export default Comments;