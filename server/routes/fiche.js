const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const ficheRoutes = express.Router();
const Fiche = require("../models/Fiche");
const Voiture = require("../models/Voiture");


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


/*
  Ajout reparation
*/
ficheRoutes.put("/ajoutReparation/:idFiche", (req, res) => {
  let { intitule, prix } = req.body;
  let reparation = {
    intitule: intitule,
    dateDebut: new Date(),
    dateFin: null,
    avancement: 0,
    prix : prix
  };
  var conditions = { _id: ObjectId(req.params.idFiche) }
  , update = { $addToSet: {
    reparation : reparation
  }};
  Reservation.findByIdAndUpdate(conditions, update , { new : true, upsert: true}
    ).exec().then((result) => {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun fiche",
        });
      }
    }
  ).catch((error) => {
    res.json({
      status: "ECHEC",
      message: `Une erreur s'est produit lors de l'obtention des fiches ${error.message}!`,
    });
  });
});

/*
 * Modifier etat fiche
*/
ficheRoutes.put("/:id", (req, res) => {
  let { etat} = req.body;

  var conditions = { _id: ObjectId(req.params.id) }
  , update = { $set: {
    etat : Number(etat)
  }};
  Fiche.findByIdAndUpdate(conditions, update , { new : true, upsert: true}
    ).exec().then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun fiche",
        });
      }
    }
  ).catch((error) => {
    res.json({
      status: "ECHEC",
      message: `Une erreur s'est produit lors de l'obtention des fiches ${error.message}!`,
    });
  });
});

ficheRoutes.get("/getFiche", (req, res) => {
  let query = [{ "_id":{$ne:null} }];
  if ( req?.query?.idUser ) {
    query.push({ idUser : { $eq : req?.query?.idUser}});
  }
  if ( req?.query?.etat ) {
    query.push({ etat : { $lt : req?.query?.etat}});
  }
  Fiche.find({$and: [...query],})
  .populate('idVoiture')
    .populate('idUser')
    .sort({ "dateFiche": 1 })
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
    .catch((error) => {
      res.json({
        status: "ECHEC",
        message: `Une erreur s'est produit lors de l'obtention des fiches ${error.message}!`,
      });
    });
});

ficheRoutes.get("/etat/:etat", (req, res) => {
  let query = [{ "_id":{$ne:null} }];
  if ( req?.params?.etat ) {
    query.push({ etat : { $eq : req?.params?.etat}});
  }
  Fiche.find({$and: [...query],})
  .populate('idVoiture')
    .populate('idUser')
    .sort({ "dateFiche": 1 })
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
    .catch((error) => {
      res.json({
        status: "ECHEC",
        message: `Une erreur s'est produit lors de l'obtention des fiches ${error.message}!`,
      });
    });
});

ficheRoutes.get("/getFicheById", (req, res) => {
    Fiche.find({_id : ObjectId(req.query.id)})
    .populate("idVoiture")
    .populate("idUser")
      .then((result) => {
        if (result.length > 0) {
          res.json(result[0]);
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
