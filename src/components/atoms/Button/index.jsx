import React from 'react'
import './styles.css'

const Button = ({type='default', message='send', onClick}) => {
    return(
        <button className={'button ' + ' ' + type} onClick={onClick}>{message}</button>
    )
}

export default Button