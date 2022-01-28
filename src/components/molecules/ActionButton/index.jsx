import React from 'react'
import './styles.css'

import DeleteIcon from '../../icons/DeleteIcon'
import EditIcon from '../../icons/EditIcon'
import ReplyIcon from '../../icons/ReplyIcon'

const ActionButton = ({type='reply', onClick}) => {
    const icons = {
        'delete': {icon:DeleteIcon, text:'Delete', color:'var(--soft-red)'},
        'edit': {icon:EditIcon, text:'Edit', color:'var(--moderate-blue)'},
        'reply':{icon:ReplyIcon, text:'Reply', color:'var(--moderate-blue)'}
    }
    var Iconcomponent = icons[type].icon
    return(
        <button className="action-button" onClick={onClick}>
            {Iconcomponent ? <Iconcomponent cfill={icons[type].color}/> : <p></p>}
            <span 
                style={{color: + icons[type].color != NaN ? icons[type].color : 'var(--moderate-blue)'}}
            >
                {icons[type].text}
            </span>
        </button>
    )
}

export default ActionButton