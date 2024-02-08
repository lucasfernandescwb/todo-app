import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.Pressable<{ size: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.size / 2}px;
    background: ${props => props.theme.colors.absoluteWhite};
    align-items: center;
    justify-content: center;
`

export const Fallback = styled.Text`
    color: ${props => props.theme.colors.dark};
    font-size: ${RFPercentage(1.7)}px;
    font-weight: bold;
`
