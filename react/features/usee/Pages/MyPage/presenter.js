import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Redirect } from 'react-router-dom'

import SimpleInfoView from './components/SimpleInfoView'
import ArrowMenuItem from './components/ArrowMenuItem'

import { LANG_PREFIX } from './constants'
import { UserStatus } from '../Login/constants'

import {
    USER_AVATAR_ALT,
    LOGIN_ROUTE_PATH,
    MY_PAGE_ROUTE_PATH,
    MANAGE_RECORDINGS_ROUTE_PATH,
    PARTICIPATED_ROOM_LIST_ROUTE_PATH
} from '../../usee_config'

const MyPagePresenter = (props) => {
    const { userStatus } = props
    const { t } = useTranslation()

    return (
        <>
        {
            userStatus === UserStatus.MEMBER
                ? (
                    <section className = 'common-wrapper section-wrapper'>
                        <h1>{ t(`${LANG_PREFIX}.title`) }</h1>
                        <img
                            className = 'user-avatar'
                            src = '../../../../../../../images/user-temp.png'
                            alt = { USER_AVATAR_ALT }
                            style = {{ width: 180, height: 180, borderRadius: 90 }} />
                        <div className = 'mp-info-wrapper'>
                            <SimpleInfoView
                                title = { t(`${LANG_PREFIX}.id`) }
                                value = 'Uclick' />
                            <SimpleInfoView
                                title = { t(`${LANG_PREFIX}.nickName`) }
                                value = 'Usee' />
                            <SimpleInfoView
                                title = { t(`${LANG_PREFIX}.email`) }
                                value = 'usee@usee.co.kr' />
                        </div>
                        <ul className = 'mp-btn-menu'>
                            <li>
                                <Link>
                                    { t(`${LANG_PREFIX}.resetPwdBtn`) }
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    { t(`${LANG_PREFIX}.changeProfileBtn`) }
                                </Link>
                            </li>
                        </ul>
                        <ul className = 'mp-my-menu'>
                            <li>
                                <Link to = { `${MANAGE_RECORDINGS_ROUTE_PATH}` }>    
                                    <ArrowMenuItem title = { t(`${LANG_PREFIX}.recordListBtn`)} />
                                </Link>
                            </li>
                            <li>
                                <Link to = { `${PARTICIPATED_ROOM_LIST_ROUTE_PATH}` }>
                                    <ArrowMenuItem title = { t(`${LANG_PREFIX}.roomListBtn`)} />
                                </Link>
                            </li>
                        </ul>
                    </section>
                )
                : (
                    <Redirect to = {`${LOGIN_ROUTE_PATH}?from=${MY_PAGE_ROUTE_PATH}`}/>
                )
        }
        </>
    )
}

export default MyPagePresenter