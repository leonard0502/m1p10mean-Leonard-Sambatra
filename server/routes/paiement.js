const express = require("express");
const paiementRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Paiement = require("../models/Paiement");
const Fiche = require("../models/Fiche");

paiementRoutes.post("/Payer", (req, res) => {
  let { idFiche, montantAPayer,remise,datePaie } = req.body;
  if(remise === undefined) remise = 0;
  const newPaiement = new Paiement({
    idFiche: ObjectId(idFiche),
    montantAPayer: montantAPayer,
    remise:remise,
    montantPayer : montant -(montant*remise/100),
    datePaie: datePaie,
  });
  newPaiement
    .save()
    .then(() => {
        Fiche.updateOne({_id: ObjectId(idFiche)}, {etatPaie : 1} , function(
          err,
        ) {
          if (err) {
            res.json({
              status: "ECHEC",
              message: "Paiement echoué!",
            });
          } else {
            res.json({
              status: "EN COURS",
              message: "Paiement effectuée!",
            });
          }
        });
      })
      .catch(() => {
        res.json({
          status: "ECHEC",
          message: "Paiement echoué!",
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
