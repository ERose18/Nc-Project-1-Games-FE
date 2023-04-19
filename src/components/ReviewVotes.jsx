import { useState } from "react";
import { patchVotes } from "../api"

const ReviewVotes = ({review_id, setVotes}) => {
    const [hasVoted, setHasVoted] = useState(false);

    const voteHandler = (vote) => {
        setVotes((votes) => {
            return votes + vote
        });
        setHasVoted(true);
        patchVotes(review_id, hasVoted)
        .catch((err) => {
            console.log(err)
            throw err;
        })
    };

    const resetHandler = () => {
        setHasVoted(false);
    };
 
    return <section>
        <div>
            {hasVoted ? <button onClick={resetHandler}>Reset Your Vote</button> : null}
        </div>
            <button onClick={() => voteHandler(1)} disabled={hasVoted}><i className="arrow up"></i></button>
            <button onClick={() => voteHandler(-1)} disabled={hasVoted}><i className="arrow down"></i></button>
     </section>
}

export default ReviewVotes;