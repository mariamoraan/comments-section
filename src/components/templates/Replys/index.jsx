import React from 'react'
import './styles.css'

import CommentTemplate from '../CommentTemplate'

const Replys = ({replys=[], repliedId, setMainComments}) => {
    return(
        <div className="replys">
            {
                replys.map((c) => 
                    <CommentTemplate key={c} commentId={c} repliedId={repliedId} setMainComments={setMainComments}/>
                )
            }
        </div>
    )
}

export default Replys