import React from 'react'
import './styles.css'

import UserImage from '../../atoms/UserImage'
import TimeAgo from '../../atoms/TimeAgo'
import { getCurrentUser } from '../../../services/getComment'

const UserInfo = ({userName, image}) => {
    const actualUser = getCurrentUser().username
    return(
        <div className="user-component">
            <UserImage image={image} />
            <span className="user-component-name">{userName}</span>
            {userName == actualUser ? <span className="you-tag">you</span> : ''}
            <TimeAgo />
        </div>
    )
}

export default UserInfo