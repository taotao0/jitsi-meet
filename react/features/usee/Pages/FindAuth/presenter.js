import React from 'react'
import { useTranslation } from 'react-i18next'

import {
    LANG_PREFIX,
    FindAuthTab,
    AuthMethod,
} from './constants'

import TabList from './components/TabList'
import AuthEmailContainer from './components/AuthEmail'

const FindAuthPresenter = (props) => {
    const {
        activeTab,
        authMethod,
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'common-wrapper fa-wrapper'>
            <h1>{ t(`${LANG_PREFIX}.title`) }</h1>
            <TabList
                list = {[ FindAuthTab.idTab, FindAuthTab.pwdTab ]}
                activeTab = { activeTab }>
                {
                    authMethod === AuthMethod.EMAIL
                        ? <AuthEmailContainer { ... props } />
                        : null /* 
                                    NOTICE: 본인 인증 방법이 추가되면 이곳에 HOC를 이용하여 구현하세요.
                                */
                }
            </TabList>
        </div>
    )
}

export default FindAuthPresenter