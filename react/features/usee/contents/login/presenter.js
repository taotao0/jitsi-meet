import React from 'react'
import Switch from 'react-switch'

import { useTranslation } from 'react-i18next'

const LoginPresenter = () => {
    const { t } = useTranslation()

    return (
        <div className = 'login-contents-container'>
            <div className = 'login-contents-main-container'>
                <h1>{t('usee.contents.login.login')}</h1>
                <form className = 'login-contents-form'>
                    <div>
                        <div className = 'login-input-id-pwd-box'>
                            <input 
                                className = 'login-input-id-pwd'
                                type = 'text'
                                placeholder = { t('usee.contents.login.login') }
                                name = 'id' />
                                {/* value = { id }
                                onChange = { onChange } /> */}
                                <button className = 'login-input-reset-btn'>
                                    <img src = '../../../../images/Xbutton.png' />
                                </button>
                        </div>
                        <div className = 'login-input-id-pwd-box'>
                            <input
                                className = 'login-input-id-pwd'
                                type = 'password'
                                placeholder = { t('usee.contents.login.pwd')}
                                name = 'pwd' />
                                {/* value = { pwd }
                                onChange = { onChange } /> */}
                                <button className = 'login-input-reset-btn'>
                                    <img src = '../../../../images/Xbutton.png' />
                                </button>
                        </div>
                        <div className = 'login-state-save'>
                            <p className = 'login-state-save-msg'>
                                {t('usee.contents.login.loginStateSave')}
                            </p>
                            <Switch
                                className = 'login-state-save-switch'
                                onColor = '#038389'
                                onHandleColor = '#038389'
                                uncheckedIcon = { false }
                                checkedIcon = { false }
                                width = { 35 }
                                height = { 15 } />
                        </div>
                        <div>
                            <button
                                className = 'login-input-button'
                                type = 'submit' >
                                    { t('usee.contents.login.login')}
                            </button>    {/* onClick = { loginBtnClicked} /> */}
                        </div>
                        <div className = 'login-find-id-pwd'>
                            <a>{t('usee.contents.login.findId')}</a>
                            /
                            <a>{t('usee.contents.login.findPwd')}</a>
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
                        {t('usee.contents.login.loginWithOtherSns')}
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
        </div>
    )
}

export default LoginPresenter