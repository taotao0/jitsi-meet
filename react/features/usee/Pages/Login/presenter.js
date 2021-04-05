import React, { useCallback } from 'react'
import Switch from 'react-switch'

import { useTranslation } from 'react-i18next'

import {
    LANG_PREFIX,
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
        id,
        pwd,
        autoLogin,
        failReason,
        modalVisible,
        idInput,
        pwdInput,
        loginBtnClicked,
        LoginInputResetBtnClicked,
        handleSwitchClicked,
        onChange,
        modalOpen,
        modalClose
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'common-wrapper lg-wrapper'>
            <div className = 'lg-auth-wrapper'>
                <h1>{ t(`${LANG_PREFIX}.title`) }</h1>
                <form className = 'lg-auth-form'>
                    <div className = 'lg-input-wrapper'>
                        <input 
                            className = 'lg-input'
                            type = 'text'
                            placeholder = { t(`${LANG_PREFIX}.id`) }
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
                            placeholder = { t(`${LANG_PREFIX}.pwd`) }
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
                        <p>{ t(`${LANG_PREFIX}.lgAuto`) }</p>
                        <Switch
                            className = 'lg-switch'
                            checked = { autoLogin }
                            onChange = { handleSwitchClicked }
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
                            { t(`${LANG_PREFIX}.lgBtn`) }
                    </button>
                    <div className = 'lg-find-wrapper'>
                        <a
                            name = 'findId'
                            onClick = { modalOpen }>
                            { t(`${LANG_PREFIX}.findId`) }
                        </a>
                        <a
                            name = 'findPwd'
                            onClick = { modalOpen }>
                            { t(`${LANG_PREFIX}.findPwd`) }
                        </a>
                    </div>
                    {
                        //FIXME:!
                        failReason && (
                            <span className = 'err-txt'>
                                { t(`${LANG_PREFIX}.errMsg`) }
                            </span>
                        )
                    }
                </form>
            </div>
            <div className = 'lg-sep-wrapper'>
                <hr/>
                <span className = 'lg-sep-txt'>
                    OR
                </span>
            </div>
            <p className = 'lg-other-auth-desc'>
                { t(`${LANG_PREFIX}.lgOtherAuthDesc`) }
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