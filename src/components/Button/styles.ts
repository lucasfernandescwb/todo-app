import styled from "styled-components/native"

export const Container = styled.TouchableOpacity<{ disabled?: boolean; secondary?: boolean }>`
    width: 100%;

    align-items: center;
    text-align: center;
    justify-content: center;

    padding: 14px 16px;
    border-radius: 6px;
    background: ${props => props.secondary ? "transparent" : props.theme.colors.primary};
    border: ${props => props.secondary ? `2px solid ${props.theme.primary}` : "none"};
    opacity: ${props => props.disabled ? .7 : 1};
`

export const Title = styled.Text<{ color: string }>`
    color: ${props => props.color};
    font-weight: bold;
    text-transform: uppercase;
`
