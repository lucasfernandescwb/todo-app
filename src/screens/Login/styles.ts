import styled from "styled-components/native"
import { RFPercentage } from "react-native-responsive-fontsize"

export const Container = styled.ImageBackground`
    flex: 1;
    background: rgba(0,0,0, .8);
`

export const Content = styled.View`
    width: 100%;
    height: 100%;
    gap: 16px;
    padding: 32px;

    align-items: center;
    justify-content: center;
`

export const Error = styled.Text`
    color: salmon;
    font-weight: bold;
`

export const Header = styled.View`
    gap: 24px;
    margin-bottom: 26px;
`;

export const Heading = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    font-weight: bold;
    letter-spacing: 18px;
    color: white;
    padding-bottom: 8px;
    border-bottom-width: 2px;
    border-bottom-color: white;
    text-align: center;
`

export const Text = styled.Text`
    color: white;
    text-align: center;
    font-size: ${RFPercentage(2.3)}px;
    font-weight: bold;
`

export const HelperText = styled.Text<{ color?: string }>`
    font-size: ${RFPercentage(1.8)}px;
    color: ${props => props.color ? props.color : '#fff'};
    font-weight: ${props => props.color ? 'bold' : 'normal'};
    padding: ${props => props.color ? '8px' : 0};
`
