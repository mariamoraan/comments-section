import React, {useState} from 'react'
import './styles.css'

import Comment from '../../organisms/Comment'
import Replys from '../Replys'
import Reply from '../../organisms/Reply'
import CommentUpdate from '../../organisms/CommentUpdate'

import {getCommentById} from '../../../services/getComment'


const CommentTemplate = ({commentId , replys=[], setMainComments}) => {
    const [isReplying, setIsReplying] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const comment = getCommentById(commentId)
    return(
        <div className="comment-template">
            {commentId && !isEditing &&
             <Comment 
                isReplying={isReplying} setIsReplying={setIsReplying}
                isEditing={isEditing} setIsEditing={setIsEditing}
                setMainComments={setMainComments}
                userName={comment?.user?.username}
                text={comment?.content}
                score={comment?.score}
                id={comment?.id}
                image={comment?.user?.image?.png}
                />
            }
            {commentId && isEditing &&
             <CommentUpdate 
                isEditing={isEditing} setIsEditing={setIsEditing}
                image={comment?.user?.image?.png}
                value={comment?.content}
             />
            }
            <Replys  replys={replys} repliedId={commentId} setMainComments={setMainComments}/>
            { isReplying ? <Reply repliedId={commentId} setMainComments={setMainComments} /> : '' }
        </div>
    )
}

export default CommentTemplate