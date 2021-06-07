import React from "react";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children} </Container>;
}
