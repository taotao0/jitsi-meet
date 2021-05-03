import React from 'react'
import { useTranslation } from 'react-i18next'

import Modal from '../../../Modal'
import { LANG_PREFIX } from '../constants'

const FindIdModal = (props) => {
    const { t } = useTranslation()

    const modalId = 'findId'

    return (
        <Modal
            { ...props }
            id = { modalId }>
            <h3>{ t(`${LANG_PREFIX}.FindIdModal.desc`) }</h3>
            <input
                className = 'modal-input'
                type = 'text'
                placeholder = { t(`${LANG_PREFIX}.FindIdModal.emailPlaceholder`) }/>
        </Modal>
    )
}

export default FindIdModal