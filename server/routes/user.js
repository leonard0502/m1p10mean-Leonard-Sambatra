const express = require("express");
const bcrypt = require("bcryptjs");
const userRoutes = express.Router();
const User = require("../models/User");
const maxAge = 3 * 24 * 60 * 60 * 1000;
const SECRET_KEY = "NOTESAPI"; //cle de securite ze tina atao fa tsy votery io NOTES... io
const jwt = require("jsonwebtoken");
const mailService = require("./../service/mail");

userRoutes.get("/login", async (req, res) => {
  console.log(req.body.mdp);
  let {email, mdp } = req.query;
  try {
      const existClient = await User.findOne({
          email: email
      });
      if (!existClient) {
          return res.status(200).json({
              message: "Utilisateur introuvable"
          });
      }
      const verifMdp = await bcrypt.compare(mdp, existClient.email);
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
          role: existClient.role
      });
  } catch (error) {
      console.log(error);
      res.status(200).json({
          message: "Erreur dans votre code de connexion",
          error
      });
  }
});

userRoutes.get("/inscription", async (req, res) => {
  const {
      nom,prenom,mail,mdp,contact
  } = req.query;
  try {
      const existClient = await User.findOne({
          mail: mail
      });
      if (existClient) {
          return res.status(200).json({
              message: "address e-mail déjà utilisé"
          });
      }
      const hasshedPassord = await bcrypt.hash(mdp, 10);
      // console.log(req.body);
      new User({
          nom: nom,
          prenom: prenom,
          mail: mail,
          mdp: hasshedPassord,
          contact: contact,
          role: 'c'
      }).save().then(function (user) {
          console.log("Envoyer mail");
          const sujet ="Inscription Garage";
            const text ="Bonjour Madame/Monsieur,"+nom+" "+prenom+".\n Vous êtes incrit dans notre garage!!"
          mailService.sendEmail(sujet, text,mail);
          const token = jwt.sign({
              mail: user.mail,
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
              mail: user.mail,
              token: token,
              role

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
