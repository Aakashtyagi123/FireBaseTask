  import React, {useMemo, useState,useContext} from 'react';
  import { SafeAreaView,Text,View,Button } from 'react-native';
  import { AuthContext } from '../../../Module/AuthModule/Hooks/AuthProvider';
  function DrawerMenu() {
    const {user,logout} =useContext(AuthContext)
    return (
      <SafeAreaView flex={1} variant={'primary'}>
        <View style={{marginHorizontal:15,marginTop:50}}>
                    <Button
                     onPress={()=>{
                     logout();
                      }}
            title="Logout Here"
            color="#841584"
/>
</View>
        <View style={{position:"absolute",bottom:10,left:20}}>
      <Text style={{fontSize:18,fontWeight:"600"}}>version 1.0.0</Text>
      </View>
      </SafeAreaView>
    );
  }
  
  export default DrawerMenu;
  