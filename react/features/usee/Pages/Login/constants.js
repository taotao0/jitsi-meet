export const LANG_PREFIX = 'usee.Pages.Login'

// Auto login switch 
export const SWITCH_WIDTH = 28
export const SWITCH_HEIGHT = 15
export const SWITCH_COLOR = 'white'
export const SWITCH_ONCOLOR = '#7991BF'

// Login status
export const UserStatus = {
    VISITOR: 'VISITOR',
    MEMBER: 'MEMBER'
}

/*
    FIXME:
        Back-end api 연동 이후, 응답 코드로 핸들링할 것!
        삭제 예정
*/
export const LoginStatus = {
    SUCCESSED: 'SUCCESS',
    FAILED: 'FAILED'
}

export const LoginFailReason = {
    BYID: 'BYID',
    BYPWD: 'BYPWD',
}

/*
    FIXME:
        Back-end api 연동 이후 삭제 예정
*/
const TestUser = {
    testId: 'usee',
    testPwd: '1234'
}

export default TestUser