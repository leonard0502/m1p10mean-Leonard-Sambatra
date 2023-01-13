const express = require("express");

const voitureRoutes = express.Router();
const Fiche = require("../models/Fiche");

voitureRoutes.get("/getAllVoitureParUser", (req, res) => {
    let voiture = [];
    Fiche.find({idUser : ObjectId(req.query.idUser)})
    .then((result) => {
      if (result.length > 0) {
        result.forEach((res) => {
            voiture.push(res.idVoiture);
        });
        res.json(voiture);
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

voitureRoutes.get("/getAllRepParVoiture", (req,res) => {
    let reparation = [];
    Fiche.find({idVoiture : ObjectId(req.query.idVoiture)})
      .then((result) => {
        if (result.length > 0) {
            result.forEach((res) => {
                res.reparation.forEach((rep) => {
                    reparation.push(rep);
                });
            });
            res.json(reparation);
        } else {
          res.json({
            status: "ECHEC",
            message: "Cette voiture a aucune Reparation ",
          });
        }
      })
      .catch(() => {
        res.json({
          status: "ECHEC",
          message: "Une erreur s'est produit lors de l'obtention des reoaration de cette voiture!",
        });
      });
});