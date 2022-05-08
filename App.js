import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from './HomeScreen';
//import DetailsScreen from './DetailsScreen';
import Detalle from './Detalle';
import Casa from './Casa';
import Descripccion from './Descripccion';

const Stack = createNativeStackNavigator();

export default function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Casa" component={Casa}/>
        <Stack.Screen name="Detalle" component={Detalle} options={{title: 'MENU'}} />
        <Stack.Screen name="Descripccion" component={Descripccion} options={{title: 'Descripccion de tareas'}}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}


