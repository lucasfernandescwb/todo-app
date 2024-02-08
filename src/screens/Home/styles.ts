import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: #282828;
`

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 16,
        gap: 16,
    }
})``

export const NewTodoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
`;

export const Header = styled.View`
    background: coral;
    padding: 16px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Heading = styled.Text`
    color: white;
    font-weight: bold;
    font-size: ${RFPercentage(2.5)}px;
`

export const TabTitle = styled.Text<{ active: boolean }>`
    color: ${props => props.active ? 'skyblue' : 'white'};
    font-weight: bold;
    font-size: ${RFPercentage(2)}px;
`

export const Tabs = styled.View`
    flex-direction: row;
    align-items: center;
    
    padding: 16px 16px 0px 16px;
`
export const Tab = styled.TouchableOpacity<{ current: boolean }>`
    width: 33%;
    text-align: center;
    align-items: center;
    padding: 16px 8px;
    border-radius: 6px;
    border-width: 2px;
    border-color: ${props => props.current ? "white" : "#FFFFFF32"};
`

export const BtnContainer = styled.View`
    padding: 24px 16px;
`
