import React from "react";
import Dashboard from "../Dashboard";
import { appProps } from "../objects";

const Base = (props: appProps) => {
  return (
    <>
      <Dashboard apiKey={props.apiKey} projectId={props.projectId} userId={props.userId} userGroupId={props.userGroupId}></Dashboard>
    </>
  );
};


export default Base;