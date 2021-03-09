import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { setContents } from '../../contents/ducks'

import MainContentsContainer from '../../contents/main'
import LoginContainer from '../../contents/login'
import MemberJoinContainer from '../../contents/memberJoin'

import GlobalMenuPresenter from './presenter'

const GlobalMenuContainer = (props) => {
    const dispatch = useDispatch()

    const _handleBtnClicked = useCallback((event) => {
        let _btnName = event.target.name

        switch(_btnName) {
            case 'logo' : {
                dispatch(setContents(MainContentsContainer))
                break
            }

            case 'login' : {
                dispatch(setContents(LoginContainer))
                break
            }
            case 'memberJoin' : {
                dispatch(setContents(MemberJoinContainer))
                break
            }
            default : {
                console.log('Not handled')
            }
        }
    }, [])

    return (
        <GlobalMenuPresenter
            handleBtnClicked={ _handleBtnClicked } />
    )
}

export default GlobalMenuContainer