import React from "react"
import { TouchableOpacityProps } from "react-native"
import { Container, Title } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
    loading?: boolean
    title: string
    disabled?: boolean
    secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({ disabled, secondary, title, loading, ...props }) => (
    <Container {...props} disabled={disabled} secondary={secondary}>
        {loading ? (
            <Title color={secondary ? "#000" : "#fff"}>carregando...</Title>
        ) : (
            <Title color={secondary ? "#000" : "#fff"}>{title}</Title>
        )}
    </Container>
)

export default Button
