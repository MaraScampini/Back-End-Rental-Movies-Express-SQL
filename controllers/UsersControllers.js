const UsersControllers = {};
const models = require('../models/index');
const { encryptPasswordService } = require('../Services/AuthServices');

UsersControllers.getData = async (req, res) => {
  let { email } = req.params;
  let resp = await models.Users.findAll({
    where: { email: email }
  })
  res.send(resp);
};

UsersControllers.patchUser = async (req, res) => {
  const {email} = req.params;
  const user = req.body;
  const userFound = await models.Users.findOne({
    where: {
      email: req.auth.email
    }
  })
  console.log(userFound)
  let newPassword = userFound.password
  if (user.password) {
    newPassword = encryptPasswordService(user.password)
  }
  
  let resp = await models.Users.update(
    {
      name: user.name,
      email: user.email,
      password: newPassword
    },
    {
      where: { email: email }
    }
  )
  res.json({
    resp,
    message: "Usuario actualizado"
  })
};

UsersControllers.deleteUser = async (req, res) => {
  const { id } = req.params;
  let resp = await models.Users.destroy({
    where: {
      id_user: id
    }
  })
  res.json({
    resp,
    message: "Usuario eliminado"
  });
}

module.exports = UsersControllers