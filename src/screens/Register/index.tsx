import { useRef, useState } from "react"
import { TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { Container, Content, Error, Header, Heading, HelperText, Text } from "./styles"

import { Button, Input, PageLayoutWithSafeArea } from "../../components"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setUser } from "../../store/reducers/auth/actions"

export default function RegisterScreen() {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState<string | null>(null)

    const [loading, setLoading] = useState(false);

    const passwordRef = useRef<TextInput>(null)

    const onLoginNavigation = () => {
        // @ts-ignore
        navigation.navigate('Login')
    }

    const handleRegister = async () => {
        setLoading(true)

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)

            dispatch(setUser({
                email: user.email,
                username: user.displayName ?? null,
                photo: user.photoURL || null
            }))

            // @ts-ignore
            navigation.navigate("Home")

        } catch (err) {
            // @ts-ignore
            if (err.code.includes("email")) {
                setError("Email inserido já está em uso.")
            }

            // @ts-ignore
            if (err.code.includes("auth/weak-password")) {
                setError("A senha deve possuir no mínimo 6 caracteres.")
            }

            // @ts-ignore
            if (err.code.includes("auth/invalid-email")) {
                setError("Favor inserir um e-mail válido.")
            }
            
        } finally {
            setLoading(false)
        }
    }

    return (
        <PageLayoutWithSafeArea dismissKeyboard>
            <Container
                imageStyle={{ opacity: .4 }}
                source={{ uri: "https://images.pexels.com/photos/4195327/pexels-photo-4195327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
            >
                <Content>
                    <Header>
                        <Heading>TODO APP</Heading>

                        <Text>Bem-vindo, faça seu cadastro abaixo</Text>
                    </Header>

                    <Input
                        bold
                        secondary
                        color="white"
                        label="Endereço de e-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />

                    <Input
                        bold
                        secondary
                        color="white"
                        label="Senha"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        onSubmitEditing={handleRegister}
                    />

                    <Button 
                        title="Entrar" 
                        loading={loading} 
                        onPress={handleRegister} 
                        disabled={email.length < 4}
                    />

                    {error && <Error>{error}</Error>}

                    <HelperText>Já possui conta? <HelperText color="skyblue" onPress={onLoginNavigation}>Fazer login</HelperText></HelperText>
                </Content>
            </Container>
        </PageLayoutWithSafeArea>
    )
}
