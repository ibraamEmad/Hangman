import React, {useCallback, useEffect, useState, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Start from '../screens/Start'
import Game from '../screens/Game'

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
         options={{headerShown: false}} /> 
          <RootStack.Screen name="Game" component={Game} 
         options={{headerShown: false}} /> 
         {/* <RootStack.Screen name="App" component={AppStack} 
         options={{headerShown: false}} /> 
        <RootStack.Screen name="AdminApp" component={AdminAppStack} 
         options={{headerShown: false}} />  */}
     
    
        </RootStack.Navigator>
        {/* <Chat/> */}
        </NavigationContainer>
    );