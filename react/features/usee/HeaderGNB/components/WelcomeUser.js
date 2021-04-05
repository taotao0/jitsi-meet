import React from 'react'
import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { LANG_PREFIX } from '../constants'

const WelcomeUser = (props) => {
    const { userInfo } = props
    const { t } = useTranslation()

    return (
        <>
            <FontAwesomeIcon icon = { faUser } />
            {
                userInfo && (
                <span className = 'user-welcome-txt'>
                    { t(`${LANG_PREFIX}.WelcomeUser.welcome`, { user: `${userInfo.id}` }) }
                </span>
                )
            }        
        </>
    )
}

export default WelcomeUser