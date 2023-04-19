import { patchVotes } from "../api"

const ReviewVotes = ({review_id, setVotes}) => {

    const plusVoteHandler = () => {
        setVotes((votes) => {
            return votes + 1
        });
        patchVotes(review_id, 1)
        .catch((err) => {
            if(err){throw err};
            setVotes((votes) => {
                return votes - 1
            });
        });
    };

    const minusVoteHandler = () => {
        setVotes((votes) => {
            return votes - 1
        });
        patchVotes(review_id, -1)
        .catch((err) => {
            if(err){throw err};
            setVotes((votes) => {
                return votes + 1
            });
        });
    };

    return <section>
            <button onClick={plusVoteHandler}><i class="arrow up"></i></button>
            <button onClick={minusVoteHandler}><i class="arrow down"></i></button>
     </section>
}

export default ReviewVotes;