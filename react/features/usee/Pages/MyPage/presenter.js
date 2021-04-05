import React from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import { LANG_PREFIX } from './constants'
import { UserStatus } from '../Login/constants'

import {
    LOGIN_ROUTE_PATH,
    MY_PAGE_ROUTE_PATH
} from '../../usee_config'

const MyPagePresenter = (props) => {
    const { userStatus } = props
    const { t } = useTranslation()

    return (
        <>
            {
                userStatus === UserStatus.MEMBER
                    ? (
                        <div>
                            { t(`${LANG_PREFIX}.title`) }
                        </div>
                    )
                    : (
                        <Redirect to = {`${LOGIN_ROUTE_PATH}?from=${MY_PAGE_ROUTE_PATH}`}/>
                    )
            }
        </>
    )
}

export default MyPagePresenter