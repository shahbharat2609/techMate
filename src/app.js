import express from 'express'

const app = express()
const PORT = 7777

app.get('/', (_req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/test', (_req, res) => {
    res.send('<h1>Test</h1>')
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT http://localhost:${PORT}`)
})