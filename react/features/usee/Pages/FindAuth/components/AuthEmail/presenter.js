import React from 'react'
import { useTranslation } from 'react-i18next'

import {
    LANG_PREFIX,
    FindAuthTab,
    AuthEmailStatus
} from '../../constants'

const AuthEmailPresenter = (props) => {
    const {
        activeTab,
        input,
        inputRef,
        status,
        handleInputChanged,
        handleSubmitBtnClicked
    } = props

    const { t } = useTranslation()

    const AUTH_EMAIL_LANG_PREFIX = `${LANG_PREFIX}.AuthEmail`

    return (
        <div className = 'ae-wrapper'>
            <ul>
                <li>
                    { t(`${AUTH_EMAIL_LANG_PREFIX}.desc`) }
                </li>
                <li>
                    {
                        activeTab === FindAuthTab.idTab
                            ? t(`${AUTH_EMAIL_LANG_PREFIX}.idDesc`)
                            : t(`${AUTH_EMAIL_LANG_PREFIX}.pwdDesc`)
                    }
                </li>
            </ul>
            <form onSubmit = { handleSubmitBtnClicked }>
                <input
                    className = 'input-auth-email'
                    type = 'text'
                    ref = { inputRef }
                    placeholder = { t(`${AUTH_EMAIL_LANG_PREFIX}.inputPlaceholder`) }
                    value = { input }
                    onChange = { handleInputChanged } />
                <button type = 'submit'>
                    { t(`${AUTH_EMAIL_LANG_PREFIX}.submit`) }
                </button>
                {
                    status === AuthEmailStatus.INVALID && 
                        <div className = 'err-txt err-msg'>
                            { t(`${AUTH_EMAIL_LANG_PREFIX}.errMsg`) }
                        </div>
                }
            </form>
        </div>
    )
}

export default AuthEmailPresenter