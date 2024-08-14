import "dotenv/config"
import express from "express"

import conn from "./config/conn.js"

import "./models/palestranteModal.js"

import routePalestrante from "./routes/palestranteRoutes.js"

const PORT = process.env.PORT;

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('eventos/palestrantes', routePalestrante )


app.get("/", (request, response)=>{
    response.send('Olá, Mundo!')
})


app.listen(PORT, () => {
    console.log("Servidor on port " + PORT)
})