const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongodb").ObjectId;

const FicheSchema = new Schema({
  idVoiture: {
    type: ObjectId,
    ref: "Voiture",
    required: true,
  },
  idUser : {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  etat : {type : Number, required : true},
  etatPaie : {type : Number, required : true},
  dateFiche : {type : Date, required : true},
  reparation : [{intitule : {type : String, required : true}, dateDebut : {type : Date, required : true}, dateFin : {type : Date, required : true}, avancement : {type : Number, required : true} }]
});

module.exports = mongoose.model("Fiche", FicheSchema);
