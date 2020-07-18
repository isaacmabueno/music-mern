const express = require('express');
const app = express();
const bodyParcer = require('body-parser');
const cors = require('cors');
const PORT = 4000;

//adding middleware 
app.use(cors());
app.use(bodyParcer.json());

app.listen(PORT, function() {
    console.log("Server is running on port:" + PORT);
});