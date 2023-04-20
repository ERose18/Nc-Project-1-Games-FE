import { useContext, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../utils/context";

const AddComment = ({ setComments, review_id}) => {
    const [commentBody, setCommentBody] = useState('');
    const [commentVotes, setCommentVotes] = useState(0);
    const [commentPosted, setCommentPosted] = useState(false);
    const [error, setError] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const [isSubmitting, setIsSubmitting] = useState(false);

    return <section>
        <form className="add-comment-form" onSubmit={(event) => {
            event.preventDefault()

            const commentToAdd = {
                "author": user,
                "body": commentBody,
                "votes": commentVotes
            };
            setIsSubmitting(true);
            postComment(review_id, commentToAdd)
            .then((newComment) => {
                setComments((currentComments) => {
                    return [newComment, ...currentComments];
                })
            })
            .then(() => {
                setCommentBody('');
                setCommentVotes(0);
                setCommentPosted(true);
                setError(false);
                setIsSubmitting(false);
            })
            .catch((err) => {
               setError(true);
               setIsSubmitting(false);
            })
        }}>

        <label htmlFor="comment-body">Comment</label>
        <textarea name="comment-body" value={commentBody} required onChange={(event) =>{
            setCommentBody(event.target.value)
        }}></textarea>
        <button className="submit-button" disabled={isSubmitting} >Submit</button>
        </form>
        {commentPosted ? <h2 className="posted-comment">Your Comment Has Been Posted!</h2> : null}
        {error ? <h2 className="posted-comment">Something Went Wrong... Please Try Again!</h2> : null}
    </section>
}

export default AddComment;