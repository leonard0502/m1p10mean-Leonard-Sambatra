const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepenseSchema = new Schema({
  intitule: { type: String, required: true },
  montant: { type: Number, required: true },
  dateDepense: { type: Date, required: true }
});

module.exports = mongoose.model("Depense", DepenseSchema);