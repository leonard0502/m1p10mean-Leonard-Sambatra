const express = require("express");
const bcrypt = require("bcryptjs");
const userRoutes = express.Router();
const User = require("../models/User");
const maxAge = 3 * 24 * 60 * 60 * 1000;
const SECRET_KEY = "NOTESAPI"; //cle de securite ze tina atao fa tsy votery io NOTES... io
const jwt = require("jsonwebtoken");
const mailService = require("./../service/mail");

userRoutes.post("/login", async (req, res) => {

  let {email, mdp } = req.body;
  try {
      const existClient = await User.findOne({
          email: email
      });
      if (!existClient) {
          return res.status(200).json({
              message: "Utilisateur introuvable"
          });
      }
      const verifMdp = await bcrypt.compare(mdp, existClient.mdp);
      console.log(verifMdp);
      if (!verifMdp) {
          return res.status(200).json({
              message: "mots de passe ou mail incorrecte"
          });
      }
      const token = jwt.sign({
          email: existClient.email,
          id: existClient._id,
          date: new Date()
      }, SECRET_KEY, {
          expiresIn: maxAge
      });
      res.cookie('jwt', token, {
          httpOnly: false,
          maxAge: maxAge
      });
      res.status(201).json({
          nom: existClient.nom,
          prenom: existClient.prenom,
          email: existClient.email,
          token: token,
          type: existClient.type
      });
  } catch (error) {
      console.log(error);
      res.status(200).json({
          message: "Erreur dans votre code de connexion",
          error
      });
  }
});

userRoutes.post("/inscription", async (req, res) => {
  const {
      nom,prenom,email,mdp,contact
  } = req.body;
  try {
      const existClient = await User.findOne({
          email: email
      });
      if (existClient) {
          return res.status(200).json({
              message: "address e-mail déjà utilisé"
          });
      }
      console.log(mdp);
      const salt = bcrypt.genSaltSync(10);
    const hasshedPassord = bcrypt.hashSync(mdp, salt);
      console.log(hasshedPassord);
      new User({
          nom: nom,
          prenom: prenom,
          email: email,
          mdp: hasshedPassord,
          contact: contact,
          type: 'c'
      }).save().then(function (user) {
          const sujet ="Inscription Garage";
            const text ="Bonjour Madame/Monsieur,"+user.nom+" "+user.prenom+".\n Vous êtes incrit dans notre garage!!"
        //   mailService.sendEmail(sujet, text,user.email);
          const token = jwt.sign({
              email: user.email,
              id: user._id
          }, SECRET_KEY, {
              expiresIn: maxAge
          });
          res.cookie('jwt', token, {
              httpOnly: true,
              maxAge
          });
          res.status(201).json({
              nom: user.nom,
              prenom: user.prenom,
              mail: user.email,
              token: token,
              type:user.type

          })
      });

  } catch (error) {
      console.log(error);
      res.status(200).json({
          message: "Erreur d'inscription",
          error
      });
  }
});


userRoutes.post("/creerUser", (req, res) => {
    let { type, nom, prenom, email, mdp, contact } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(mdp, salt);
    const newUser = new User({ type: type, nom:nom, prenom:prenom, email: email, mdp : hash, contact:contact});
    newUser
      .save()
      .then(() => {
        res.json({
          status: "EN COURS",
          message: "Création d' user effectué!",
        });
      })
      .catch(() => {
        res.json({
          status: "ECHEC",
          message: "Une erreur s'est produit lors de la création d' user'!",
        });
      });
  });
module.exports = userRoutes;
