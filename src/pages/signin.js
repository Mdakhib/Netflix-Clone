/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { isValidElement, useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

export default function Signin() {
  const [emailAddress, setemailAddress] = useState();
  const [password, setpassword] = useState();
  const [error, seterror] = useState();


  //check form input elements are valid
  //email nd password

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error} </Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              autoComplete='off'
              value={emailAddress}
              onChange={({ target }) => setemailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              autoComplete='off'
              value={password}
              onChange={({ target }) => setpassword(target.value)}
            />
            <Form.Submit disable={isInvalid} type='submit' >Sign In</Form.Submit>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />;
    </>
  );
}
