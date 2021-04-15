import React from 'react'
import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { LANG_PREFIX } from '../constants'

const WelcomeUser = (props) => {
    const { loginUserInfo } = props
    const { t } = useTranslation()

    return (
        <>
            <FontAwesomeIcon icon = { faUser } />
            {
                loginUserInfo && (
                <span className = 'user-welcome-txt'>
                    { t(`${LANG_PREFIX}.WelcomeUser.welcome`, { user: `${loginUserInfo.nickName}` }) }
                </span>
                )
            }        
        </>
    )
}

export default WelcomeUser