import React from 'react'

const UseeInput = (props) => {
    const {
        inputProps,
        xBtnProps
    } = props

    return (
        <div className = 'cm-input-wrapper'>
            <input { ...inputProps } />
            <button { ...xBtnProps }>
                <img src = '../../../images/Xbutton.png' />
            </button>
            
        </div>
    )
}

export default UseeInput