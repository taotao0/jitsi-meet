import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import Switch from 'react-switch'


import LoginPresenter from './presenter'

const LoginContainer = () => {
      // const dispatch = useDispatch()
      
    // const [ inputs, setInputs ] = useState({
    //     id: "",
    //     pwd: ""
    // })

    // const [ loginStateCheck, setLoginStateCheck ] = useState(false)

    // const { id, pwd } = inputs

    // const onChange = useCallback((event) => {
    //     setInputs({
    //         ...inputs,
    //         [event.target.name]: event.target.value,
    //     }, [inputs])
    // })

    // const _handleLoginBtnClicked = useCallback((event) => {

    //     dispatch(setLoginInfo(id, pwd))
    //     event.preventDefault()
    // }, [id, pwd])

    return (
        <LoginPresenter />
    //     <LoginPresenter
    //         loginBtnClicked = { _handleLoginBtnClicked }
    //         onChange = { onChange }/>
    )
}

export default LoginContainer