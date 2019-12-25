const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('final-webpage-master'))

app.get('/', (req, res) => res.sendFile(__dirname + '\final-webpage-master\index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))