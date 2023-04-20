
const CommentCard = ({comment}) => {
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
}

export default CommentCard;