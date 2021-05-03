import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import FindAuthPresenter from './presenter'

import { AuthMethod } from './constants'

const FindAuthContainer = (props) => {
    const [ authMethod, setAuthMethod ] = useState(AuthMethod.EMAIL)

    const modalInfo = useSelector(state => state['features/usee/Modal'], [])

    const { tabName, from } = queryString.parse(useLocation().search)

    const _handleAuthMehodClicked = useCallback((event) => {
        const _authMethod = event.currentTarget.id

        if (_authMethod !== authMethod) {
            setAuthMethod(_authMethod)
        }
    }, [authMethod])

    console.log('FindAuthContainer call')

    return (
        <FindAuthPresenter
            activeTab = { tabName }
            fromPage = { from }
            authMethod = { authMethod }
            ModalInfo = { modalInfo }
            handleAuthMethodClicked = { _handleAuthMehodClicked } />
    )
}

export default FindAuthContainer