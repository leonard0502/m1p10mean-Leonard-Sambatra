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

const sendEmail = ({ sujet,text,email}, res) => {
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: sujet,
      html: "<!DOCTYPE html><html><head><style>body{justify-content: center;}div.centrer {margin: 0px 50px 0px 50px;justify-content: center;align-items: center;}div.adresse {line-height: 7px;text-align: center;color: gray;}</style></head><body>"+
      "<div class=`centrer`>"+text+"</div><div class=`adresse`><p><b>Andavamamba</b></p><p><b>Lot III X 12 Antananarivo</b></p><p><b>contact@garage.com</b></p><p><b>M1-P10-Léonard-Sambatra</b></p></div></div></body></html>"  
    };
  
    console.log(mailOptions) 
          transporter
            .sendMail(mailOptions)
            .then(() => {
              res.json({
                status: "EN COURS"
              });
            })
            .catch((err) => {
              console.log(err); 
              res.json({
                status: "ECHEC",
                message: "Erreur de hachage des données email!",
              });
            });
  };

  module.exports = {
    sendEmail
}