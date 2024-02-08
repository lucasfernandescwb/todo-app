import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native"

export const Container = styled.View`
    padding: 16px;
    background: ${props => props.theme.colors.absoluteWhite};
    border-radius: 6px;
    gap: 16px;
    position: relative;
`;

export const Heading = styled.Text`
    text-align: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.colors.dark};
    font-weight: bold;
`

export const Text = styled.Text`
    color: ${props => props.theme.colors.dark};
    font-size: ${RFPercentage(1.5)}px;
    text-align: right;
`

export const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    right: 0px;
    padding: 16px;
`

export const ItemContainer = styled.View`
    gap: 4px;
`
