import React from 'react'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from '../constants'

const FunctionDescription = (props) => {
    const { elem } = props
    const { t } = useTranslation()

    const LANG_CONTENTS_PREFIX = `${LANG_PREFIX}.Contents`

    return (
        <article className = 'func-desc-wrapper'>
            <img
                src = {`./images/${elem}.png`}
                srcSet = {`./images/${elem}@2x.png 2x, ./images/${elem}@3x.png 3x`} />
            <p className = 'func-desc-desc'>
                { t(`${LANG_CONTENTS_PREFIX}.${elem}`) }
            </p>
            <p className = 'func-desc-subDesc'>
                { t(`${LANG_CONTENTS_PREFIX}.${elem}Desc`) }
            </p>
        </article>
    )
}
export default FunctionDescription