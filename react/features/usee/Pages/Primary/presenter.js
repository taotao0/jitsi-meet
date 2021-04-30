import React from 'react'
import { useTranslation } from 'react-i18next'

import FunctionDescription from './components/FunctionDescription'

import {
    LANG_PREFIX,
    Functions
} from './constants'

import { UserStatus } from '../Login/constants'

const PrimaryPresenter = (props) => {
    const {
        roomName,
        loginState,
        ModalInfo,
        handleInputChanged,
        handleBtnClicked
    } = props

    const { t } = useTranslation()

    return (
        <>
            <div className = 'pm-wrapper'>
                <img
                    className = 'pm-img'
                    src = '../../../../../images/primary.png'
                    srcSet="../../../../../images/primary@2x.png 2x, ../../../../../images/primary@3x.png 3x">
                </img>
                <form className = 'pm-form'>
                    {
                        t(`${LANG_PREFIX}.desc`).split('\n').map(line => (
                            <h1 key = { line } className = 'pm-form-desc'>
                                { line }
                            </h1>
                        ))
                    }
                    {
                        t(`${LANG_PREFIX}.subDesc`).split('\n').map(line => (
                            <span key = { line } className = 'pm-form-subDesc'>
                                { line }
                            </span>
                        ))
                    }
                    <div className = 'pm-input-wrapper'>
                        <input
                            className = 'pm-input'
                            type = 'text'
                            value = { roomName }
                            placeholder = { t(`${LANG_PREFIX}.inputPlaceholder`) }
                            onChange = { handleInputChanged } >
                        </input>
                        <button
                            className = 'pm-input-btn'
                            type = 'button'
                            name = 'pmInputBtn'
                            onClick = { handleBtnClicked }>
                            { t(`${LANG_PREFIX}.joinBtn`) }
                        </button>
                    </div>
                    {
                        loginState.userStatus === UserStatus.MEMBER && (
                            <button
                                className = 'pm-room-btn'
                                type = 'button'
                                name = 'pmRoomBtn'
                                onClick = { handleBtnClicked }>
                                { t(`${LANG_PREFIX}.personalRoomJoin`) }
                            </button>
                        )
                    }    
                </form>                
            </div>
            <div className = 'pm-fnc-wrapper'>
                <section className = 'pm-fnc-desc-wrapper'>
                    <p className = 'pm-fnc-desc'>
                        { t(`${LANG_PREFIX}.Contents.desc`) }
                    </p>
                    <p className = 'pm-fnc-subDesc'>
                        { t(`${LANG_PREFIX}.Contents.subDesc`) }
                    </p>
                </section>
                <section className = 'pm-fnc-func-wrapper'>
                    {
                        Functions.map(elem => (
                            <FunctionDescription
                                key = { elem } 
                                elem = { elem } />
                        ))
                    }
                </section>
            </div>
            {
                ModalInfo && ModalInfo.modalComponent &&
                    ModalInfo.modalComponent(ModalInfo.modalComponentProps)
            }
        </>
    )
}

export default PrimaryPresenter