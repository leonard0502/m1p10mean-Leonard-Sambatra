const express = require("express");

const depenseRoutes = express.Router();
const Depense = require("../models/Depense");

depenseRoutes.post("/creerDepense", (req, res) => {
  let { nom, prenom, email, phone, sujet, message } = req.body;
  const newAvis = new Depense({ nom: nom, prenom : prenom, email : email, numero: phone, sujet: sujet, message: message},);
  newAvis
    .save()
    .then(() => {
      res.json({
        status: "EN COURS",
        message: "Création de dépense effectué!",
      });
    })
    .catch(() => {
      res.json({
        status: "ECHEC",
        message: "Une erreur s'est produit lors de la création !",
      });
    });
});
depenseRoutes.get("/getDepense", (req, res) => {
  Depense.find({})
    .then((result) => {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun dépense",
        });
      }
    })
    .catch(() => {
      res.json({
        status: "ECHEC",
        message: "Une erreur s'est produit lors de l'obtention des dépenses!",
      });
    });
});
module.exports = depenseRoutes;
