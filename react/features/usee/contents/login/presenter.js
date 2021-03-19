import React from 'react'
import Switch from 'react-switch'

import { useTranslation } from 'react-i18next'

import {
    SWITCH_WIDTH,
    SWITCH_HEIGHT,
    SWITCH_COLOR,
    SWITCH_ONCOLOR
} from './constants'

import FindIdModal from './components/FindIdModal'
import FindPwdModal from './components/FindPwdModal'

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
        modalOpen,
        modalClose
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'cc login-contents-container'>
            <div className = 'login-contents-main-container'>
                <h1>{ t('usee.contents.login.login') }</h1>
                <form className = 'login-contents-form'>
                    <div>
                        <div className = 'login-input-id-pwd-box'>
                            <input 
                                className = 'login-input-id-pwd'
                                type = 'text'
                                placeholder = { t('usee.contents.login.login') }
                                name = 'id'
                                onChange = { onChange }
                                value = { id } />
                                <button
                                    className = 'login-input-reset-btn'
                                    type = 'button'
                                    name = 'id'
                                    onClick = { LoginInputResetBtnClicked }>
                                    <img src = '../../../../images/Xbutton.png' />
                                </button>
                        </div>
                        <div className = 'login-input-id-pwd-box'>
                            <input
                                className = 'login-input-id-pwd'
                                type = 'password'
                                placeholder = { t('usee.contents.login.pwd') }
                                name = 'pwd'
                                onChange = { onChange }
                                value = { pwd } />
                                <button
                                    className = 'login-input-reset-btn'
                                    type = 'button'
                                    name = 'pwd'
                                    onClick = { LoginInputResetBtnClicked }>
                                    <img src = '../../../../images/Xbutton.png' />
                                </button>
                        </div>
                        <div className = 'login-state-save'>
                            <span>{ altmsg }</span>
                            <div className = 'login-state-save-msg'>
                                <p>{ t('usee.contents.login.loginStateSave') }</p>
                                <Switch
                                    className = 'login-state-save-switch'
                                    checked = { isLoginStateSaved }
                                    onChange = { handleLoginStateSaved }
                                    color = { SWITCH_COLOR }
                                    onColor = { SWITCH_ONCOLOR }
                                    uncheckedIcon = { false }
                                    checkedIcon = { false }
                                    width = { SWITCH_WIDTH }
                                    height = { SWITCH_HEIGHT } />
                            </div>
                        </div>
                        <div>
                            <button
                                className = 'login-input-button'
                                type = 'submit'
                                onClick = { loginBtnClicked } >
                                    { t('usee.contents.login.login') }
                            </button>
                        </div>
                        <div className = 'login-find-id-pwd'>
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
                    </div>
                </form>
            </div>
            <div className = 'login-contents-container-separator'>
                <hr/>
                <span className = 'textd'>
                    OR
                </span>
            </div>
            <div className = 'login-with-other-auth-contents-container'>
                <div className = 'login-with-other-auth-msg'>
                    <p className = 'login-with-other-sns-msg'>
                        { t('usee.contents.login.loginWithOtherSns') }
                    </p>
                </div>
                <div className = 'login-with-other-sns-logo'>
                    <a>
                        <img 
                            src = '../../../../images/chrome.png'
                            alt = 'google-logo' />
                    </a>
                    <a>
                        <img
                            src = '../../../../images/naver.png'
                            alt = 'naver-log' />
                    </a>
                    <a>
                        <img
                            src = '../../../../images/kakaotalk.png' 
                            alt = 'kakaotalk-logo' />
                    </a>
                </div>
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