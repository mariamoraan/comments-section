import React, {useState} from 'react'

import CommentTemplate from '../CommentTemplate'
import { getMainComments, CommentsContext } from '../../../services/getComment'

const ListOfComments = () => {
    const [mainComments, setMainComments] = useState(getMainComments())
    return(
        <div>
            {
                mainComments.map((c)=> 
                <CommentTemplate commentId={c.id} replys={c.replies} key={c.id} setMainComments={setMainComments}  />
                )
            }
        </div>
    )
}

export default ListOfComments