import React, { Fragment } from 'react';
import LoginForm from '../../Module/AuthModule/Component/LoginForm/LoginForm';
import { ScrollView } from 'react-native';

function LoginScreen() {
  return (
    <Fragment>
      <ScrollView>
      <LoginForm />
      </ScrollView>
    </Fragment>
  );
}

export default LoginScreen;
