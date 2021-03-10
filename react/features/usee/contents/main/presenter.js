import React from 'react'

import { useTranslation } from 'react-i18next'

const MainContentsPresenter = (props) => {
    const {
        meetingName,
        handleInputChanged,
        handleJoinMeetingClicked
    } = props

    const { t } = useTranslation()

    return (
        <main className = 'contents-container'>
            <div className = 'main-top-container'>
                <form
                    className = 'main-form-container'
                    onSubmit = { handleJoinMeetingClicked }>
                    <h1 className = 'main-form-text'>
                        { t('usee.contents.main.description') }
                    </h1>
                    <div className = 'main-input-container'>
                        <input
                            className = 'main-input'
                            type = 'text'
                            value = { meetingName }
                            placeholder = { t('usee.contents.main.inputPlaceholder') }
                            onChange = { handleInputChanged } >
                        </input>
                        <button
                            className = 'main-input-button'
                            type = 'submit'>
                            { t('usee.contents.main.join') }
                        </button>
                    </div>
                </form>
            </div>
            <div className = 'main-content-container'>
                <h1>
                    기능 명세
                </h1>
            </div>
        </main>
    )
}

export default MainContentsPresenter