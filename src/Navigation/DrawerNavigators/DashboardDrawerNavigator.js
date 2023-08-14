import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DashBoardScreen from '../../Screens/DashboardScreen/DashBoardScreen';
import DrawerMenu from './Components/DrawerMenu';


const Drawer = createDrawerNavigator();
function DashboardDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <DrawerMenu />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 330,
        },
        drawerType: 'front',
      }}>
      <Drawer.Screen name="Home" component={DashBoardScreen} />
    </Drawer.Navigator>
  );
}

export default DashboardDrawerNavigator;
