import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View,Image,TouchableOpacity,Text,StyleSheet} from "react-native"
function HeaderComp() {
const navigation=useNavigation();
    return (
    <View>
    <View style={styles.headerView}>
      <View style={styles.headerDividerview}>
        <View style={styles.paddingFix}>
            <TouchableOpacity onPress={()=>{
navigation.toggleDrawer();
            }}>
          <Image
            source={{
uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="              }}
            style={{ height: 30, width: 30,marginLeft:15 }}
          />
          </TouchableOpacity>
        </View>
        <View />
      </View>
    </View>
  </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({
    headerView: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      backgroundColor: "#841584",
      height: 60,
      justifyContent:"center",
      elevation: 2
    },
    headerDividerview: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    paddingFix: { padding: 0 },
 
  });