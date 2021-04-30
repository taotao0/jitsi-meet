import React from 'react'

const withModal = (WrappedComponent) => {
    return (props) => {
        return (
            <div className = 'modal-wrapper'>
                <WrappedComponent { ...props }/>
            </div>
            
        )
    }
}

export default withModal