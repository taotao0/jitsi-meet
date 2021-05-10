import React from 'react'
import { useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Icon, IconMenu } from '../../../base/icons'

import {
    PrimaryContainer,
    PrimaryHeader,
    PrimaryContent,
    PrimaryFooter,
    PrimaryLogoContainer,
    PrimaryDescContainer,
    PrimaryHeaderButton,
    PrimaryButton,
    PrimaryJoinButton,
    PrimaryLogoutButton,
    PrimaryButtonText,
    PrimaryLogo,
    PrimaryDescription,
    PrimaryTextInput
} from './components'

const PrimaryPresenter = (props) => {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

    return (
        <KeyboardAwareScrollView
            style = {{ flex: 1, backgroundColor: 'white' }}
            contentContainerStyle = {{ height: windowHeight - 1 }}>
            <PrimaryContainer>
                <PrimaryHeader>
                    <PrimaryHeaderButton>
                        <Icon
                            src = { IconMenu } />                    
                    </PrimaryHeaderButton>
                    <PrimaryLogoContainer width = { windowWidth - 100 }>
                        <PrimaryLogo
                                source = { require('../../../../../images/primary-logo.png') } />
                    </PrimaryLogoContainer>
                </PrimaryHeader>
                <PrimaryContent>
                    <PrimaryDescContainer width = { windowWidth - 120 }>
                        <PrimaryDescription>
                            실시간 메시징 및 컨텐츠 공유를 사용한 비디오 회의
                        </PrimaryDescription>
                    </PrimaryDescContainer>
                    <PrimaryTextInput placeholder = '회의실 이름을 입력하세요'>

                    </PrimaryTextInput>
                    <PrimaryJoinButton bgColor = '#2642a1'>
                        <PrimaryButtonText textColor = 'white'>
                            참여하기
                        </PrimaryButtonText>
                    </PrimaryJoinButton>
                </PrimaryContent>
                <PrimaryFooter>
                    <PrimaryButton bgColor = 'white'>
                        <PrimaryButtonText>
                            개인 회의실 입장
                        </PrimaryButtonText>
                    </PrimaryButton>
                    <PrimaryLogoutButton bgColor = 'black'>
                        <PrimaryButtonText textColor = 'white'>
                            로그아웃
                        </PrimaryButtonText>
                    </PrimaryLogoutButton>
                </PrimaryFooter>
            </PrimaryContainer>
        </KeyboardAwareScrollView>
    )
}

export default PrimaryPresenter