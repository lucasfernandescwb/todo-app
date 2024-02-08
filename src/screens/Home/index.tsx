import { Fragment, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { 
    Avatar, 
    Button, 
    Card, 
    PageLayoutWithSafeArea, 
    TodoModal 
} from "../../components"

import { 
    BtnContainer, 
    Container, 
    Content, 
    Header, 
    Heading, 
    Logo, 
    NewTodoContainer, 
    Tab, 
    TabTitle, 
    Tabs 
} from "./styles"

import { Task } from '../../@types/models/Task'

import { filterActiveTasks, sortTasksByDate, validIfTaskExistInActive } from '../../utils/handleTask'
import { useAppSelector } from "../../hooks/useAppSelector"
import { logout } from "../../store/reducers/auth/actions"
import { useAppDispatch } from "../../hooks/useAppDispatch"

const STORAGE_KEY = '@tasks'

export default function HomeScreen() {
    const [modal, setModal] = useState(false)
    const USER = useAppSelector(state => state.auth.user)
    const dispatch = useAppDispatch()

    const [activeTasks, setActiveTasks] = useState<Task[]>([])
    const [doneTasks, setDoneTasks] = useState<Task[]>([])
    const [removedTasks, setRemovedTasks] = useState<Task[]>([])

    const [activeTab, setActiveTab] = useState("active")

    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        loadTasks()
    }, [])

    useEffect(() => {
        saveTasks()
    }, [activeTasks, doneTasks, removedTasks])

    function addTask(task: Task) {
        if (!validIfTaskExistInActive(activeTasks, task)) {
            setActiveTasks((prevState) => [...prevState, task])
        }
    }

    function removeTask(task: Task) {
        if (validIfTaskExistInActive(activeTasks, task)) {
            setActiveTasks(filterActiveTasks(activeTasks, task))
            setRemovedTasks((prevState) => [...prevState, task])
        }
    }

    function markAsDone(task: Task) {
        task.done = true

        if (validIfTaskExistInActive(activeTasks, task) && task.done) {
            setActiveTasks(filterActiveTasks(activeTasks, task))
            setDoneTasks((prevState) => [...prevState, task])
        }
    }

    async function loadTasks() {
        try {
            const tasksJson = await AsyncStorage.getItem(STORAGE_KEY)
            if (tasksJson !== null) {
                const tasks = JSON.parse(tasksJson)
                setActiveTasks(tasks.activeTasks || [])
                setDoneTasks(tasks.doneTasks || [])
                setRemovedTasks(tasks.removedTasks || [])
            }
        } catch (error) {
            setError(`Erro ao carregar tarefas do AsyncStorage: ${error}`)
        }
    }

    async function saveTasks() {
        try {
            const tasks = {
                activeTasks,
                doneTasks,
                removedTasks
            }
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
        } catch (error) {
            setError(`Erro ao salvar tarefas no AsyncStorage: ${error}`)
        }
    }

    async function signOut() {
        await AsyncStorage.removeItem(STORAGE_KEY)

        dispatch(logout())
    }

    return (
        <PageLayoutWithSafeArea>
            <Container>
                <Header>
                    <Logo>{USER?.email ?? "Todo App"}</Logo>
                    <Avatar size={32} logout action={signOut} />
                </Header>

                <Tabs>
                    <Tab onPress={() => setActiveTab('active')} current={activeTab === "active"}>
                        <TabTitle active={activeTab === 'active'}>Em aberto</TabTitle>
                    </Tab>

                    <Tab onPress={() => setActiveTab('done')} current={activeTab === "done"}>
                        <TabTitle active={activeTab === 'done'}>Finalizadas</TabTitle>
                    </Tab>

                    <Tab onPress={() => setActiveTab('deleted')} current={activeTab === "deleted"}>
                        <TabTitle active={activeTab === 'deleted'}>Excluídas</TabTitle>
                    </Tab>
                </Tabs>

                {error && (
                    <Heading>{error}</Heading>
                )}

                {activeTab === 'active' && !error && (
                    <Fragment>
                        <BtnContainer>
                            <Button title='Nova tarefa' onPress={() => setModal(true)} />
                        </BtnContainer>

                        <Content>
                            {activeTasks.length >= 1 ? sortTasksByDate(activeTasks).map(task => (
                                <Card
                                    key={task.title}
                                    title={task.title}
                                    description={task.description}
                                    done={task.done}
                                    action={() => removeTask(task)}
                                    markAsDone={() => markAsDone(task)}
                                />
                            )) : (
                                <Heading>Você ainda não possui tarefas a fazer</Heading>
                            )}
                        </Content>
                    </Fragment>
                )}

                {activeTab === "done" && !error && (
                    <Content>
                        <NewTodoContainer>
                            <Heading>{doneTasks.length >= 1 ? `Tarefas finalizadas - ${doneTasks.length}` : "Nenhuma tarefa finalizada"}</Heading>
                        </NewTodoContainer>

                        {doneTasks.length >= 1 && sortTasksByDate(doneTasks).map(task => (
                            <Card
                                key={task.title}
                                title={task.title}
                                description={task.description}
                                done={task.done}
                            />
                        ))}
                    </Content>
                )}

                {activeTab === "deleted" && !error && (
                    <Content>
                        <NewTodoContainer>
                            <Heading>{removedTasks.length >= 1 ? `Tarefas excluídas - ${removedTasks.length}` : "Ainda não há tarefas excluídas"}</Heading>
                        </NewTodoContainer>

                        {removedTasks.length >= 1 && sortTasksByDate(removedTasks).map(task => (
                            <Card
                                key={task.title}
                                title={task.title}
                                description={task.description}
                                done={task.done}
                                isDeleted={true}
                            />
                        ))}
                    </Content>
                )}
            </Container>

            <TodoModal
                modal={modal}
                setModal={setModal}
                addTodo={addTask}
            />
        </PageLayoutWithSafeArea>
    )
}
