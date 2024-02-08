import Modal from 'react-native-modal'
import { Feather } from '@expo/vector-icons'

import { CloseBtn, Container, Heading, ItemContainer, Text } from "./styles"
import Input from '../Input'
import Button from '../Button'
import { useState } from 'react'
import { Task } from '../../@types/models/Task'
import { showMessage } from 'react-native-flash-message'

interface TodoModalProps {
    modal: boolean
    setModal: (modal: boolean) => void
    addTodo: (task: Task) => void
}

const TodoModal: React.FC<TodoModalProps> = ({ modal, setModal, addTodo }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function closeModal() {
        setModal(false)
    }

    function onSubmit() {
        if (title.length > 1) {
            addTodo({
                title,
                description,
                done: false,
                createdAt: new Date().toISOString()
            })

            setTitle("")
            setDescription("")

            showMessage({
                message: 'Tarefa adicionada com sucesso!',
                type: 'success',
                duration: 2500,
            })

            closeModal()
        }
    }

    return (
        <Modal isVisible={modal} avoidKeyboard onBackdropPress={closeModal}>
            <Container>
                <Heading>Criar novo todo</Heading>

                <CloseBtn onPress={closeModal}>
                    <Feather name='x-circle' size={24} color="red" />
                </CloseBtn>

                <ItemContainer>
                    <Input
                        label='Título da tarefa'
                        placeholder='Lembrar de arrumar a mesa'
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        maxLength={40}
                        numberOfLines={2}
                    />
                    <Text>{title.length}/40</Text>
                </ItemContainer>

                <ItemContainer>
                    <Input
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        label='Descrição da tarefa'
                        placeholder='Breve descrição...'
                        textAlignVertical='top'
                        multiline
                        numberOfLines={4}
                        maxLength={100}
                    />

                    <Text>{description.length}/100</Text>
                </ItemContainer>

                <Button
                    title='Criar tarefa'
                    onPress={onSubmit}
                    disabled={title.length < 1 || description.length < 1}
                />
            </Container>
        </Modal>
    )
}

export default TodoModal
