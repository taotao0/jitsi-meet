import React from 'react'
import { useSelector } from 'react-redux'

import MyPagePresenter from './presenter'

const MyPageContainer = (props) => {
    const { userStatus } = useSelector(state => state['features/usee/Pages/Login'], [])

    return (
        <MyPagePresenter
            {...props}
            userStatus = { userStatus }/>
    )
}

export default MyPageContainer