import React from 'react'

import { useTranslation } from 'react-i18next'

const GlobalMenuPresenter = (props) => {
    const {
        handleBtnClicked
    } = props

    const { t } = useTranslation()

    return (
        <header className = 'gm-header'>
            <div className = 'gm-inner'>
                <button
                    className = 'gm-logo-button'
                    type = 'button'
                    name = 'logo'
                    onClick = { handleBtnClicked }>
                    <img
                        src = '../../../../images/usee-logo.png'
                        alt = 'usee-logo' />
                </button>
                <div className = 'gm-button-contents'>
                    <button
                        className = 'gm-button'
                        type = 'button'
                        name = 'login'
                        onClick = { handleBtnClicked }>
                        { t('usee.globalMenu.login') }
                    </button>
                    <button
                        className = 'gm-button'
                        type = 'button'
                        name = 'memberJoin'
                        onClick = { handleBtnClicked }>
                        { t('usee.globalMenu.memberJoin') }
                    </button>
                    <button
                        className = 'gm-button'
                        type = 'button'
                        name = 'findPw'
                        onClick = { handleBtnClicked }>
                        { t('usee.globalMenu.findPw') }
                    </button>
                </div>
            </div>
        </header>
    )
}

export default GlobalMenuPresenter