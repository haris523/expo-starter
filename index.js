import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'

const MainApp = () => (
    <Provider store={store}>
        <GestureHandlerRootView style={localStyles.flexOne}>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </GestureHandlerRootView>
    </Provider>
)

const localStyles = StyleSheet.create({
    flexOne: {
        flex: 1
    }
})
import App from './App'
registerRootComponent(MainApp)
