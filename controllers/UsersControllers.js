const UsersControllers = {};
const models = require('../models/index');

// TODO - añadir token usuario - Obtener datos de un perfil por ID
UsersControllers.getData = async (req, res) => {
  let { email } = req.params;
  let resp = await models.Users.findAll({
    where: { email: email }
  })
  res.send(resp);
};

// TODO - añadir token usuario - Actualizar los datos de un usuario
UsersControllers.patchUser = async (req, res) => {
  const { email } = req.params;
  const user = req.body;
  let resp = await models.Users.update(
    {
      name: user.name,
      email: user.email,
      password: user.password
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

// TODO - añadir admin Eliminar un usuario
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