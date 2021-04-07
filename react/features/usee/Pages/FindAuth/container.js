import React, { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import FindAuthPresenter from './presenter'

import { AuthMethod } from './constants'

const FindAuthContainer = (props) => {
    const [ authMethod, setAuthMethod ] = useState(AuthMethod.EMAIL)

    const activeTab = queryString.parse(useLocation().search).tabName

    const _handleAuthMehodClicked = useCallback((event) => {
        const _authMethod = event.currentTarget.id

        if (_authMethod !== authMethod) {
            setAuthMethod(_authMethod)
        }
    }, [authMethod])

    return (
        <FindAuthPresenter
            activeTab = { activeTab }
            authMethod = { authMethod }
            handleAuthMethodClicked = { _handleAuthMehodClicked } />
    )
}

export default FindAuthContainer