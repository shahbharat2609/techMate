import express from 'express'
import connectDB from './config/database.js'
import User from './models/User.js'

const app = express();
app.use(express.json());

const PORT = 7777;

app.post("/signup", async (req, res) => {

    const user = new User(req.body);          //** creating a new instance of the user model

    try {
        await user.save();
        res.send("✅✅User Added successfully✅✅");
    } catch (err) {
        res.status(500).send("❌❌User addition failed❌❌", err.message);
    }
});

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