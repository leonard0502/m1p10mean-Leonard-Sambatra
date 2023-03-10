const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongodb").ObjectId;

const PaiementSchema  = new Schema({
  idFiche: {
    type: ObjectId,
    ref: "Fiche",
    required: true,
  },
  montantAPayer: { type: Number, required : true},
  remise: { type: Number, required : true},
  montantPayer: { type: Number, required : true},
  datePaie: { type: Date, default: Date.now , required : true}
});

module.exports = mongoose.model("Paiement", PaiementSchema);