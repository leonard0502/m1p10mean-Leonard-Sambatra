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

voitureRoutes.get("/getAllRepParVoiture/:idVoiture", (req,res) => {
  console.log(req.params.idVoiture);
    let reparation = [];
    Fiche.find({idVoiture : ObjectId(req.params.idVoiture)})
      .then((result) => {
        console.log(result);
        if (result.length > 0) {
            result.forEach((res) => {
                res.reparation.forEach((rep) => {
                    reparation.push(rep);
                });
            });
            console.log(reparation);
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
 async function getVoiture(idVoiture){
   const listret = await Voiture.find({_id : idVoiture});
   if( listret.length > 0 ) {
      return listret[0];
   } else {
      return null;
   }
    }
voitureRoutes.get("/user/:idUser",async (req,res) => {
  try {
    const voiture = [];
    const listFiche = await Fiche.find({idUser : ObjectId(req.params.idUser)});
    let tailleret = listFiche.length;

    await listFiche.forEach(async (resu) => {
      const tempVoiture = await getVoiture(resu.idVoiture);
      if ( voiture.filter(word => word._id.toString() === tempVoiture._id.toString()).length === 0 ) {
        voiture.push(tempVoiture);
      } else {
        tailleret--;
      }
      if ( voiture.length === tailleret ) {
          res.json(voiture);
      }
   });
  } catch( error) {
    console.log(error);
    res.json({
      status: "ECHEC",
      message: "Une erreur s'est produit lors de l'obtention des reoaration de cette voiture!",
    });
  }
});

module.exports = voitureRoutes;
