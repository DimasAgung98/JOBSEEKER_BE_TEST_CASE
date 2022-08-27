const express = require('express');
const app = express();
const route = require('./routes/router');
const PORT = 8000;

//DECLARE EJS VIEW ENGINE
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(route);

//RUNNING EXPRESS SERVER USING PORT 8000
app.listen(PORT, () => {
    console.log(`Server is Runnning On Port ${PORT}`);
})

