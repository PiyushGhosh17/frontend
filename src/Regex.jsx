import { useState } from "react";

const user = /[A-Za-z]{1,20}/;
const char8 = /[A-Za-z]{7,20}/;
const digit = /[0-9]{1,20}/;

export const validateUser = (username) => {
  if (!user.test(username)) {
    return false;
  }
  return true;
};

export const validatePass = (pass) => {
  if (!(char8.test(pass) && digit.test(pass))) {
    return false;
  }
  return true;
};
