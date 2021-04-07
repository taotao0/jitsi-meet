import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from '../constants'

import { FIND_AUTH_ROUTE_PATH } from '../../../usee_config'

const TabList = (props) => {
    const {
        list,
        activeTab,
        children
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'tablist-wrapper'>
            <ul className = 'tablist-menu'>
                {
                    list.map((elem) => {
                        return (
                            <li key = {elem}>
                                <Link
                                    className = { activeTab === elem ? 'tab-link active-tab' : 'tab-link'}
                                    to = {`${FIND_AUTH_ROUTE_PATH}?tabName=${elem}`}>
                                    { t(`${LANG_PREFIX}.${elem}`) }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            { children }
        </div>
    )
}

export default TabList