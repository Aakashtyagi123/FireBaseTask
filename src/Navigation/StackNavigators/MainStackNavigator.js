import React, { useContext, useEffect, useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen/RegisterScreen';
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../../Module/AuthModule/Hooks/AuthProvider';
import DashboardDrawerNavigator from '../DrawerNavigators/DashboardDrawerNavigator';
const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
const {user,setUser}=useContext(AuthContext);
const [initializing,setInitializing]=useState(true)

const onAuthStateChanged=(user)=>{
    setUser(user)
    if(initializing) setInitializing(false)
}

useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
},[])

if(initializing) return null;

  return (
    <MainStack.Navigator   screenOptions={{
      headerShown: false,
    }}>
      {user ? (
        <MainStack.Group>
          <MainStack.Screen
            name={'Dashboard'}
            component={DashboardDrawerNavigator}
          />
        </MainStack.Group>
      ) : (
        <MainStack.Group>
          <MainStack.Screen name={'Register'} component={RegisterScreen} />

          <MainStack.Screen name={'Login'} component={LoginScreen} />

        </MainStack.Group>
      )}
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
