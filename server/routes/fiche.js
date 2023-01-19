const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const ficheRoutes = express.Router();
const nodemailer = require("nodemailer");
const Fiche = require("../models/Fiche");
const Voiture = require("../models/Voiture");

let transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
  tls: {
    rejectUnauthorized: false
  } 

});
transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Ready for messages");
    console.log(success);
  }
});


ficheRoutes.post("/creerFiche",async  (req, res) => {
  let { idVoiture, idUser, etat, dateFiche, reparation } = req.body;
  /**
   * Si la voiture n'existe pas encore
   */
  if(!idVoiture){
        const { matricule , marque , type} = req.body;
        await Voiture.create({ matricule , marque , type}
          ).then((resp) =>{
            idVoiture = resp._id;
       });
    }
    const newFiche =  new Fiche({ idVoiture: ObjectId(idVoiture), idUser : ObjectId(idUser), etat : etat, dateFiche : dateFiche, reparation : reparation},);
  newFiche
    .save()
    .then(() => {
      res.json({
        status: "EN COURS",
        message: "Création de fiche effectué!",
      });
    })
    .catch((err) => {
      console.log("Error////",err.message);
      res.json({
        status: "ECHEC",
        message: "Une erreur s'est produit lors de la création de la Fiche! "+err.message,
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
