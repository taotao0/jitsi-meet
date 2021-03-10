import React, { useState, useCallback } from 'react'

import MainContentsPresenter from './presenter'

const MainContentsContainer = () => {
    const [ meetingName, setMeetingName ] = useState('')

    const _handleInputChanged = useCallback((event) => {
        console.log(event.target.value)

        setMeetingName(event.target.value)
    }, [])

    const _handleJoinMeetingClicked = useCallback((event) => {
        console.log('join meeting clicked')

        event.preventDefault()
    }, [])

    return (
        <MainContentsPresenter
            meetingName = { meetingName }
            handleInputChanged = { _handleInputChanged }
            handleJoinMeetingClicked = { _handleJoinMeetingClicked } />
    )
}

export default MainContentsContainer