import { useState } from "react";
import { patchVotes } from "../api"

const ReviewVotes = ({review_id, setVotes}) => {
    const [hasVoted, setHasVoted] = useState(false);

    const plusVoteHandler = () => {
        setVotes((votes) => {
            return votes + 1
        });
        setHasVoted(true);
        patchVotes(review_id, 1)
        .catch((err) => {
            if(err){throw err};
            setVotes((votes) => {
                return votes - 1
            });
        })
    };

    const minusVoteHandler = () => {
        setVotes((votes) => {
            return votes - 1
        });
        setHasVoted(true);
        patchVotes(review_id, -1)
        .catch((err) => {
            if(err){throw err};
            setVotes((votes) => {
                return votes + 1
            });
        })
    };

    const resetHandler = () => {
        setHasVoted(false);
    };
 
    return <section>
        <div>
            {hasVoted ? <button onClick={resetHandler}>Reset Your Vote</button> : null}
        </div>
            <button onClick={plusVoteHandler} disabled={hasVoted}><i className="arrow up"></i></button> &nbsp;
            <button onClick={minusVoteHandler} disabled={hasVoted}><i className="arrow down"></i></button>
     </section>
}

export default ReviewVotes;