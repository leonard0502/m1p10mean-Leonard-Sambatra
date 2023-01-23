const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepenseSchema = new Schema({
  intitule: { type: String, required: true },
  mois: { type: Number, required: true },
  annee: { type: Number, required: true },
  montant: { type: Number, required: true }
});

module.exports = mongoose.model("Depense", DepenseSchema);