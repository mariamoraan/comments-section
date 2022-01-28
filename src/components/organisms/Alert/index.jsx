import React, {useState} from 'react'
import './styles.css'

import Button from '../../atoms/Button'

const Alert = ({active, setActive, handleDelete}) => {
    return(
        <div className={active ? "alert-container" : "alert-container none" }>
            <div className="alert">
                <h1>Delete Comment</h1>
                <p>
                    Are you sure you want to delete this comment ? This will remove the comment and can't be undone
                </p>
                <div className="options">
                    <Button type='cancel' message='NO, CANCEL' onClick={() => {setActive(!active)}}/>
                    <Button type='delete' message='YES, DELETE' onClick={handleDelete}/>
                </div>
            </div>
        </div>
    )
}

export default Alert