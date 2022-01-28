import React from 'react'
import './styles.css'

import VoteButton from '../../molecules/VoteButton'
import ActionButton from '../../molecules/ActionButton'
import UserInfo from '../../molecules/UserInfo'
import TextArea from '../../atoms/Textarea'
import Button from '../../atoms/Button'

const CommentUpdate = ({isEditing, setIsEditing, image, value}) => {
    return(
        <div className="comment-update">
            <VoteButton />
            <UserInfo image={image}/>
            <div className="action-buttons">
                <ActionButton type="delete"/>
                <ActionButton type="edit" onClick={()=>{setIsEditing(!isEditing)}}/>
            </div>
            <TextArea value={value}/>
            <Button message="UPDATE" />
        </div>
    )
}

export default CommentUpdate