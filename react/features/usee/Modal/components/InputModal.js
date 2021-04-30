import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import withModal from '../withModal'

import { closeModal } from '../ducks'

import { LANG_PREFIX } from '../constants'

const InputModal = (props) => {
    const {
        title,
        onSubmit
    } = props

    const dispatch = useDispatch()

    const { t } = useTranslation()

    const [ nickName, setNickName ] = useState('')

    const _handleInputChanged = useCallback((event) => {
        setNickName(event.target.value)
    }, [nickName])

    return (
        <div className = 'sm-wrapper'>
            <div className = 'sm-title-input-wrapper'>
                <h4>{ title }</h4>
                <input
                    type = 'text'
                    onChange = { _handleInputChanged } />
            </div>
            <div className = 'sm-btn-wrapper'>
                <button
                    type = 'submit'
                    onClick = { () => onSubmit(nickName) }>
                    { t(`${LANG_PREFIX}.submit`) }
                </button>
                <button>
                    {/* onClick = { () => onSubmit(dispatch(closeModal())) }> */}
                    { t(`${LANG_PREFIX}.cancel`) }
                </button>
            </div>
        </div>
    )
}

export default withModal(InputModal)