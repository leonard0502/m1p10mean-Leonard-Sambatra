const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const ficheRoutes = express.Router();
const Fiche = require("../models/Fiche");

ficheRoutes.post("/creerFiche", (req, res) => {
  let { idVoiture, idUser, etat, dateFiche, reparation } = req.body;
  const newFiche = new Fiche({ idVoiture: ObjectId(idVoiture), idUser : ObjectId(IdUser), etat : etat, dateFiche : dateFiche, reparation : reparation},);
  newFiche
    .save()
    .then(() => {
      res.json({
        status: "EN COURS",
        message: "Création de fiche effectué!",
      });
    })
    .catch(() => {
      res.json({
        status: "ECHEC",
        message: "Une erreur s'est produit lors de la création de la Fiche!",
      });
    });
});
ficheRoutes.get("/getFiche", (req, res) => {
  Fiche.find({})
    .then((result) => {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun fiche",
        });
      }
    })
    .catch(() => {
      res.json({
        status: "ECHEC",
        message: "Une erreur s'est produit lors de l'obtention des fiches!",
      });
    });
});
ficheRoutes.get("/getFicheById/", (req, res) => {
    Fiche.find({_id : ObjectId(req.query.id)})
    .populate("idVoiture")
    .populate("idUser")
      .then((result) => {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.json({
            status: "ECHEC",
            message: "Aucun fiche",
          });
        }
      })
      .catch(() => {
        res.json({
          status: "ECHEC",
          message: "Une erreur s'est produit lors de l'obtention des fiches!",
        });
      });
  });
module.exports = ficheRoutes;
