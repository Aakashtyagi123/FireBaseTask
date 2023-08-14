import { useNavigation } from '@react-navigation/native';
import React,{useContext,useState} from 'react'
import { AuthContext } from '../../Hooks/AuthProvider';
import { useDispatch } from 'react-redux';
import LoginRegisterForm from '../../../../CommonComponent/LoginRegisterForm/LoginRegisterForm';
function LoginForm() {
  const navigation=useNavigation();
  const {login}=useContext(AuthContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [showemail,setShowEmail]=useState(false)
  const [showpassword,setShowPassword]=useState(false)
  const [checkState,setCheckState]=useState(false)
  const [name,setName]=useState('')
  const [number,setNumber]=useState('')
  const dispatch=useDispatch();
  const [loader,setLoader]=useState(false);

  const loginSubmit=()=>{
    setLoader(true)
              dispatch({
                type:'REGISTER',
                payload:{
                  email,
                  name,
                  number,
                }
              })
     login(email,password).then(res=>setLoader(false)) 
}

const navigationNext=()=>{
  navigation.navigate('Register');
}
let headingText="LOGIN HERE"
let text="If you don't have a Account"
  return (
<LoginRegisterForm setEmail={setEmail}
 setPassword={setPassword} setCheckState={setCheckState}
  checkState={checkState} setShowEmail={setShowEmail} setShowPassword={setShowPassword} 
  setName={setName} setNumber={setNumber} setLoader={setLoader}
  showemail={showemail} email={email} showpassword={showpassword}
  password={password} loader={loader} onPress={loginSubmit}
  navigationNavigate={navigationNext}  headingText={headingText}
  text={text}
  />
  )
}

export default LoginForm;