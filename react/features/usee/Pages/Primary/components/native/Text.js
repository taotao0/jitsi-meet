import Styled from 'styled-components'

export const PrimaryDescription = Styled.Text`
    color: #1b1e25;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
`

export const PrimaryButtonText = Styled.Text`
    color: ${props => props.textColor ? props.textColor : 'black'};
`