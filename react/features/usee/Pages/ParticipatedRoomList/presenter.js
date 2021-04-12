import React from 'react'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from './constants'

const ParticipatedRoomListPresenter = () => {
    const { t } = useTranslation()

    return (
        <div>
            { t(`${LANG_PREFIX}.title`) }
        </div>
    )
}

export default ParticipatedRoomListPresenter