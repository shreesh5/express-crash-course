const express = require('express')
const path = require('path')
const members = require('./Members')

const app = express()

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
*/

// This route gets all members
app.get('/api/members', (req, res) => {
    res.json(members)
})

// Set static folder
// app.use is used when using middleware
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))