import { RFPercentage } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid white;
    border-radius: 6px;
    height: 120px;
`

export const Content = styled.View<{ isDeleted?: boolean }>`
    gap: 8px;
    width: ${props => props.isDeleted ? '100%' : '80%'};
    padding: 8px;
`

export const Title = styled.Text`
    font-weight: bold;
    color: ${props => props.theme.colors.status.attention};
    font-size: ${RFPercentage(2.8)}px;
`

export const Description = styled.Text`
    color: ${props => props.theme.colors.absoluteWhite};
    font-size: ${RFPercentage(1.8)}px;
`

export const Delete = styled.TouchableOpacity`
    background: ${props => props.theme.colors.status.error};
    align-items: center;
    justify-content: center;
    height: 50%;
`;

export const Finished = styled.TouchableOpacity<{ isDone?: boolean; }>`
    background: ${props => props.theme.colors.status.success};
    align-items: center;
    justify-content: center;
    height: ${props => props.isDone ? "100%" : "50%"};
    width: ${props => props.isDone ? "15%" : "100%"};
    border-radius: ${props => props.isDone ? "4px" : 0};
`

export const ActionsContainer = styled.View`
    width: 15%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
`
