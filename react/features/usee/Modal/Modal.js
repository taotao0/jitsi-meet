import React from 'react'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'

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
                        { t(`${LANG_PREFIX}.submit`) }
                    </button>
                    <button
                        type = 'cancel'
                        name = { id }
                        onClick = { close }>
                        { t(`${LANG_PREFIX}.cancel`) }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Modal