import React,{Fragment} from "react";
import RegisterForm from "../../Module/AuthModule/Component/RegisterForm/RegisterForm";
import { ScrollView } from "react-native";

function RegisterScreen() {
  return (
    <Fragment>
      <ScrollView>
      <RegisterForm />
      </ScrollView>
    </Fragment>
  );
}

export default RegisterScreen;