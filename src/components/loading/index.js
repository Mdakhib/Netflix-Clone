/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
