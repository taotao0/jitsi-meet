import React from 'react'

import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'

const MyPagePresenter = () => {
    const { t } = useTranslation()

    return (
        <>
            { t(`${LANG_PREFIX}.title`) }
        </>
    )
}

export default MyPagePresenter