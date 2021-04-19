import React from 'react'

import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'

const PrimaryPresenter = (props) => {
    const {
        roomName,
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
                        { t(`${LANG_PREFIX}.desc`) }
                    </h1>
                    <div className = 'pm-input-wrapper'>
                        <input
                            className = 'pm-input'
                            type = 'text'
                            value = { roomName }
                            placeholder = { t(`${LANG_PREFIX}.inputPlaceholder`) }
                            onChange = { handleInputChanged } >
                        </input>
                        <button
                            className = 'pm-input-btn'
                            type = 'submit'>
                            { t(`${LANG_PREFIX}.joinBtn`) }
                        </button>
                    </div>
                </form>
            </div>
            <div className = 'pm-fnc-wrapper'>
            </div>
        </>
    )
}

export default PrimaryPresenter