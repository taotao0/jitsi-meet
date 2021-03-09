import { ReducerRegistry } from '../../base/redux'

export const SET_CONTENTS = 'SET_CONTENTS'

export function setContents(component) {
    return {
        type: SET_CONTENTS,
        component,
    }
}

const defaultState = {
    component: undefined
}

ReducerRegistry.register('features/usee/contents',
    (state = defaultState, action) => {
        switch (action.type) {
            case SET_CONTENTS : {
                return {
                    ...state,
                    component: action.component
                }
            }
        }

        return state
    }
)