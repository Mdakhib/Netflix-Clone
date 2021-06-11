import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div``;

export const Error = styled.div``;

export const Base = styled.form``;

export const Title = styled.h1``;

export const Text = styled.p``;

export const TextSmall = styled.p``;

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input``;

export const Submit = styled.button``;
