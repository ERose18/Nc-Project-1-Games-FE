import { UserContext } from "../utils/context";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { fetchComments } from "../api";
import LoadingComments from "./LoadingComments";
import NoComments from "./NoComments";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const Comments = () => {
    const {review_id} = useParams();
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(true);
    const [addComment, setAddComment] = useState(true);
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        fetchComments(review_id)
        .then((comment) => {
            setComments(comment);
            setLoadingComments(false);
        })
    }, [review_id])
    
    if(loadingComments){return <LoadingComments/>}
    if (comments.length === 0){return <NoComments addComment={addComment} setAddComment={setAddComment} setComments={ setComments} review_id={review_id}/>}

    return <section>
            <button className="add-comment-button" onClick={() => setAddComment((currVal) => !currVal)}>Click Here To Add Comment!</button>
            {addComment ? null : <AddComment  setComments={ setComments} review_id={review_id}/>}
         <ul className='comment-grid'>
            {comments.map((comment) => {
            return <CommentCard key={comment.comment_id }comment={comment} />
            })}
        </ul>
    </section>
}

export default Comments;