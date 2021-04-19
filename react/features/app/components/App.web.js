// @flow

import { AtlasKitThemeProvider } from '@atlaskit/theme';
import React from 'react';
import { jitsiLocalStorage } from '@jitsi/js-utils';

import { DialogContainer } from '../../base/dialog';
import { ChromeExtensionBanner } from '../../chrome-extension-banner';
import { AbstractApp } from './AbstractApp';

import { doAutoLogin, userForceClose } from '../../usee/Pages/Login/ducks'
import { USEE_LS_LOGIN_KEY } from '../../usee/usee_config'

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
    // _createMainElement(component, props) {
    //     return (
    //         <>
    //             <GlobalMenuContainer />
    //             <main className = 'contents-container'>
    //                 <Route
    //                     exact
    //                     path = '/'
    //                     component = { MainContentsContainer } />
    //                 <Route
    //                     path = '/login'
    //                     component = { LoginContainer } />
    //                 {/* { super._createMainElement(component, props) } */}
    //             </main>
    //             <FooterContainer />
    //         </>
    //         // <AtlasKitThemeProvider mode = 'dark'>
    //         //     <ChromeExtensionBanner />
    //         //     { super._createMainElement(component, props) }
    //         // </AtlasKitThemeProvider>
    //     );
    // }

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
