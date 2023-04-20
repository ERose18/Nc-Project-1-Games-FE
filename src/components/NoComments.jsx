import AddComment from "./AddComment";

const NoComments = ({addComment, setAddComment, setComments, review_id}) => {
    return <section >
        <button className="add-comment-btn" onClick={() => setAddComment((currVal) => !currVal)}>Click Here To Add Comment!</button>
            {addComment ? <p className="no-comments">No Comments</p> : <AddComment  setComments={ setComments} review_id={review_id}/>}
    </section>
}

export default NoComments;