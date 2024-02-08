import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { RegisterScreen, HomeScreen, LoginScreen } from "../screens"
import { useAppSelector } from "../hooks/useAppSelector"

const Stack = createNativeStackNavigator()

export default function Routes() {
    const USER = useAppSelector(state => state.auth.user)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                animation: 'slide_from_right'
            }}>
                {USER ? (
                    <Stack.Group screenOptions={{ headerShown: false, gestureEnabled: false }}>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Group>
                ) : (
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
