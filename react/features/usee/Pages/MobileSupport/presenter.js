import React from 'react'

import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

import { LANG_PREFIX } from './constants'

const MobileSupportPresenter = (props) => {
    const { handleStoreBtnClicked } = props

    const { t } = useTranslation()

    return (
        <div className = 'common-wrapper mb-wrapper'>
            <FontAwesomeIcon
                icon = { faMobileAlt }
                size = '5x' /> 
            <h1 className = 'mb-desc'>
                { t(`${LANG_PREFIX}.title`) }
            </h1>
            <div className = 'mb-btn-wrapper'>
                <button
                    className = 'mb-btn'
                    type = 'button'
                    name = 'appStore'
                    onClick = { handleStoreBtnClicked }>
                    <FontAwesomeIcon
                        icon = { faAppStore }
                        size = '1x' />
                    <span className = 'btn-inner-txt'>
                        App Store
                    </span>
                </button>
                <button
                    className = 'mb-btn'
                    type = 'button'
                    name = 'playStore'
                    onClick = { handleStoreBtnClicked }>
                    <FontAwesomeIcon
                        icon = { faGooglePlay }
                        size = '1x' />
                    <span className = 'btn-inner-txt'>
                        Play Store
                    </span>
                </button>
            </div>
        </div>
    )
}

export default MobileSupportPresenter