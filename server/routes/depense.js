const express = require("express");

const depenseRoutes = express.Router();
const Depense = require("../models/Depense");

depenseRoutes.post("/creerDepense", (req, res) => {
  let { intitule, montant, depense } = req.body;
  const newDepense = new Depense({ intitule: intitule, montant : montant, depense : depense},);
  newDepense
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
