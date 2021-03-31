import React from 'react'
import { useTranslation } from 'react-i18next'

import { COMPANY_LOGO } from '../../usee_config'

const FooterInfoArea = (props) => {
    const {
        langSelect,
        handleSelectChanged
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'ft-info-wrapper'>
                <div className = 'ft-info'>
                    <img
                        src = './images/uclicklogo.png'
                        alt = { COMPANY_LOGO }/>
                    <div className = 'ft-company-info-wrapper'>
                        <p>
                            <strong>
                                { t('usee.footer.companyDetailInfo.name') }
                            </strong>
                            {` | ${t('usee.footer.companyDetailInfo.address')}`}
                            {` | ${t('usee.footer.companyDetailInfo.CEO')}`}
                        </p>
                        <p>
                            { t('usee.footer.companyDetailInfo.certificateForBusinessNumber') }
                            {` | ${t('usee.footer.companyDetailInfo.tel')}`}
                            {` | ${t('usee.footer.companyDetailInfo.fax')}`}
                        </p>
                        <p>
                            { t('usee.footer.companyDetailInfo.copyRight') }
                        </p>
                    </div>
                </div>
                <div className = "ft-lng-select">
                    { t('usee.footer.language.lang') }
                    <br/>
                    <select
                        value = { langSelect }
                        onChange = { handleSelectChanged }>
                        <option value = "korean">
                            { t('usee.footer.language.korean') }
                        </option>
                        <option value = "english">
                            { t('usee.footer.language.english') }
                        </option>
                    </select>
                </div>
            </div>
    )
}

export default FooterInfoArea