import React from 'react'
import {Text} from "react-native";
import Router from './src/Navigation/Router';
import { AuthProvider } from './src/Module/AuthModule/Hooks/AuthProvider';
import { Provider } from 'react-redux';
import store,{persistor} from "./src/Redux/Reducers"
import { PersistGate } from 'redux-persist/integration/react';

function App() { 
 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <AuthProvider>
    <Router />
    </AuthProvider>
    </PersistGate>
    </Provider>
  )
}

export default App