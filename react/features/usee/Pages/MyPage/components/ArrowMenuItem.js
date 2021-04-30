import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ArrowMenuItem = (props) => {
    const { title } = props
    
    return (
        <div className = 'am-wrapper'>
            <span>{ title }</span>
            <FontAwesomeIcon icon = { faAngleRight } />
        </div>
    )
}

export default ArrowMenuItem