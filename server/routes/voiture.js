const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const voitureRoutes = express.Router();
const Fiche = require("../models/Fiche");
const Voiture = require('../models/Voiture');


/**
 *   Inserer voiture user POST /voiture
 */

voitureRoutes.post("/", (req, res) => {
  const { matricule , marque , type} = req.body;
  Voiture.create({ matricule , marque , type}
    ).then((resp) =>{
      res.json({
        status: 200,
        message: "Voiture créer",
      });
    })
  .catch((err) => {
    res.json({
      status: 500,
      message: "Voiture non créer",
      error : err.message,
    });
  });
});

/**
 *   Tous les voitures user GET /voiture
 */
voitureRoutes.get("/", (req, res) => {
  Voiture.find()
    .then((result) => {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun voiture",
        });
      }
    })
    .catch(() => {
      res.json({
        status: "ECHEC",
        message: "Une erreur s'est produit lors de l'obtention des voitures!",
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

/**
 *   voitures user GET /voiture/user/:id
 */
voitureRoutes.get("/user/:idUser", (req,res) => {
  let voiture = [];
  Fiche.find({idUser : ObjectId(Number(req.params.idUser))})
    .then((result) => {
      //  console.log("Tonga ttttttttttttttt",result);
     if (result.length > 0) {
          result.forEach((resu) => {

              Voiture.find({_id : ObjectId(resu.idVoiture.toString())})
              .then((resv) => {
                voiture.push(resv);
              });
          });
          res.json(voiture);
      } else {
        res.json({
          status: "ECHEC",
          message: "Ce client n'a aucune Voiture",
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

module.exports = voitureRoutes;
