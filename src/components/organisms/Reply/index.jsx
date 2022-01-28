import React from 'react'
import './styles.css'

import UserImage from '../../atoms/UserImage'
import Button from '../../atoms/Button'
import TextArea from '../../atoms/Textarea'

import { addComment, getCurrentUser, getMainComments } from '../../../services/getComment'

const Reply = ({repliedId, setMainComments}) => {
    const addReply = () => {
      setMainComments(addComment(repliedId, {
        "id": 0,
        "content": document.getElementById("textarea-reply-"+repliedId)?.value || 'Hola',
        "createdAt": "2 days ago",
        "score": 2,
        "replyingTo": "ramsesmiron",
        "user": {
          "image": { 
            "png": getCurrentUser().image.png,
            "webp": "juliusomo.webp"
          },
          "username": getCurrentUser().username
        },
        "replies": []
    }))
    }
    return(
        <div className="reply">
            <UserImage size="large" image={getCurrentUser().image.png}/>
            <TextArea placeholder="Add a comment..." id={"textarea-reply-"+repliedId}/>
            <Button onClick={()=>{addReply()}} />
        </div>
    )
}

export default Reply