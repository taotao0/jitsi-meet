import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { LANG_PREFIX } from '../constants'

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

    const prefix = `${LANG_PREFIX}.MenuArea`

    return(
        <div className = 'ft-menu'>
            <ul>
                <li>
                    <a href = { COMPANY_INTRODUCE }>
                        { t(`${prefix}.companyInfo`) }
                    </a>
                </li>
                <li>
                    <a href = { PRIVACY_POLICY }>
                        { t(`${prefix}.privacyPolicy`) }
                    </a>
                </li>
                <li>
                    <a href = { REJECTITON_UNAUTHORIZED_EMAIL }>
                        { t(`${prefix}.rejectionUnauthorizedEmail`) }
                    </a>
                </li>
                <li>
                    <a href = { INFORMATION_DESK }>
                        { t(`${prefix}.infoDesk`) }
                    </a>
                </li>
                <li>
                    <a
                        download
                        href = { MANUAL_DOWNLOAD_LINK } >
                        { t(`${prefix}.manual`) }
                    </a>
                </li>
                <li className = 'ft-menu-last-item'>
                    <Link to = { MOBILE_SUPPORT_ROUTE_PATH }>
                        { t(`${prefix}.mobileSupport`) }
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterMenuArea