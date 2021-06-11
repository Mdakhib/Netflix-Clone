/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
        
      </HeaderContainer>
      <FooterContainer />;
    </>
  );
}
