import React from 'react'
import Switch from 'react-switch'
import { useTranslation } from 'react-i18next'
import { Link, Redirect } from 'react-router-dom'

import UseeInput from '../../Common/UseeInput'

import { makeFindAuthLink } from './functions'

import {
    LANG_PREFIX,
    SWITCH_WIDTH,
    SWITCH_HEIGHT,
    SWITCH_COLOR,
    SWITCH_ONCOLOR,
    UserStatus
} from '../../Pages/Login/constants'

import { LoginFailReason } from './constants'
import { FindAuthTab } from '../FindAuth/constants'

import {
    GOOGLE_LOGO_ALT,
    NAVER_LOGO_ALT,
    KAKAO_LOGO_ALT,
    PRIMARY_ROUTE_PATH
} from '../../usee_config'


const LoginPresenter = (props) => {
    const {
        id,
        pwd,
        //autoLogin,
        query,
        userStatus,
        failReason,
        idInput,
        pwdInput,
        loginBtnClicked,
        LoginInputResetBtnClicked,
        // handleSwitchClicked,
        onChange,
    } = props

    const { t } = useTranslation()

    return (
        <>
        {
            userStatus === UserStatus.MEMBER
                ? <Redirect to = {PRIMARY_ROUTE_PATH} />
                : (
                    <div className = 'common-wrapper lg-wrapper'>
                        <div>
                            <h1>{ t(`${LANG_PREFIX}.title`) }</h1>
                            <form className = 'lg-auth-form'>
                                <UseeInput
                                    inputProps = {{
                                        type: 'text',
                                        placeholder: t(`${LANG_PREFIX}.id`),
                                        name: 'id',
                                        ref: idInput,
                                        value: id,
                                        onChange: onChange,
                                    }}
                                    xBtnProps = {{
                                        type: 'button',
                                        name: 'id',
                                        onClick: LoginInputResetBtnClicked,
                                        tabIndex: -1
                                    }} />
                                <UseeInput
                                    inputProps = {{
                                        type: 'password',
                                        placeholder: t(`${LANG_PREFIX}.pwd`),
                                        name: 'pwd',
                                        ref: pwdInput,
                                        value: pwd,
                                        onChange: onChange
                                    }}
                                    xBtnProps = {{
                                        type: 'button',
                                        name: 'pwd',
                                        onClick: LoginInputResetBtnClicked,
                                        tabIndex: -1
                                    }} />
                                {/* <div className = 'lg-state-save'>
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
                                </div> */}
                                <button
                                    className = 'lg-btn'
                                    type = 'submit'
                                    onClick = { loginBtnClicked } >
                                        { t(`${LANG_PREFIX}.lgBtn`) }
                                </button>
                                <div className = 'lg-find-wrapper'>
                                    <Link to = { makeFindAuthLink(FindAuthTab.idTab, query) }>
                                        { t(`${LANG_PREFIX}.findId`) }
                                    </Link>
                                    <Link to = { makeFindAuthLink(FindAuthTab.pwdTab, query) }>
                                        { t(`${LANG_PREFIX}.findPwd`) }
                                    </Link>
                                </div>
                                {
                                    failReason && (
                                        <span className = 'err-txt'>
                                            {
                                                failReason === LoginFailReason.BYID
                                                    ? t(`${LANG_PREFIX}.errMsgById`)
                                                    : failReason === LoginFailReason.BYPW
                                                        ? t(`${LANG_PREFIX}.errMsgByPw`)
                                                        : null
                                            }
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
                    </div>
                )
        }
        </>
    )
}

export default LoginPresenter