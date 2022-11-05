const models = require('../models/index');
const {
  assertValidPasswordService,
  assertEmailIsValidService,
  assertEmailIsUniqueService,
  createUserService,
  encryptPasswordService
} = require('../Services/AuthServices');

const jsonwebtoken = require('jsonwebtoken');

const authRegisterController = async (req, res) => {
  const body = req.body;
  console.log(body.email)
  try {
    assertValidPasswordService(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Invalid password, ${error.message}`)
    return;
  }
  try {
    assertEmailIsValidService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Invalid email, ${error.message}`)
    return;
  }
  try {
    assertEmailIsUniqueService(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Email is already registered`)
    return;
  }
  try {
    const UserCreated = await createUserService(body);
    res.status(201).json(UserCreated)
  } catch (error) {
    console.error(error)
    res.status(500).json({message: error.message})
  }
}

const authLoginController = async (req, res) => {
  const {email, password} = req.body;
  try {
	const userFound = await models.Users.findOne({
	    where: {email: email}});
	    if(!userFound) {
	      res.status(401).json({message: "email incorrect"})
	      return;
	  }
	  const hashedPassword = encryptPasswordService(password)
    console.log(hashedPassword)
    console.log(userFound.password)
	  if (hashedPassword !== userFound.password){
	    res.status(401).json({message: "Password or email incorrect"})
	    return;
	  }
	
	  const secret = "secretjsonwebtoken";
	
	  if(secret.length < 10) {
	    throw new Error("JWT_SECRET is not set");
	  }
	
	  const jwt = jsonwebtoken.sign({
	    email: userFound.email,
	    role: userFound.RoleIdRole.toLowerCase()
	  }, secret);
	  res.status(200).json({
	    message: "Login successful",
	    your_token_is: jwt
	  })
} catch (error) {
	res.send(error)
}

}

module.exports = {
  authLoginController,
  authRegisterController
};