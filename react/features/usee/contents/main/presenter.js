import React from 'react'

const MainContentsPresenter = (props) => {
    const {
        meetingName,
        handleInputChanged,
        handleJoinMeetingClicked
    } = props

    return (
        <main className = 'contents-container'>
            <div className = 'top-container'>
                <form
                    className = 'form-container'
                    onSubmit = { handleJoinMeetingClicked }>
                    <h2 className = 'form-text'>
                        실시간 메시징 및 컨텐츠 공유를 <br/> 사용한 비디오 회의
                    </h2>
                    <div>
                        <input
                            type = 'text'
                            value = { meetingName }
                            placeholder = '회의방 이름 입력'
                            onChange = { handleInputChanged } >
                        </input>
                        <button type = 'submit'>
                            참여
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default MainContentsPresenter