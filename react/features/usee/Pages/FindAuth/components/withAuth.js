import React from 'react'
import { useTranslation } from 'react-i18next'

import {
    LANG_PREFIX,
    AuthMethod
} from '../constants'

const withAuth = (WrappedComponent) => {
    return (props) => {
        const {
            activeTab,
            authMethod,
            handleAuthMethodClicked
        } = props

        const { t } = useTranslation()

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
                <WrappedComponent activeTab = { activeTab } />
            </div>
        )
    }
}

export default withAuth