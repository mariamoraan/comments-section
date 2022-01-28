import React from 'react'
import './styles.css'

const TextArea = ({rows=3, placeholder='', value}) => {
    return(
        <textarea className="textarea" rows={rows} placeholder={placeholder} defaultValue={value}></textarea>
    )
}

export default TextArea