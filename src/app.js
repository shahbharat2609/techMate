import express from 'express'
import { adminAuth, userAuth } from './middlewares/auth.js'

const app = express()
const PORT = 7777


app.use('/admin', adminAuth);
// app.use('/user',userAuth);


app.get('/user',userAuth,(req,res)=>{
    res.send('User Data Sent');
})

app.get('/admin/getAllData', (req, res) => {
    res.send('All Data Sent')
})


app.get('/admin/deleteUser', (_req, res) => {
    res.send('User Deleted');
})



// app.get('/user', (_req, res, next) => {
//     console.log('Handling the route user');
//     next();
// }, (_req, res) => {
//     console.log('Handling the route user 2');
//     res.send('Response 2!!');
// })


app.use((_req, res) => {
    res.status(404).send("❌❌Oops! Page not found❌❌");
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT http://localhost:${PORT}`)
})