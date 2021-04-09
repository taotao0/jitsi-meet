import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ArrowMenuItem = (props) => {
    const {
        title,
        arrowBtnClicked
    } = props
    
    return (
        <div className = 'am-wrapper'>
            <span>{ title }</span>
            <button
                type = 'button'
                onClick = { arrowBtnClicked }>
                <FontAwesomeIcon
                    icon = { faAngleRight } />
            </button>
        </div>
    )
}

export default ArrowMenuItem