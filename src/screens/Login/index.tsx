import { useRef, useState } from "react"
import { TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { Container, Content, Error, Header, Heading, HelperText, Text } from "./styles"

import { Button, Input, PageLayoutWithSafeArea } from "../../components"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase"
import { setUser } from "../../store/reducers/auth/actions"
import { ErrorResponse } from "../../@types/models/Error"

export default function LoginScreen() {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const passwordRef = useRef<TextInput>(null)

    const [error, setError] = useState<string | null>(null)

    const [loading, setLoading] = useState(false);

    const onRegisterNavigation = () => {
        // @ts-ignore
        navigation.navigate("Register")
    }

    const handleLogin = async () => {
        setLoading(true)

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)

            dispatch(setUser({
                email: user.email,
                username: user.displayName ?? null,
                photo: user.photoURL ?? null
            }))

            // @ts-ignore
            navigation.navigate("Home")

        } catch(err) {
            const errMsg = err as ErrorResponse

            if (errMsg && errMsg.code.includes("auth/invalid-credential")) {
                setError("Credenciais inválidas")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <PageLayoutWithSafeArea dismissKeyboard>
            <Container 
                imageStyle={{ opacity: .4 }}
                source={{ uri: "https://images.pexels.com/photos/7014509/pexels-photo-7014509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
            >
                <Content>
                    <Header>
                        <Heading>TODO APP</Heading>

                        <Text>Login - Bem-vindo de volta 😎</Text>
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
                        onSubmitEditing={() => passwordRef.current?.focus()}
                        returnKeyType="next"
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
                        ref={passwordRef}
                        onSubmitEditing={handleLogin}
                    />

                    <Button 
                        title="Entrar" 
                        onPress={handleLogin} 
                        loading={loading} 
                        disabled={email.length < 4}
                    />

                    {error && <Error>{error}</Error>}

                    <HelperText>Não possui conta? <HelperText color="skyblue" onPress={onRegisterNavigation}>Fazer cadastro</HelperText></HelperText>
                </Content>
            </Container>
        </PageLayoutWithSafeArea>
    )
}
