import Styled from 'styled-components'

export const PrimaryContainer = Styled.SafeAreaView`
    flex: 1;
    background-color: white;
`

export const PrimaryHeader = Styled.View`
    flex-direction: row;
    align-items: center;
    padding-horizontal: 10px;
    width: 100%;
    height: 70px;
    background-color: #1b1e25;
`

export const PrimaryLogoContainer = Styled.View`
    width: ${props => props.width};
    align-items: center;
`

export const PrimaryContent = Styled.View`
    flex: 1;
    align-items: center;
    
`

export const PrimaryDescContainer = Styled.View`
    width: ${props => props.width};
    align-self: center;
    padding-vertical: 45px;
`

export const PrimaryFooter = Styled.View`
    align-items: center;
    padding-vertical: 10px;
`