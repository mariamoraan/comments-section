import React, {useEffect, useState} from 'react'
import './styles.css'

const TimeAgo = ({date= new Date(2021, 11, 29)}) => {
    const [days, setDays] = useState([0, 'days'])
    useEffect(() => {
        const today = new Date()
        var diff = (today.getTime() - date.getTime()) 
        diff = diff/(1000*60*60*24)
        if(diff < 7){
            setDays([Math.floor(diff),' day'])
        }
        else if(diff >= 7 && diff < 30){
            setDays([Math.floor(diff/7), ' week'])
        }
        else{
            setDays([Math.floor(diff/30), ' month'])
        }
    }, [])
    return(
            <span className='time-ago'>{days[0]}{days[1]}{days[0] > 1 ? 's' : ''} ago</span>
    )
}

export default TimeAgo