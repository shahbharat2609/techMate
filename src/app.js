import express from 'express'

const app = express()
const PORT = 7777

app.use('/user', (_req, res, next) => {
    console.log('Handling the route user');
    // res.send('Response!!');
    next();
}, (_req, res) => {
    console.log('Handling the route user 2');
    res.send('Response 2!!');
})

app.use((_req, res) => {
    res.status(404).send("❌❌Oops! Page not found❌❌");
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT http://localhost:${PORT}`)
})