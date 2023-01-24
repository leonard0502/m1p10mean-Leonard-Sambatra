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
  etat : {type : Number, default : 0 },
  etatPaie : {type : Number, default : 0 },
  dateFiche : {type : Date, required : true},
  reparation : [{intitule : {type : String, required : true}, dateDebut : {type : Date, required : true}, dateFin : {type : Date, default: null}, avancement : {type : Number, required : true} , prix : {type : Number, required : true}}]
});

module.exports = mongoose.model("Fiche", FicheSchema);