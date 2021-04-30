import React, { useState, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import withModal from '../withModal'

import { LANG_PREFIX } from '../constants'

const InputModal = (props) => {
    const {
        title,
        onSubmit,
        onCancel
    } = props

    const { t } = useTranslation()

    const [ input, setInput ] = useState('')
    const [ errVisible, setErrVisible ] = useState(false)

    const inputRef = useRef()

    const _handleInputChanged = useCallback((event) => {
        setInput(event.target.value)
    }, [input])

    const _handleSubmitBtnClicked = useCallback((event) => {
        if (input === '') {
            setErrVisible(true)
            inputRef.current?.focus()
        } else {
            onSubmit(input)
        }
    }, [input, inputRef])

    return (
        <div className = 'im-wrapper'>
            <div className = 'im-title-input-wrapper'>
                <h4>{ title }</h4>
                <input
                    className = {errVisible ? 'im-input err-visible' : 'im-input'}
                    ref = { inputRef }
                    type = 'text'
                    value = { input }
                    onChange = { _handleInputChanged } />
            </div>
            <div className = 'im-btn-wrapper'>
                <button
                    type = 'submit'
                    onClick = { _handleSubmitBtnClicked }>
                    { t(`${LANG_PREFIX}.submit`) }
                </button>
                <button
                    type = 'button'
                    onClick = { () => onCancel() }>
                    { t(`${LANG_PREFIX}.cancel`) }
                </button>
            </div>
        </div>
    )
}

export default withModal(InputModal)