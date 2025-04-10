import express from 'express'

const app = express()
const PORT = 7777

// app.use('/', (_req, res) => {
//     res.send('<h1>Hello World</h1>')
// })


//! Query params
// app.get('/user', (req, res) => {
//     console.log(req.query);
//     res.send({
//         firstName: "Bharat",
//         lastName: "Shah"
//     })
// })

//! Path params
// app.get('/user/:userId/:password', (req, res) => {
//     console.log(req.params);
//     res.send({
//         firstName: "Bharat",
//         lastName: "Shah"
//     })
// })




app.use((_req, res) => {
    res.status(404).send("❌❌Oops! Page not found❌❌");
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT http://localhost:${PORT}`)
})