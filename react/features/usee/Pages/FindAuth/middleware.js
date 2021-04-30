import { MiddlewareRegistry } from '../../../base/redux'

import { AUTH_EMAIL_SUCCESSED } from './ducks'
import {
    openModal,
    closeModal
} from '../../Modal/ducks'

import NoticeModal from '../../Modal/components/NoticeModal'

import { FindAuthTab, LANG_PREFIX } from './constants'
import { LOGIN_ROUTE_PATH } from '../../usee_config'

MiddlewareRegistry.register(store => next => action => {
    const result = next(action)

    switch (action.type) {
        case AUTH_EMAIL_SUCCESSED: {
            const { modalProps : { activeTab, fromPage, history, t }} = action

            const noticeMsg =
                activeTab === FindAuthTab.idTab
                    ? t(`${LANG_PREFIX}.AuthEmail.noticeMsgById`)
                    : t(`${LANG_PREFIX}.AuthEmail.noticeMsgByPwd`)

            const onSubmit = () => {
                const pushLink =
                    fromPage
                        ? `${LOGIN_ROUTE_PATH}?from=${fromPage}`
                        : `${LOGIN_ROUTE_PATH}`
                            
                history.push(pushLink)
                
                store.dispatch(closeModal())
            }

            store.dispatch(
                openModal(NoticeModal, { noticeMsg, onSubmit })
            )

            break
        }
    }

    return result
})