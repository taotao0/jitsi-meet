import React from 'react'

const GlobalMenuPresenter = (props) => {
    const {
        handleBtnClicked
    } = props

    return (
        <div className = 'gm-container'>
            <header className = 'gm-header'>
                <div className = 'gm-contents'>
                    <button
                        className = 'gm-logo-button'
                        type = 'button'
                        name = 'logo'
                        onClick = { handleBtnClicked } />
                    <div className = 'gm-button-contents'>
                        <button
                            className = 'gm-button'
                            type = 'button'
                            name = 'login'
                            onClick = { handleBtnClicked }>
                            로그인
                        </button>
                        <button
                            className = 'gm-button'
                            type = 'button'
                            name = 'memberJoin'
                            onClick = { handleBtnClicked }>
                            회원가입
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default GlobalMenuPresenter