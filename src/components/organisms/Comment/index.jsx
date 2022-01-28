import React, {useState} from 'react'
import './styles.css'

import VoteButton from '../../molecules/VoteButton'
import ActionButton from '../../molecules/ActionButton'
import Text from '../../atoms/Text'
import UserInfo from '../../molecules/UserInfo'
import Alert from '../../organisms/Alert'

import { deleteComment, getCurrentUser } from '../../../services/getComment'

const Comment = ({userName, isReplying, setIsReplying, isEditing, setIsEditing, text, score, id, image, setMainComments}) => {
    const [active, setActive] = useState(false)
    const actualUser = getCurrentUser().username
    const handleDelete = () => {
        setMainComments(
            deleteComment(id)
        )
        setActive(!active)
    }
    return(
        <div className="comment">
            <VoteButton score={score} />
            <UserInfo userName={userName} image={image} />
            
            {
                userName === actualUser ?
                (
                    <div className="action-buttons">
                        <ActionButton type="delete" onClick={() => {setActive(!active)}}/>
                        <ActionButton type="edit" onClick={()=>{setIsEditing(!isEditing)}}/>
                    </div>
                )
                :
                (
                    <div className="action-buttons">
                        <ActionButton type="reply" 
                            onClick={() => {setIsReplying(!isReplying)}}
                        />
                    </div>
                )
            }
            
            <Text text={text} id={id}/>
            <Alert active={active} setActive={setActive} handleDelete={handleDelete}/>
        </div>
    )
}

export default Comment