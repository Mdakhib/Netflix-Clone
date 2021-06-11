/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setemailAddress] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (event) => {
    event.preventDefault();

    //firebase work here!

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
      //push to the browse page
      })
      .catch((error) => {
        setemailAddress('')
        setpassword('')
        setError(error.message)
    })



  };


  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error} </Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email or Phone Number"
              autoComplete="off"
              value={emailAddress}
              onChange={({ target }) => setemailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              autoComplete="off"
              value={password}
              type="password"
              onChange={({ target }) => setpassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />;
    </>
  );
}
