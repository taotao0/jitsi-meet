import React from 'react'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from '../constants'
import { ACCOUNT_ALT } from '../../usee_config'

const WelcomeUser = (props) => {
    const { loginUserInfo } = props
    const { t } = useTranslation()

    return (
        <div className = 'welcome-user'>
            <img
                src = './images/account.png'
                srcSet = './images/account@2x.png 2x, ./images/account@3x.png 3x'
                alt = { ACCOUNT_ALT } />
            {
                loginUserInfo && (
                <span>
                    { t(`${LANG_PREFIX}.WelcomeUser.welcome`, { user: `${loginUserInfo.nickName}` }) }
                </span>
                )
            }        
        </div>
    )
}

export default WelcomeUser