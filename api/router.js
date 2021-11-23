const express = require('express');
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

const API = 'https://superheroapi.com/api/4500791343373570/search/'

app.use(cors())

app.get("/heroes", function (req, res){

    consultarherues(req.query.nameHeroes)
        .then((data) =>{
            res.status(200).send(data)
        })
})

async function consultarherues(nameHeroes){

    let res = await axios.get(API + nameHeroes)
    return res.data;
}


app.listen(PORT, function (){
    console.log("BFF Listo")
})
