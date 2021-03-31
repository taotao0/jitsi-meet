import React from 'react'
import { useTranslation } from 'react-i18next'

import Modal from '../../../common/modal'

const FindIdModal = (props) => {
    const { t } = useTranslation()

    const modalId = 'findId'

    return (
        <Modal
            { ...props }
            id = { modalId }>
            <h3>{ t('usee.modal.findId.desc') }</h3>
            <input className = 'modal-input'
                type = 'text'
                placeholder = { t('usee.modal.findId.placeholder') }/>
        </Modal>
    )
}

export default FindIdModal