import React from 'react'
import { useTranslation } from 'react-i18next'

const Modal = (props) => {
    const {
        visible,
        close,
        id,
        children
    } = props

    const { t } = useTranslation()

    return (
        <div className = { visible ? 'modal-wrapper open' : 'modal-wrapper'}>
            <form className = 'modal-container'>
                { children }
                <div className = 'button-container'>
                    <button
                        type = 'submit'
                        name = { id }
                        onClick = { close }>
                        { t('usee.modal.submit') }
                    </button>
                    <button
                        type = 'cancel'
                        name = { id }
                        onClick = { close }>
                        { t('usee.modal.cancel') }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Modal