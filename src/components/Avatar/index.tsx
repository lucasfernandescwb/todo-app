import { Feather } from '@expo/vector-icons'

import { Container, Fallback } from "./styles"

interface AvatarProps {
    size: number
    fallback?: string
    logout?: boolean
    action?: () => void
    children?: React.ReactNode
}

const Avatar: React.FC<AvatarProps> = ({ size, fallback, logout, children, action }) => {
    return (
        <Container size={size} onPress={action}>
            {fallback && <Fallback>{fallback ?? "L"}</Fallback>}
            {logout && <Feather name='log-out' size={size / 2} color={"#000"} />}
            {children}
        </Container>
    )
}

export default Avatar
