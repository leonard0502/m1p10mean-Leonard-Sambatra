const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  type: {type: Number, required:true}, //(f:financier,a: atelier, c:client) 
  nom : {type:String, required:true},
  prenom : {type:String, required:true},
  email: {type: String, required:true},
  mdp : {type: String, required:true},
  contact : {type: String, required:true},
});

module.exports = mongoose.model("User", UserSchema);