const express = require("express");
const paiementRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Paiement = require("../models/Paiement");
const Fiche = require("../models/Fiche");

paiementRoutes.put("/:idFiche", (req, res) => {
  let { somme } = req.body;
  let remise = 0;
  if(remise === undefined) remise = 0;
  const newPaiement = new Paiement({
    idFiche: ObjectId(req.params.idFiche),
    montantAPayer: somme,
    remise:remise,
    montantPayer : somme -(somme*remise/100),
    datePaie: new Date(),
  });
  newPaiement
    .save()
    .then(() => {
        Fiche.updateOne({_id: ObjectId(req.params.idFiche)}, {etatPaie : 1} , function(
          err,
        ) {
          if (err) {
            res.json({
              status: "ECHEC",
              message: `Paiement echoué ${err.message}!`,
            });
          } else {
            res.json({
              status: "EN COURS",
              message: "Paiement effectuée!",
            });
          }
        });
      })
      .catch((err) => {
        res.json({
          status: "ECHEC",
          message: `Paiement echoué ${err.message}!`,
        });
      });
});

paiementRoutes.get("/", (req, res) => {
  Paiement.find({})
    .then((result) => {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun paiement",
        });
      }
    })
    .catch(() => {
      res.json({
        status: "ECHEC",
        message: "Une erreur s'est produit lors de l'obtention des paiements!",
      });
    });
});

/**
 * Get stat par mois 
 */
paiementRoutes.get("/years", (req, res) => {
  Paiement.aggregate([ {
    $group : {
      _id : [{
        mois : {$month : "$datePaie"},
        annee : {$year : "$datePaie"}
     }],
      chiffreAffaire : { $sum : "$montantPayer"}
    }
  }])
    .then((result) => {
      if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun paiement",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: "ECHEC",
        message: `Une erreur s'est produit lors de l'obtention des paiements ${err.message}!`,
      });
    });
});

/**
 * Get stat par jours
 */
paiementRoutes.get("/days/:month/:year", (req, res) => {
  const from = new Date(Date.UTC(Number(req.params.year), Number(req.params.month) - 1 , 1)); // "2019-12-01T00:00:00.000Z"
  const to = new Date(Date.UTC(Number(req.params.year), Number(req.params.month), 1)); // "2020-01-01T00:00:00.000Z"
  Paiement.aggregate([ 
    {
      $sort : { datePaie : 1}
    },
    { 
      $match: { 
        datePaie: {
          $lt: to,
          $gte: from
       }
      }
    },
    {
      $group : {
        _id : [{
          jour : {$dayOfMonth : "$datePaie"},
          mois : {$month : "$datePaie"},
          annee : {$year : "$datePaie"}
      }],
        chiffreAffaire : { $sum : "$montantPayer"}
      }
  }
])
    .sort({ "_id.jour": 1 })
    .then((result) => {
  if (result.length > 0) {
        res.json(result);
      } else {
        res.json({
          status: "ECHEC",
          message: "Aucun paiement",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: "ECHEC",
        message: `Une erreur s'est produit lors de l'obtention des paiements ${err.message}!`,
      });
    });
});
// paiementRoutes.get("/getPaiement", (req, res) => {
//   let { start, end, typePaie } = req.query;
//   if(typePaie === undefined) {
//     Paiement.find({
//       $and: [
//         { datePaie: { $gte: new Date(start).toISOString() } },
//         { datePaie: { $lte: new Date(end).toISOString() } },
//         { "idFiche":{$ne:null} },
//       ],
//     }).populate('idFiche')
//     .populate('idTypePaie')
//     .sort({ "paiement.datePaie": 1 })
//       .then((resultat) => {
//         res.json(resultat);
//       })
//       .catch(() => {
//         res.json({
//           status: "ECHEC",
//           message: "Une erreur s'est produit lors de l'obtention du paiement!",
//         });
//       });
//   } else {
//     Paiement.find({
//       $and: [
//         { datePaie: { $gte: new Date(start).toISOString() } },
//         { datePaie: { $lte: new Date(end).toISOString() } },
//         { idTypePaie: {$eq: ObjectId(typePaie)}},
//       ],
//     }).populate('idFiche')
//     .populate('idTypePaie')
//     .sort({ "paiement.datePaie": 1 })
//       .then((resultat) => {
//         console.log(resultat)
//         res.json(resultat);
//       })
//       .catch(() => {
//         res.json({
//           status: "ECHEC",
//           message: "Une erreur s'est produit lors de l'obtention du paiement!",
//         });
//       });
//   }
  
// });
module.exports = paiementRoutes;
