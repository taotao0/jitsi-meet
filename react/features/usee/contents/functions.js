import { toState } from '../../base/redux'

declare var APP: Object;

export function getCurrentContents(state) {
    return toState(state)['features/usee/contents'].component
}