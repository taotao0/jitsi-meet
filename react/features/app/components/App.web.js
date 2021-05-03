// @flow

import { AtlasKitThemeProvider } from '@atlaskit/theme';
import React from 'react';
import { Route, Switch } from 'react-router-dom'


import { DialogContainer } from '../../base/dialog';
import { ChromeExtensionBanner } from '../../chrome-extension-banner';
import { AbstractApp } from './AbstractApp';

import HeaderContainer from '../../usee/Header'
import FooterContainer from '../../usee/Footer'

import PrimaryContainer from '../../usee/Pages/Primary'
import LoginContainer from '../../usee/Pages/Login'
import MyPageContainer from '../../usee/Pages/MyPage'
import ManageRecordingsContainer from '../../usee/Pages/ManageRecordings'
import MobileSupportContainer from '../../usee/Pages/MobileSupport'
import NotFoundContainer from '../../usee/Pages/NotFound'
import FindAuthContainer from '../../usee/Pages/FindAuth'
import ResetPasswordContainer from '../../usee/Pages/ResetPassword'

import {
    PRIMARY_ROUTE_PATH,
    LOGIN_ROUTE_PATH,
    MOBILE_SUPPORT_ROUTE_PATH,
    MY_PAGE_ROUTE_PATH,
    MANAGE_RECORDINGS_ROUTE_PATH,
    FIND_AUTH_ROUTE_PATH,
    REST_PASSWORD_ROUTE_PATH
} from '../../usee/usee_config'


// Register middlewares and reducers.
import '../middlewares';
import '../reducers';

/**
 * Root app {@code Component} on Web/React.
 *
 * @extends AbstractApp
 */
export class App extends AbstractApp {
    _init: Promise<*>;

    // componentDidMount() {
    //     super.componentDidMount()
        
    //     this._init.then(() => {
    //         //FIXME: LocalStorage의 유무와 UserStatus에 따라 doAutoLogin 호출
    //         this.state.store?.dispatch(doAutoLogin())
    //     }).catch(err => {
    //         console.log('error : ', err)
    //     })
    // }
    /**
     * Overrides the parent method to inject {@link AtlasKitThemeProvider} as
     * the top most component.
     *
     * @override
     */
    _createMainElement(component, props) {
        if (component === undefined) {
            component = () => {
                return (
                    <div className = 'usee-wrapper'>
                        <HeaderContainer />
                        <main className = 'main-wrapper'>
                            {
                                <Switch>
                                    <Route
                                        exact
                                        path = { PRIMARY_ROUTE_PATH }
                                        component = { PrimaryContainer } />
                                    <Route
                                        exact
                                        path = { LOGIN_ROUTE_PATH }
                                        component = { LoginContainer } />
                                    <Route
                                        path = { MY_PAGE_ROUTE_PATH }
                                        component = { MyPageContainer } />
                                    <Route
                                        path = { MOBILE_SUPPORT_ROUTE_PATH }
                                        component = { MobileSupportContainer } />
                                    <Route
                                        path = { MANAGE_RECORDINGS_ROUTE_PATH }
                                        component = { ManageRecordingsContainer } />
                                    <Route
                                        path = { FIND_AUTH_ROUTE_PATH }
                                        component = { FindAuthContainer } />
                                    <Route
                                        path = { REST_PASSWORD_ROUTE_PATH }
                                        component = { ResetPasswordContainer } />
                                    <Route component = { NotFoundContainer } />
                                </Switch>
                            }
                        </main>
                        <FooterContainer />
                    </div>
                )
            }
        }

        return (
            <>
                { super._createMainElement(component, props) }
            </>
        )
    }

    /**
     * Renders the platform specific dialog container.
     *
     * @returns {React$Element}
     */
    _renderDialogContainer() {
        return (
            <AtlasKitThemeProvider mode = 'dark'>
                <DialogContainer />
            </AtlasKitThemeProvider>
        );
    }
}
