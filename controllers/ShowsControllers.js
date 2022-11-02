const ShowsControllers = {};
const { Op, Sequelize } = require('sequelize');
const models = require('../models/index');
const sequelize = require('../db/db')


// Todas las series
ShowsControllers.getAll = async (req, res) => {
  let resp = await models.Shows.findAll();
  res.send(resp);
}
// Series Top Rated
ShowsControllers.getTopRated = async (req, res) => {
  let resp = await models.Shows.findAll({
    where: {
      vote_average: {
        [Op.gt]: 7,
      }
    }
  })
  res.send(resp);
};
// Series por ID
ShowsControllers.getById = async (req, res) => {
  let id = req.params.id;
  let resp = await models.Shows.findAll({
    where: { id_show: id }
  })
  res.send(resp);
};
// Series por título
ShowsControllers.getByTitle = async (req, res) => {
  let title = req.params.title;
  let resp = await models.Shows.findAll({
    where: { title: title }
  })
  res.send(resp);
};
// Series con capítulo en próximos 7 días
ShowsControllers.getByDate = async (req, res) => {
  let resp = await sequelize.query("SELECT * FROM railway.Shows where release_date BETWEEN (CURDATE()) and (CURDATE() + INTERVAL 7 DAY)");
  res.send(resp);
};
// Series en cines
ShowsControllers.getByTheater = async (req, res) => {
  let resp = await models.Shows.findAll({
    where: {
      on_theaters: true
    }
  })
  res.send(resp);
}





module.exports = ShowsControllers
