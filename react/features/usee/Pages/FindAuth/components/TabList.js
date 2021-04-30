import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { makeTabLink } from '../functions'
import { LANG_PREFIX } from '../constants'

const TabList = (props) => {
    const {
        list,
        activeTab,
        fromPage,
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
                                    to = { makeTabLink(elem, fromPage) }>
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