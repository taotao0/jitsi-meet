import { ReducerRegistry } from '../../../base/redux'

import { isValidEmail } from './functions'

import {
    FindAuthTab,
    AuthEmailStatus
} from './constants'

/* Action types */
export const EMAIL_STATUS_INITIAL = 'EMAIL_STATUS_INITIAL'
export const EMAIL_VALID = 'EMAIL_VALID'
export const EMAIL_INVALID = 'EMAIL_INVALID'

/* Actions */
export const findAuthByEmail = (email, activeTab, fromPage, history, t, inputElem) => {
    return (dispatch, getState) => {
        /* 
            FIXME: Back-end API가 통합되면 분기 처리할 필요 없음
            ex) findAuthByEmail( email, something )
                - email : 사용자가 입력한 이메일 주소
                - something : 아이디 찾기인지, 비밀번호 찾기인지
            - 하단의 코드는 위의 내용이 결정되는대로 변경 예정!
            합치기로 함!
        */
        if (activeTab === FindAuthTab.idTab) {
            isValidEmail(email)
                ? dispatch(emailStatusValid(activeTab, fromPage, history, t))
                : dispatch(emailStatusInvalid(inputElem))
        } else {
            isValidEmail(email)
            ? dispatch(emailStatusValid(activeTab, fromPage, history, t))
            : dispatch(emailStatusInvalid(inputElem))
        }
    }
}

export const emailStatusInitialize = () => {
    return {
        type: EMAIL_STATUS_INITIAL
    }
}

const emailStatusValid = (activeTab, fromPage, history, t) => {
    return {
        type: EMAIL_VALID,
        modalProps: {
            activeTab,
            fromPage,
            history,
            t
        }
    }
}

const emailStatusInvalid = (inputElem) => {
    return {
        type: EMAIL_INVALID,
        inputElem
    }
}

/* Default state */
const defaultState = {
    status: AuthEmailStatus.INITIAL
}

/* Reducer */
ReducerRegistry.register('features/usee/Pages/FindAuth',
    (state = defaultState, action) => {
        switch (action.type) {
            case EMAIL_STATUS_INITIAL: {
                return {
                    ...state,
                    status: AuthEmailStatus.INITIAL
                }
            }

            case EMAIL_VALID: {
                return {
                    ...state,
                    status: AuthEmailStatus.VALID
                }
            }

            case EMAIL_INVALID: {
                return {
                    ...state,
                    status: AuthEmailStatus.INVALID
                }
            }

            default: {
                return state
            }
        }
    }
)