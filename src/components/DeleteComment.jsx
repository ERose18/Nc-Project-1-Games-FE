import { UserContext} from "../utils/context";
import { useContext, useState } from "react";
import { deleteComment } from "../api";

const DeleteComment = ({comment}) => {
    const {user} = useContext(UserContext);
    const [deleted, setDeleted] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteHandler = () => {
        if(user === comment.author){
            setIsDeleting(true);
            deleteComment(comment)
            .then(() => {
                setDeleted(true);
                setIsDeleting(false);
        })}
    }

    return <section>
        <div  className="comment-delete">
        {user === comment.author ? <button onClick={deleteHandler}>Delete Comment</button> : null}
        </div>
        <div className="deleted-messages">
        {isDeleting && !deleted ? <h2>Deleting Comment...</h2> : null}
        {deleted && !isDeleting ? <h2>Comment Has Been Deleted!</h2> : null}
        </div>
    </section>
}

export default DeleteComment;