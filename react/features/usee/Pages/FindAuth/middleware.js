import { MiddlewareRegistry } from '../../../base/redux'

import {
    EMAIL_VALID,
    EMAIL_INVALID
} from './ducks'

MiddlewareRegistry.register(store => next => action => {
    const result = next(action)

    switch (action.type) {
        case EMAIL_VALID: {
            alert('TEST')
            // 경고창
            break
        }

        case EMAIL_INVALID: {
            const { inputElem } = action

            inputElem && inputElem.current.focus()
            // 포커스
            break
        }
    }

    return result
})