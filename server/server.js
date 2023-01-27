const express = require("express");
const app = express();
const port = 3050;
app.use(express.json());

const cors = require("cors");
app.use(cors());
app.use("/depense", require("./routes/depense"));
app.use("/fiche", require("./routes/fiche"));
app.use("/paiement", require("./routes/paiement"));
app.use("/user", require("./routes/user"));
app.use("/voiture", require("./routes/voiture"));
require("./db/connection");
require('dotenv').config();

app.listen(port, () => {
  
  console.log("SERVER is running on port: ".concat(port));
});
