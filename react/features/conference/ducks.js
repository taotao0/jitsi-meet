import axios from 'axios'
import { ReducerRegistry } from '../base/redux'
/* Action types */
export const CHANGE_CONFERENCE_MODE = 'CHANGE_CONFERENCE_MODE'

/* Actions */
export const changeConferenceMode = (isWebinar) => {
  return {
      type: CHANGE_CONFERENCE_MODE,
      isWebinar
  }
}

/* Default State */
const defaultState = {
  isWebinar: true
}

/* Reducer */
ReducerRegistry.register('features/conference',
    (state = defaultState, action) => {
        switch (action.type) {
            case CHANGE_CONFERENCE_MODE: {
                const { isWebinar } = action.isWebinar
                return {
                    ...state,
                    isWebinar: action.isWebinar
                }
            }
            default: {
                return state
            }
        }
    }
)