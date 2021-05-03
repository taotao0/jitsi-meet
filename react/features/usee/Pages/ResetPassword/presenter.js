import React from 'react'
import { useTranslation } from 'react-i18next'

import UseeInput from '../../Common/UseeInput'

import { LANG_PREFIX } from './constants'

const ResetPasswordPresenter = (props) => {
    const {
        inputValue,
        errMsgVisible,
        newPwdRef,
        rePwdRef,
        modalInfo,
        handleInputChanged,
        handleXBtnClicked,
        handleSubmitBtnClicked
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'common-wrapper'>
            <h1>{ t(`${LANG_PREFIX}.title`) }</h1>
            <form
                className = 'rp-form'
                onSubmit = { handleSubmitBtnClicked }>
                <UseeInput
                    inputProps = {{
                        type: 'password',
                        placeholder: t(`${LANG_PREFIX}.newPwdPlaceholder`),
                        ref: newPwdRef,
                        name: 'newPwd',
                        value: inputValue.newPwd,
                        onChange: handleInputChanged
                    }}
                    xBtnProps = {{
                        type: 'button',
                        name: 'newPwd',
                        onClick: handleXBtnClicked
                    }} />
                <UseeInput
                    inputProps = {{
                        type: 'password',
                        placeholder: t(`${LANG_PREFIX}.rePwdPlaceholder`),
                        ref: rePwdRef,
                        name: 'rePwd',
                        value: inputValue.rePwd,
                        onChange: handleInputChanged
                    }}
                    xBtnProps = {{
                        type: 'button',
                        name: 'rePwd',
                        onClick: handleXBtnClicked
                    }} />
                <div className = {errMsgVisible ? 'rp-err-msg err-txt active' : 'rp-err-msg err-txt'}>
                    { t(`${LANG_PREFIX}.errMsg`) }
                </div>
                <button
                    className = 'rp-btn'>
                    { t(`${LANG_PREFIX}.submit`) }
                </button>
            </form>
            {
                modalInfo && modalInfo.modalComponent && 
                    modalInfo.modalComponent(modalInfo.modalComponentProps)
            }
        </div>
    )
}

export default ResetPasswordPresenter