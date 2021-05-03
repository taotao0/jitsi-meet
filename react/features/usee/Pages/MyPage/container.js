import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import MyPagePresenter from './presenter'

const MyPageContainer = (props) => {
    const loginState = useSelector(state => state['features/usee/Pages/Login'], [])

    return (
        <MyPagePresenter
            {...props}
            loginState = { loginState } />
    )
}

export default MyPageContainer