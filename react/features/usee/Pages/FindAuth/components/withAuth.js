import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import {
    LANG_PREFIX,
    AuthMethod,
    AuthFailReason
} from '../constants'

const withAuth = (WrappedComponent) => {
    return (props) => {
        const {
            activeTab,
            authMethod,
            fromPage,
            handleAuthMethodClicked
        } = props

        const { t } = useTranslation()
        const { failReason } = useSelector(state => state['features/usee/Pages/FindAuth'], [])

        const SELECT_AUTH_LANG_PREFIX = `${LANG_PREFIX}.WithAuth`

        return (
            <div className = 'wa-wrapper'>
                <div className = 'sa-wrapper'>
                    { t(`${SELECT_AUTH_LANG_PREFIX}.desc`) }
                    <div className = 'sa-method-wrapper'>
                        <input
                            type = 'radio'
                            id = { AuthMethod.EMAIL }
                            checked = { authMethod === AuthMethod.EMAIL }
                            onChange = { handleAuthMethodClicked } />
                        <label htmlFor = { AuthMethod.EMAIL }>
                            { t(`${SELECT_AUTH_LANG_PREFIX}.email`) }
                        </label>
                    </div>
                </div>
                <WrappedComponent
                    activeTab = { activeTab }
                    fromPage = { fromPage }
                    failReason = { failReason } />
                {
                    failReason && 
                        <div className = 'err-txt err-msg'>
                            {
                                failReason === AuthFailReason.BYEMAIL
                                    ? t(`${SELECT_AUTH_LANG_PREFIX}.errMsg`)
                                    : null
                            }
                        </div>
                }
            </div>
        )
    }
}

export default withAuth