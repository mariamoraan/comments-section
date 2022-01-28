import React, {useEffect} from 'react'
import './styles.css'

const Text = ({
    id=0,
    text=""}) => {
    useEffect(() => {
        const comment = document.getElementById(id)
        while (comment.firstChild) {
            comment.removeChild(comment.firstChild);
        }
        var text_accumulator = ''
        text.split(' ').forEach((value,i) => {
            if(value[0] !== '@'){
                text_accumulator = text_accumulator + ' ' + value
            }
            else{
                comment.appendChild(document.createTextNode(text_accumulator + ' '))
                text_accumulator = ''
                var mention = document.createElement('span')
                mention.innerHTML = value
                mention.classList.add('mention')
                comment.appendChild(mention)
            }     
            if(i === (text.split(' ').length - 1)) {
                comment.appendChild(document.createTextNode(text_accumulator))
                text_accumulator = ''
            }     
        })
    }, [id, text])
    return(
        <p className="comment-text" id={id}></p>
    )
}

export default Text