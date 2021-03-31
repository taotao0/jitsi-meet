import React from 'react'

import { useTranslation } from 'react-i18next'

const PrimaryPresenter = (props) => {
    const {
        meetingName,
        handleInputChanged,
        handleJoinMeetingClicked
    } = props

    const { t } = useTranslation()

    return (
        <>
            <div className = 'pm-wrapper'>
                <form
                    className = 'pm-form'
                    onSubmit = { handleJoinMeetingClicked }>
                    <h1 className = 'pm-form-desc'>
                        { t('usee.contents.main.description') }
                    </h1>
                    <div className = 'pm-input-wrapper'>
                        <input
                            className = 'pm-input'
                            type = 'text'
                            value = { meetingName }
                            placeholder = { t('usee.contents.main.inputPlaceholder') }
                            onChange = { handleInputChanged } >
                        </input>
                        <button
                            className = 'pm-input-btn'
                            type = 'submit'>
                            { t('usee.contents.main.join') }
                        </button>
                    </div>
                </form>
            </div>
            <div className = 'pm-fnc-wrapper'>
                <h1>
                    기능 명세
                </h1>
            </div>
        </>
    )
}

export default PrimaryPresenter