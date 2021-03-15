import React from 'react'

import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

const MobilePresenter = (props) => {
    const { handleStoreBtnClicked } = props

    const { t } = useTranslation()

    return (
        <div className = 'mobile-container'>
            <FontAwesomeIcon
                icon = { faMobileAlt }
                size = '5x' /> 
            <h1 className = 'mobile-description'>
                { t('usee.contents.mobile.description') }
            </h1>
            <div className = 'mobile-button-container'>
                <button
                    className = 'mobile-button'
                    type = 'button'
                    name = 'appStore'
                    onClick = { handleStoreBtnClicked }>
                    <FontAwesomeIcon
                        icon = { faAppStore }
                        size = '1x' />
                    <span className = 'button-inner-text'>
                        App Store
                    </span>
                </button>
                <button
                    className = 'mobile-button'
                    type = 'button'
                    name = 'playStore'
                    onClick = { handleStoreBtnClicked }>
                    <FontAwesomeIcon
                        icon = { faGooglePlay }
                        size = '1x' />
                    <span className = 'button-inner-text'>
                        Play Store
                    </span>
                </button>
            </div>
        </div>
    )
}

export default MobilePresenter