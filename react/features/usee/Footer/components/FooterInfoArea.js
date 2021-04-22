import React from 'react'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from '../constants'
import { COMPANY_LOGO_ALT } from '../../usee_config'

const FooterInfoArea = (props) => {
    const {
        langSelect,
        handleSelectChanged
    } = props

    const { t } = useTranslation()

    const companyPrefix = `${LANG_PREFIX}.InfoArea.companyDetailInfo`
    const langPrefix = `${LANG_PREFIX}.InfoArea.language`

    return (
        <div className = 'ft-info-wrapper'>
                <div className = 'ft-info'>
                    <img
                        className = 'ft-info-img'
                        src = './images/uclick-logo.png'
                        srcset="./images/uclick-logo@2x.png 2x, ./images/uclick-logo@3x.png 3x"
                        alt = { COMPANY_LOGO_ALT } />
                    <div className = 'ft-company-info-wrapper'>
                        <p>
                            <strong>
                                { t(`${companyPrefix}.name`) }
                            </strong>
                            {` | ${t(`${companyPrefix}.address`)}`}
                            {` | ${t(`${companyPrefix}.CEO`)}`}
                            {` | ${t(`${companyPrefix}.certificateForBusinessNumber`)}` }
                        </p>
                        <p>
                            
                            {`${t(`${companyPrefix}.tel`)}`}
                            {` | ${t(`${companyPrefix}.fax`)}`}
                        </p>
                        <p>
                            { t(`${companyPrefix}.copyRight`) }
                        </p>
                    </div>
                </div>
                <div className = "ft-lng-select">
                    <span>
                        { t(`${langPrefix}.lang`) }
                    </span>
                    <select
                        value = { langSelect }
                        onChange = { handleSelectChanged }>
                        <option value = "korean">
                            { t(`${langPrefix}.korean`) }
                        </option>
                        <option value = "english">
                            { t(`${langPrefix}.english`) }
                        </option>
                    </select>
                </div>
            </div>
    )
}

export default FooterInfoArea