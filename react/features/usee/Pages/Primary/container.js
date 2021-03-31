import React, { useState, useCallback } from 'react'

import PrimaryPresenter from './presenter'

const PrimaryContainer = () => {
    const [ meetingName, setMeetingName ] = useState('')

    const _handleInputChanged = useCallback((event) => {
        setMeetingName(event.target.value)
    }, [])

    const _handleJoinMeetingClicked = useCallback((event) => {
        event.preventDefault()
    }, [])

    return (
        <PrimaryPresenter
            meetingName = { meetingName }
            handleInputChanged = { _handleInputChanged }
            handleJoinMeetingClicked = { _handleJoinMeetingClicked } />
    )
}

export default PrimaryContainer