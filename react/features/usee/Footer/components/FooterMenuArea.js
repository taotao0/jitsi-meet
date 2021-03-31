import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import {
    MOBILE_SUPPORT_ROUTE_PATH,

    COMPANY_INTRODUCE,
    PRIVACY_POLICY,
    REJECTITON_UNAUTHORIZED_EMAIL,
    INFORMATION_DESK,
    MANUAL_DOWNLOAD_LINK
} from '../../usee_config'

const FooterMenuArea = (props) => {
    const { t } = useTranslation()

    return(
        <div className = 'ft-menu'>
            <ul>
                <li>
                    <a href = { COMPANY_INTRODUCE }>
                        { t('usee.footer.companyInfo') }
                    </a>
                </li>
                <li>
                    <a href = { PRIVACY_POLICY }>
                        { t('usee.footer.privacyPolicy') }
                    </a>
                </li>
                <li>
                    <a href = { REJECTITON_UNAUTHORIZED_EMAIL }>
                        { t('usee.footer.rejectionUnauthorizedEmail') }
                    </a>
                </li>
                <li>
                    <a href = { INFORMATION_DESK }>
                        { t('usee.footer.infoDesk') }
                    </a>
                </li>
                <li>
                    <a
                        download
                        href = { MANUAL_DOWNLOAD_LINK } >
                        { t('usee.footer.manual') }
                    </a>
                </li>
                <li className = 'ft-menu-last-item'>
                    <Link to = { MOBILE_SUPPORT_ROUTE_PATH }>
                        { t('usee.footer.mobileVersion') }
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterMenuArea