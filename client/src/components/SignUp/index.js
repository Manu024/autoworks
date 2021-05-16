import React, { useState } from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "./SignupElements";
import axios from "axios";
import { withRouter } from "react-router-dom";

const SignUp = (props) => {
  const [message, setMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      name: e.target[1].value,
      password: e.target[2].value,
    };
    const response = await axios.post(`/user-signup?email=${data.email}`, data);
    if (response.data.message) {
      setMessage(<p style={{ color: "red" }}>{response.data.message}</p>);
      return;
    }
    props.dispatch({
      type: "UPDATE_STATE",
      token: response.data.token,
      user: response.data.user,
      email: response.data.email,
    });
    props.history.replace("/");
  };
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Autoworks</Icon>
        <FormContent>
          <Form onSubmit={(e) => submitHandler(e)}>
            <FormH1>Create your account</FormH1>
            {message}
            <FormLabel>Email</FormLabel>
            <FormInput type="email" required></FormInput>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" required></FormInput>
            <FormLabel>Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Continue</FormButton>
            <Text to="/signin">Already have an account?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default withRouter(SignUp);
