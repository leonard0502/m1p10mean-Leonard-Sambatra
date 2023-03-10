const express = require("express");

const depenseRoutes = express.Router();
const Depense = require("../models/Depense");
const auth = require("./../middleware/auth");

depenseRoutes.post("/creerDepense", auth, (req, res) => {
  let { intitule, montant, mois, annee, dateDepense } = req.body;
  let date = new Date(dateDepense);
  mois = date.getMonth()+1;
  annee = date.getFullYear();
  const newDepense = new Depense({ intitule: intitule, mois:mois, annee: annee ,montant : montant},);
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
        message: "Une erreur s'est produit lors de la création de la dépense!",
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
