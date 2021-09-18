import React, {useCallback, useEffect, useState, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Start from '../screens/Start'
import Game from '../screens/Game'
import Success from '../screens/Success'
import Failure from '../screens/Failure'

const RootStack = createStackNavigator();

export default () => (
    <NavigationContainer 
    >
    <RootStack.Navigator initialRouteName="Start" 
        // headerMode="none"
        // screenOptions={{
        //   headerShown: false
        // }} 
        
        screenOptions={{
          headerTintColor: '#F5F5F4',
          headerStyle: {
             backgroundColor: '#0B121A' ,
             shadowColor: 'transparent',
             elevation: 0,
        },
        headerBackTitle:' ',
      }}
        >             
        <RootStack.Screen name="Start" component={Start} 
         options={{headerShown: false, animationEnabled: false,}} /> 
          <RootStack.Screen name="Game" component={Game} 
         options={{headerShown: false, animationEnabled: false,}} /> 
         <RootStack.Screen name="Success" component={Success} 
         options={{headerShown: false, animationEnabled: false,}} /> 
        <RootStack.Screen name="Failure" component={Failure} 
         options={{headerShown: false, animationEnabled: false,}} /> 
     
    
        </RootStack.Navigator>
        {/* <Chat/> */}
        </NavigationContainer>
    );