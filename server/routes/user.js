const express = require("express");
const bcrypt = require("bcryptjs");
const userRoutes = express.Router();
const User = require("../models/User");

userRoutes.get("/verifier", async (req, res) => {
  let {email, mdp } = req.query;
  const user = await User.findOne({ email: email });
  if (user) {
    const validPassword = await bcrypt.compare(mdp, user.mdp);
    if (validPassword) {
      res.json(user);
    } else {
      res.json({
        status: "Erreur",
        message: "Votre mot de pass ou/et email est incorrect!",
      });
    }
  } else {
    res.json({
      status: "Erreur",
      message: "Votre mot de pass ou/et email est incorrect!!",
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
