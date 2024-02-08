import React from "react"
import { TextInputProps } from "react-native"
import { Container, ErrorMessage, InputContainer, Label } from "./styles"

interface InputProps extends TextInputProps {
    label?: string
    error?: string
    color?: string
    bold?: boolean;
    secondary?: boolean;
}

const Input = React.forwardRef(({ secondary, bold, color, label, error, ...props }: InputProps, ref) => (
    <Container>
        {label && <Label color={color} bold={bold}>{label}:</Label>}

        <InputContainer {...props} secondary={secondary} ref={ref} />

        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
))

export default Input
