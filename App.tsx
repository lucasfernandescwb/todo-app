import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context"

import Routes from './src/routes'
import { Provider } from 'react-redux'
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/native'
import FlashMessage from "react-native-flash-message"
import theme from './src/config/theme'

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider>
              <StatusBar style="light" backgroundColor={theme.colors.secondary} />
              <Routes />
              <FlashMessage position="center" />
            </SafeAreaProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
