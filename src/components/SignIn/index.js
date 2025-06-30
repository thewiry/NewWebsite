import React from 'react';
import Logo from '../../images/Logo.png'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SigninElements';
import { animateScroll as scroll } from 'react-scroll';

const toggleHome = () => {
  scroll.scrollToTop();
};


const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
        {/* <Icon to='/' src={Logo}>Ariz</Icon> */}
        <Icon onClick={toggleHome} to='/'>
            <img src={Logo} alt="Ariz Inc Logo" style={{height: '70px', width: 'auto'}} />
            </Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
