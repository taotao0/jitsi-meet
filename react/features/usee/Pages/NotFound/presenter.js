import React from 'react'

import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'

const NotFoundPresenter = () => {
    const { t } = useTranslation()

    return (
        <div>
            { t(`${LANG_PREFIX}.desc`) }
        </div>
    )
}

export default NotFoundPresenter