//import liraries
import React, { Component } from "react";
import Toast from "./Toast";

// create a component
const showToast = (toastMessage, duration = 3000, status = true) => {
  return (
    <Toast toastVisible={status} text={toastMessage} duration={duration} />
  );
};
export default showToast;
