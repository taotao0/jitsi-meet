import React from 'react'
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX } from '../constants'
import { COMPANY_LOGO } from '../../usee_config'

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
                        src = './images/uclicklogo.png'
                        alt = { COMPANY_LOGO }
                        width = '109'
                        height = '47' />
                    <div className = 'ft-company-info-wrapper'>
                        <p>
                            <strong>
                                { t(`${companyPrefix}.name`) }
                            </strong>
                            {` | ${t(`${companyPrefix}.address`)}`}
                            {` | ${t(`${companyPrefix}.CEO`)}`}
                        </p>
                        <p>
                            { t(`${companyPrefix}.certificateForBusinessNumber`) }
                            {` | ${t(`${companyPrefix}.tel`)}`}
                            {` | ${t(`${companyPrefix}.fax`)}`}
                        </p>
                        <p>
                            { t(`${companyPrefix}.copyRight`) }
                        </p>
                    </div>
                </div>
                <div className = "ft-lng-select">
                    { t(`${langPrefix}.lang`) }
                    <br/>
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