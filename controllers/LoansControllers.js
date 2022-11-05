const LoansControllers = {};
const { Op } = require('sequelize');
const models = require('../models/index');

LoansControllers.LoanMovie = async (req, res) => {
  try {
    let body = req.body;
    delete body.date
    delete body.end_date
    if (body.email === req.auth?.email) {
      let movie = await models.Movies.findOne({
        where: { title: body.name }
      })
      let repeated = await models.Loans.findOne({
        where: {
          UserIdUser: req.auth.id,
          ArticleIdArticle: movie.ArticleIdArticle
        }
      })
      if (!repeated) {
        let resp = await models.Loans.create({
          date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}`,
          end_date: null,
          UserIdUser: req.auth.id,
          ArticleIdArticle: movie.ArticleIdArticle
        })
        res.status(200).json({
          resp,
          email: req.auth?.email,
          message: "Loan successful!"
        })
      } else {
        res.json({
          message: "You cannot rent a movie you already have"
        })
      }
    }
  } catch (error) {
    res.json({ message: "Error" })
    console.error(error)
  }

}

LoansControllers.LoanShow = async (req, res) => {
  try {
    console.log(req.auth.id)
    let body = req.body;
    delete body.date
    delete body.end_date
    if (body.email === req.auth?.email) {
      let show = await models.Shows.findOne({
        where: { title: body.name }
      })
      let repeated = await models.Loans.findOne({
        where: {
          UserIdUser: req.auth.id,
          ArticleIdArticle: show.ArticleIdArticle
        }
      })
      if (!repeated) {
        let resp = await models.Loans.create({
          date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}`,
          end_date: null,
          UserIdUser: req.auth.id,
          ArticleIdArticle: show.ArticleIdArticle
        })
        res.status(200).json({
          resp,
          email: req.auth?.email,
          message: "Loan successful!"
        })
      } else {
        res.json({
          message: "You cannot rent a show you already have"
        })
      }

    }
  } catch (error) {
    res.json({ message: "Error" })
    console.error(error)
  }

}

LoansControllers.editLoan = async (req, res) => {
  try {
    let body = req.body;
    let movie = await models.Movies.findOne({
      where: { title: body.name }
    })
    console.log(movie.title)
    let loanedMovie = await models.Loans.findOne({
      where: {
        ArticleIdArticle: movie.ArticleIdArticle,
        end_date: null
      }
    })
    console.log(loanedMovie)
    if (body.email === req.auth?.email && movie.ArticleIdArticle === loanedMovie.ArticleIdArticle) {
      let resp = await models.Loans.update({
        end_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}`
      },
        {
          where: {
            ArticleIdArticle: loanedMovie.ArticleIdArticle
          }
        })
    } res.status(200).json({
      message: `Loan terminated for the movie ${movie.title}`
    })
  } catch (error) {
    res.json({ message: "That movie is not loaned" })
    console.error(error)
  }
}

LoansControllers.getMyLoans = async (req, res) => {
  let resp = await models.Loans.findAll({
    where: {
      UserIdUser: req.auth.id
    }
  })
  res.status(200).json({
    resp,
    message: "Here are your loans"
  })
}

module.exports = LoansControllers;