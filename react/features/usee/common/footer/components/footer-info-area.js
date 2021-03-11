import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterInfoArea = (props) => {
    const {
        langSelect,
        handleSelectChanged
    } = props

    const { t } = useTranslation()

    return (
        <div className = 'footer-info-section'>
                <div className = 'footer-uclick-logo-info'>
                    <div>
                        <img
                            src = './images/uclicklogo.png'
                            alt = 'uclick-logo'/>
                    </div>
                    <div className = 'footer-company-info'>
                        <p>
                            <strong>
                                {t('usee.footer.companyDetailInfo.name')}
                            </strong>
                            <span className = 'bar'> | </span>
                            {t('usee.footer.companyDetailInfo.address')}
                            <span className='bar'> | </span>
                            {t('usee.footer.companyDetailInfo.CEO')}
                        </p>
                        <p>
                            {t('usee.footer.companyDetailInfo.certificateForBusinessNumber')}
                            <span className = 'bar'> | </span>
                            {t('usee.footer.companyDetailInfo.tel')}
                            <span className = 'bar'> | </span>
                            {t('usee.footer.companyDetailInfo.fax')}
                        </p>
                        <p>
                            {t('usee.footer.companyDetailInfo.copyRight')}
                        </p>
                    </div>
                </div>
                <div className = "footer-language-select">
                    {t('usee.footer.language.lang')}
                    <br/>
                    <select
                         value = {langSelect}
                         onChange = {handleSelectChanged}>
                        <option value = "korean">
                            {t('usee.footer.language.korean')}
                        </option>
                        <option value = "english">
                            {t('usee.footer.language.english')}
                        </option>
                    </select>
                </div>
            </div>
    )

}

export default FooterInfoArea