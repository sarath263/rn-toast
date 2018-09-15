//import liraries
import React, { Component } from "react";
import Toast from "./Toast";

// create a component
const showToast = (toastMessage, status = true) => {
  return <Toast toastVisible={status} text={toastMessage} />;
};
export default showToast;
