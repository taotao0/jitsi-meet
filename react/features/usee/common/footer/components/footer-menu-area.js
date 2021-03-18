import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const FooterMenuArea = (props) => {
    const { t } = useTranslation()

    return(
        <div className = 'footer-menu'>
            <ul>
                <li className = 'footer-menu-list'>
                    <a href = "http://uclick.co.kr/sub1/sub1_2.html">
                        { t('usee.footer.companyInfo') }
                    </a>
                </li>
                <li className = 'footer-menu-list'>
                    <a href = "https://usee.co.kr/static/202102_terms_of_service.html">
                        { t('usee.footer.privacyPolicy') }
                    </a>
                </li>
                <li className = 'footer-menu-list'>
                    <a href = "http://uclick.co.kr/email.html">
                        { t('usee.footer.rejectionUnauthorizedEmail') }
                    </a>
                </li>
                <li className = 'footer-menu-list'>
                    <a href = "http://uclick.co.kr/sub5/sub5_1.html">
                        { t('usee.footer.infoDesk') }
                    </a>
                </li>
                <li className = 'footer-menu-list'>
                    <a href = "https://usee.co.kr/usee-userguide-kr_v1.0.zip" download>
                        { t('usee.footer.manual') }
                    </a>
                </li>
                <li className = 'footer-menu-list-mobile'>
                    <Link to = '/mobileSupport'>
                        { t('usee.footer.mobileVersion') }
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterMenuArea