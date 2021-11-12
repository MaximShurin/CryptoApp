import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AboutApp from '../screens/AboutApp'
import Quotes from '../screens/Quotes'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1CB5E0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={AboutApp}
          options={{ title: 'О приложении' }}
        />
        <Stack.Screen
          name="Quotes"
          component={Quotes}
          options={{ title: 'Котировки' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
