import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantesScreen from './screens/RestaurantesScreen';
import ServicosScreen from './screens/ServicosScreen';
import ComprasScreen from './screens/ComprasScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurantes" component={RestaurantesScreen} />
        <Stack.Screen name="Servicos" component={ServicosScreen} />
        <Stack.Screen name="Compras" component={ComprasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
