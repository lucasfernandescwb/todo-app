import { Feather } from '@expo/vector-icons'

import { ActionsContainer, Container, Content, Delete, Description, Finished, Title } from "./styles"

interface CardProps {
    title: string
    description: string
    done: boolean
    action?: () => void
    markAsDone?: () => void
    isDeleted?: boolean
}

const Card: React.FC<CardProps> = ({ action, markAsDone, title, description, done, isDeleted }) => {
    return (
        <Container>
            <Content isDeleted={isDeleted}>
                <Title>{title}</Title>
                <Description numberOfLines={5}>{description}</Description>
            </Content>

            {done && (
                <Finished isDone>
                    <Feather name='check-circle' size={24} color={'white'} />
                </Finished>
            )}

            {!done && !isDeleted && (
                <ActionsContainer>
                    <Finished onPress={markAsDone}>
                        <Feather name='check-circle' size={24} color={'white'} />
                    </Finished>

                    <Delete onPress={action}>
                        <Feather name='trash-2' size={24} color={'white'} />
                    </Delete>
                </ActionsContainer>
            )}
        </Container>
    )
}

export default Card
