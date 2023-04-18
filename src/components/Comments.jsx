import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchComments } from "../api";
import LoadingComments from "./LoadingComments";
import NoComments from "./NoComments";

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
    }, [review_id, comments])
    
    if(loadingComments){return <LoadingComments/>}
    if (comments.length === 0){return <NoComments/>}

    return <section>
        <ul className='comment-grid'>
        {comments.map((comment) => {
           return <li className='comments' key={comment.comment_id}>
                    <section className="comment-author">
                    Author: {comment.author}
                    </section>
                    <br/>
                    <section className="comment-comment">
                    {comment.body}
                    </section>
                    <h4 className="votes">
                    Votes: {comment.votes}
                    </h4>
            </li>
          })}
        </ul>
    </section>
}

export default Comments;