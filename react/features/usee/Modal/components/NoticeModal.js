import React from 'react'
import { useTranslation } from 'react-i18next'

import withModal from '../withModal'

import { LANG_PREFIX } from '../constants'

const NoticeModal = (props) => {
    const {
        noticeMsg,
        onSubmit
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'nm-wrapper'>
            <h3>{ t(`${LANG_PREFIX}.notice`) }</h3>
            <div className = 'nm-msg-wrapper'>
                { noticeMsg }
            </div>
            <div className = 'nm-btn-wrapper'>
                <button
                    type = 'submit'
                    onClick = { onSubmit }>
                    { t(`${LANG_PREFIX}.submit`) }
                </button>
            </div>
        </div>
    )
}

export default withModal(NoticeModal)