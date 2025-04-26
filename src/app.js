import express from 'express'
import connectDB from './config/database.js'

const app = express()
const PORT = 7777

app.use((_req, res) => {
    res.status(404).send("❌❌Oops! Page not found❌❌");
})

connectDB()
    .then(() => {
        console.log("✅✅Database connection established...✅✅");
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT http://localhost:${PORT}...`)
        })
    })
    .catch((err) => {
        console.error("❌❌Database connection failed❌❌");

    })