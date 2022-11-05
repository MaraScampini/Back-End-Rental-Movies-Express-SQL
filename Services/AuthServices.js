const models = require('../models/index');
const crypto = require('node:crypto');

const assertValidPasswordService = (pass) => {
  if (pass.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  if (!pass.match(/[a-z]/)) {
    throw new Error("Password must contain at least one lower case letter");
  }

  if (!pass.match(/[A-Z]/)) {
    throw new Error("Password must contain at least one upper case letter")
  }

  if (!pass.match(/[0-9]/)) {
    throw new Error("Password must contain at least one number")
  }
};

const assertEmailIsValidService = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email is invalid")
  }
};

const assertEmailIsUniqueService = async (email) => {
  const user = await models.Users.findOne({
    where: {email:email}
  });
  if (user) {
    throw new Error("Email is already registered")
  }
};

const encryptPasswordService = (pass) => {
  const hash = crypto
    .createHmac("sha512", '')
    .update(pass)
    .digest("base64");
  return hash;
}

const createUserService = async (userBody) => {
  const hash = encryptPasswordService(userBody.password);
  console.log(userBody.password)
  userBody.password = hash;
  const user = await models.Users.create({
    name: userBody.name,
    email: userBody.email,
    password: userBody.password,
    date_of_sign_up: userBody.date_of_sign_up,
    RoleIdRole: userBody.RoleIdRole
  });
  return user;
}

module.exports = {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  encryptPasswordService,
  createUserService
}