import React from 'react'
import './styles.css'

import juliusomo from '../../../assets/image-juliusomo.png'
import amyrobson from '../../../assets/image-amyrobson.png'
import maxblagun from '../../../assets/image-maxblagun.png'
import ramsesmiron from '../../../assets/image-ramsesmiron.png'

const UserImage = ({image='maxblagun' , size='medium'}) => {
    var images = {
        'juliusomo':juliusomo,
        'amyrobson':amyrobson,
        'maxblagun':maxblagun,
        'ramsesmiron':ramsesmiron
    }
    return(
        <img alt="user icon" src={images[image]} className={'user-image ' + size}/>
    )
}

export default UserImage