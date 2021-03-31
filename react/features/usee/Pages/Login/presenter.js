import React from 'react'
import Switch from 'react-switch'

import { useTranslation } from 'react-i18next'

import {
    SWITCH_WIDTH,
    SWITCH_HEIGHT,
    SWITCH_COLOR,
    SWITCH_ONCOLOR
} from '../../Pages/Login/constants'

import FindIdModal from './components/FindIdModal'
import FindPwdModal from './components/FindPwdModal'

import {
    GOOGLE_LOGO_ALT,
    NAVER_LOGO_ALT,
    KAKAO_LOGO_ALT
} from '../../usee_config'

const LoginPresenter = (props) => {
    const {
        loginBtnClicked,
        LoginInputResetBtnClicked,
        handleLoginStateSaved,
        isLoginStateSaved,
        onChange,
        id,
        pwd,
        altmsg,
        modalVisible,
        idInput,
        pwdInput,
        modalOpen,
        modalClose
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'common-wrapper lg-wrapper'>
            <div className = 'lg-auth-wrapper'>
                <h1>{ t('usee.contents.login.login') }</h1>
                <form className = 'lg-auth-form'>
                    <div className = 'lg-input-wrapper'>
                        <input 
                            className = 'lg-input'
                            type = 'text'
                            placeholder = { t('usee.contents.login.login') }
                            name = 'id'
                            ref = { idInput }
                            onChange = { onChange }
                            value = { id } />
                            <button
                                className = 'lg-input-x-btn'
                                type = 'button'
                                name = 'id'
                                onClick = { LoginInputResetBtnClicked }>
                                <img src = '../../../../images/Xbutton.png' />
                            </button>
                    </div>
                    <div className = 'lg-input-wrapper'>
                        <input
                            className = 'lg-input'
                            type = 'password'
                            placeholder = { t('usee.contents.login.pwd') }
                            name = 'pwd'
                            ref = { pwdInput }
                            onChange = { onChange }
                            value = { pwd } />
                            <button
                                className = 'lg-input-x-btn'
                                type = 'button'
                                name = 'pwd'
                                onClick = { LoginInputResetBtnClicked }>
                                <img src = '../../../../images/Xbutton.png' />
                            </button>
                    </div>
                    <div className = 'lg-state-save'>
                        <p>{ t('usee.contents.login.loginStateSave') }</p>
                        <Switch
                            className = 'lg-switch'
                            checked = { isLoginStateSaved }
                            onChange = { handleLoginStateSaved }
                            color = { SWITCH_COLOR }
                            onColor = { SWITCH_ONCOLOR }
                            uncheckedIcon = { false }
                            checkedIcon = { false }
                            width = { SWITCH_WIDTH }
                            height = { SWITCH_HEIGHT } />
                    </div>
                    <button
                        className = 'lg-btn'
                        type = 'submit'
                        onClick = { loginBtnClicked } >
                            { t('usee.contents.login.login') }
                    </button>
                    <div className = 'lg-find-wrapper'>
                        <a
                            name = 'findId'
                            onClick = { modalOpen }>
                            { t('usee.contents.login.findId') }
                        </a>
                        <a
                            name = 'findPwd'
                            onClick = { modalOpen }>
                            { t('usee.contents.login.findPwd') }
                        </a>
                    </div>
                    <span className = 'err-txt'>
                        { altmsg }
                    </span>
                </form>
            </div>
            <div className = 'lg-sep-wrapper'>
                <hr/>
                <span className = 'lg-sep-txt'>
                    OR
                </span>
            </div>
            <p className = 'lg-other-auth-desc'>
                { t('usee.contents.login.loginWithOtherSns') }
            </p>
            <div className = 'lg-other-auth-logo-wrapper'>
                <a>
                    <img 
                        src = '../../../../images/chrome.png'
                        alt = { GOOGLE_LOGO_ALT } />
                </a>
                <a>
                    <img
                        src = '../../../../images/naver.png'
                        alt = { NAVER_LOGO_ALT } />
                </a>
                <a>
                    <img
                        src = '../../../../images/kakaotalk.png' 
                        alt = { KAKAO_LOGO_ALT } />
                </a>
            </div>
            <FindIdModal
                visible = { modalVisible.findId }
                close = { modalClose }/>
            <FindPwdModal
                visible = { modalVisible.findPwd }
                close = { modalClose } />
        </div>
    )
}

export default LoginPresenter