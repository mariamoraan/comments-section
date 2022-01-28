import React, {useState} from 'react'
import './styles.css'

import PlusIcon from '../../icons/PlusIcon'
import MinusIcon from '../../icons/MinusIcon'

const VoteButton = ({score=0}) => {
    const [votes, setVotes] = useState(score)
    return(
        <div className="vote-button">
            <button className="vote-button-icon" onClick={() => {setVotes(votes+1)}}><PlusIcon /></button>
            <span>{votes}</span>
            <button className="vote-button-icon" onClick={() => {setVotes(votes-1)}}><MinusIcon /></button>
        </div>
    )
}

export default VoteButton