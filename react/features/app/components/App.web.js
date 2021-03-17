// @flow

import { AtlasKitThemeProvider } from '@atlaskit/theme';
import React from 'react';
import { Route } from 'react-router-dom'

import { DialogContainer } from '../../base/dialog';
import { ChromeExtensionBanner } from '../../chrome-extension-banner';

import GlobalMenuContainer from '../../usee/common/globalMenu'
import FooterContainer from '../../usee/common/footer'

import { AbstractApp } from './AbstractApp';

import MainContentsContainer from '../../usee/contents/main'
import LoginContainer from '../../usee/contents/main'

// Register middlewares and reducers.
import '../middlewares';
import '../reducers';

/**
 * Root app {@code Component} on Web/React.
 *
 * @extends AbstractApp
 */
export class App extends AbstractApp {
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
