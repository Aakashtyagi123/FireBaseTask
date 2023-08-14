import React, { useContext } from 'react'
import { Text, TouchableOpacity,Button,View,StyleSheet,Image, SafeAreaView } from 'react-native'
import { AuthContext } from '../../Module/AuthModule/Hooks/AuthProvider'
import { useNavigation } from '@react-navigation/native'
import HeaderComp from '../../Module/DashboardModule/HeaderComp/HeaderComp'
import {useSelector,useDispatch} from "react-redux"
function DashBoardScreen() {
  let arr=["Name","Email","Number"]
  const myState=useSelector((state)=>state?.user)
  console.log(myState?.[0]?.email,"888888888")
  const {user,logout} =useContext(AuthContext)
  const navigation=useNavigation();

  // const FormData=(ques,ans)=>{
  //   return(
  //     <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:50}}>
  // <Text>{ques}</Text>
  // <Text>{ans}</Text>
  // </View>
  //   )
  // }

  return (
    <SafeAreaView>
  <HeaderComp/>
<View style={{marginTop:50}}>
  <Text style={{fontSize:21,fontWeight:"800",textAlign:"center"}}>Welcome To DashBoard</Text>
</View>

<Text style={{textAlign:"center",fontSize:18,marginTop:30,fontWeight:"800"}}>User Detail</Text>
<View style={{marginHorizontal:30}}>
{myState?.[0]?.email?<View style={styles.rowDirection}>
  <Text style={styles.textStyle}>{"Email:"}</Text>
  <Text style={styles.textStyleans}>{myState?.[0]?.email}</Text>
  </View>:null}
  {myState?.[0]?.name?<View style={styles.rowDirection}>
  <Text style={styles.textStyle}>{"Name:"}</Text>
  <Text style={styles.textStyleans}>{myState?.[0]?.name}</Text>
  </View>:null}
 {myState?.[0]?.number ? <View style={styles.rowDirection}>
  <Text style={styles.textStyle}>{"Number:"}</Text>
  <Text style={styles.textStyleans}>{myState?.[0]?.number}</Text>
  </View>:null}
  </View>
</SafeAreaView>
    )
}

export default DashBoardScreen


const styles=StyleSheet.create({
  rowDirection:{
    flexDirection:"row",alignItems:"center",marginTop:50
  },
  textStyle:{fontSize:15,fontWeight:"600",width:"20%"},
  textStyleans:{fontSize:15,fontWeight:"600",width:"75%"}

})
