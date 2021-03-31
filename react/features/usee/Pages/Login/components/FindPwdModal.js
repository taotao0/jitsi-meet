import React from 'react'
import { useTranslation } from 'react-i18next'

import Modal from '../../../common/modal'

const FindPwdModal = (props) => {
    const { t } = useTranslation()

    const modalId = 'findPwd'

    return (
        <Modal
            { ...props }
            id = { modalId }>
            <h3>{ t('usee.modal.findPwd.desc') }</h3>
            <input
                className = 'modal-input'
                type = 'text'
                placeholder = { t('usee.modal.findPwd.placeholder1') }/>
            <input
                className = 'modal-input'
                type = 'text'
                placeholder = { t('usee.modal.findPwd.placeholder2') }/>
        </Modal>
    )
}

export default FindPwdModal