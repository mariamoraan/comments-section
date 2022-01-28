import React from 'react'
import './styles.css'

const Button = ({type='default', message='send'}) => {
    return(
        <button className={'button' + ' ' + type}>{message}</button>
    )
}

export default Button