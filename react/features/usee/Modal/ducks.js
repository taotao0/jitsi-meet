import { ReducerRegistry } from '../../base/redux'

/* Action types */
export const OPEN_MODAL = 'OPEN_MODAL'

export const CLOSE_MODAL = 'CLOSE_MODAL'

export const SET_NICKNAME = 'SET_NICKNAME'

/* Actions */
export const openModal = (modalComponent, modalComponentProps) => {
    return {
        type: OPEN_MODAL,
        modalComponent,
        modalComponentProps,
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

/* Default State */
const defaultState = {
    modalComponent: undefined,
    modalComponentProps: undefined,
}

/* Reducer */
ReducerRegistry.register('features/usee/Modal',
    (state = defaultState, action) => {
        switch (action.type) {
            case OPEN_MODAL: {
                const { modalComponent, modalComponentProps } = action

                return {
                    ...state,
                    modalComponent,
                    modalComponentProps,
                }
            }

            case CLOSE_MODAL: {
                return {
                    ...state,
                    modalComponent: undefined,
                    modalComponentProps: undefined,
                }
            }

            default: {
                return state
            }
        }
    }
)