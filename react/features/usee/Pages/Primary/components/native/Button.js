import Styled from 'styled-components'

export const PrimaryHeaderButton = Styled.TouchableOpacity`

`

export const PrimaryButton = Styled.TouchableOpacity`
    width: 80%;
    height: 54px;
    max-width: 800px;
    border: 1px;
    border-radius: 25px;
    border-color: #cfcfcf;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor};
`

export const PrimaryJoinButton = Styled(PrimaryButton)`
    margin-top: 20px;
`

export const PrimaryLogoutButton = Styled(PrimaryJoinButton)``