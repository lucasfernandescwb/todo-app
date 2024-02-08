import styled from "styled-components/native"

export const Container = styled.View`
    gap: 8px;
    width: 100%;
`

export const Label = styled.Text<{ color?: string; bold?: boolean }>`
    color: ${props => props.color ? props.color : "#000"};
    font-weight: ${props => props.bold ? "bold" : "normal"};
`

export const InputContainer = styled.TextInput<{ secondary?: boolean; ref: any }>`
    border-radius: 6px;
    border: 2px solid #212121;
    padding: 6px 8px;
    color: ${props => props.secondary ? "#fff" : "darkslategray"};
    background: ${props => props.secondary ? "rgba(0, 0, 0, .6)" : "transparent"};
`

export const ErrorMessage = styled.Text``
