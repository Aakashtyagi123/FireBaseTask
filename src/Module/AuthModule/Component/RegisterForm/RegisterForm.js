import { useNavigation } from '@react-navigation/native'
import React, { useContext,useState } from 'react'
import { AuthContext } from '../../Hooks/AuthProvider';
import { useDispatch } from 'react-redux';
import LoginRegisterForm from '../../../../CommonComponent/LoginRegisterForm/LoginRegisterForm';
function RegisterForm() {
    const navigation=useNavigation();
    const {register}=useContext(AuthContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [checkState,setCheckState]=useState(false)
    const [showemail,setShowEmail]=useState(false)
    const [showpassword,setShowPassword]=useState(false)
    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const dispatch=useDispatch();
    const [loader,setLoader]=useState(false)

    const registerSubmit=()=>{
        setLoader(true)
          dispatch({
            type:'REGISTER',
            payload:{
              email,
              name,
              number,
            }
          })
          register(email,password).then(res=>setLoader(false)) 
        
    }

    const navigationNext=()=>{
      navigation.navigate('Login');
    }

    let headingText="REGISTER HERE"
    let text="If you Already have a Account"
  return (
<LoginRegisterForm setEmail={setEmail}
 setPassword={setPassword} setCheckState={setCheckState}
  checkState={checkState} setShowEmail={setShowEmail} setShowPassword={setShowPassword} 
  setName={setName} setNumber={setNumber} setLoader={setLoader}
  showemail={showemail} email={email} showpassword={showpassword}
  password={password} loader={loader} onPress={registerSubmit}
  navigationNavigate={navigationNext} headingText={headingText}
  text={text}
  />
  )
}

export default RegisterForm;