import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({comments, review_id}) => {
    const [commentAuthor, setCommentAuthor] = useState('');
    const [commentBody, setCommentBody] = useState('');
    const [commentVotes, setCommentVotes] = useState(0);
    const [commentPosted, setCommentPosted] = useState(false)

    return <section>
        <form className="add-comment-form" onSubmit={(event) => {
            event.preventDefault()

            const commentToAdd = {
                "author": commentAuthor,
                "body": commentBody,
                "votes": commentVotes
            };
            setCommentPosted(true)
            postComment(review_id, commentToAdd)
            .then((newComment) => {
                comments((currentComments) => {
                    return [newComment, ...currentComments];
                })
            })
            .then(() => {
                setCommentAuthor('');
                setCommentBody('');
                setCommentVotes(0);
            })
        }}>

        <label htmlFor="comment-author">Comment Author</label>
        <input name="comment-author" value={commentAuthor} required onChange={(event) =>{
            setCommentAuthor(event.target.value)
        }}></input>
        <label htmlFor="comment-body">Comment</label>
        <input name="comment-body" value={commentBody} required onChange={(event) =>{
            setCommentBody(event.target.value)
        }}></input>
        <button className="submit-button" >Submit</button>
        </form>
        {commentPosted ? <h2 className="posted-comment">Your Comment Has Been Posted!</h2> : null}
    </section>
}

export default AddComment;