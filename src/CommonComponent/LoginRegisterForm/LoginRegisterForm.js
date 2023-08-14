import React from 'react'
import {View,Text,TouchableOpacity,Image,TextInput,StyleSheet,Button} from "react-native";
import images from '../../Assets/images';
import { getEmailValidationRules,getPasswordValidationRules } from '../../Hooks/Helper';
function LoginRegisterForm(props) {
    const {setCheckState,setEmail,setLoader,setNumber,setName,checkState,showemail,showpassword,
        setShowPassword,setPassword,setShowEmail,headingText,text,
        email,password,onPress,loader,navigationNavigate}=props;
  return (
    <View style={{flex:1}}>
    <View style={{justifyContent:"center",alignItems:"center",marginTop:100}}>
    <Text style={{fontSize:21,fontWeight:"800"}}>{headingText}</Text>
    </View>
    <View style={{marginHorizontal:20,marginTop:40}}>
    <TextInput onChangeText={(e)=>{
          setName(e)}} placeholder='Enter Name' style={styles?.inputStyle} />
            <View style={{height:25}}/>
            <TextInput onChangeText={(e)=>{
          setNumber(e)}} placeholder='Enter Number' style={styles?.inputStyle} />
            <View style={{height:25}}/>
        <TextInput onChangeText={(e)=>{
          let p=getEmailValidationRules(e)
          setShowEmail(p)
          setEmail(e)}} placeholder='Enter Email' style={styles?.inputStyle} />
          {(!showemail && email)  ?<Text style={{color:"red"}}>Email is Invalid</Text>:null}
        <View style={{height:25}}/>
        <TextInput onChangeText={(e)=>{
          let p=getPasswordValidationRules(e)
          setShowPassword(p)
          setPassword(e)}} placeholder='Enter Password' style={styles?.inputStyle} secureTextEntry={true} />
          {(!showpassword && password)  ?<Text style={{color:"red"}}>Password is min 8 char and 1 Uppercase and 1 number </Text>:null}

        <View style={{height:25}}/>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{setCheckState(!checkState)}}>
        <Image source={checkState?images.uncheck:images.check} style={{height:25,width:25}} />
        </TouchableOpacity>
        <Text style={{fontSize:15,fontWeight:"400",marginLeft:10}}>Please Accept Terms & Condition</Text>
        </View>
        <View style={{height:50}}/>
        <Button
        disabled={!checkState || !showemail || !showpassword ||loader}
        onPress={()=>onPress()}
        title={headingText}
        color="#841584"
/>
    </View>
    <View style={{alignItems:"center",marginTop:50}}>
        <Text>{text}</Text>
        <TouchableOpacity onPress={()=>navigationNavigate()}><Text style={{textDecorationLine:"underline"}}>Click Here</Text></TouchableOpacity>
    </View>
    <View style={{height:50}}/>
</View>
  )
}

export default LoginRegisterForm;
const styles=StyleSheet.create({
    inputStyle:{
      borderWidth:1,borderColor:"gray"
    }
  })