import React from 'react'

const SimpleInfoView = (props) => {
    const { title, value } = props

    return (
        <div className = 'siv-wrapper'>
            <div className = 'siv-key-wrapper'>
                { title }
            </div>
            <div className = 'siv-value-wrapper'>
                { value }
            </div>
        </div>

    )
}

export default SimpleInfoView