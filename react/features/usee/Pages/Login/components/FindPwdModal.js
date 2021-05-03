import React from 'react'
import { useTranslation } from 'react-i18next'

import Modal from '../../../Modal'
import { LANG_PREFIX } from '../constants'

const FindPwdModal = (props) => {
    const { t } = useTranslation()

    const modalId = 'findPwd'

    return (
        <Modal
            { ...props }
            id = { modalId }>
            <h3>{ t(`${LANG_PREFIX}.FindPwdModal.desc`) }</h3>
            <input
                className = 'modal-input'
                type = 'text'
                placeholder = { t(`${LANG_PREFIX}.FindPwdModal.emailPlaceholder`) }/>
            <input
                className = 'modal-input'
                type = 'text'
                placeholder = { t(`${LANG_PREFIX}.FindPwdModal.idPlaceholder`) }/>
        </Modal>
    )
}

export default FindPwdModal