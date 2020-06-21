const express = require('express')
const router = express.Router()
const members = require('../../Members')

// This route gets all members
router.get('/', (req, res) => {
    res.json(members)
})

// Get single member
router.get('/:id', (req, res) => {
    // Runs the condition and returns True or False
    const found = members.some(member => member.id === parseInt(req.params.id))

    // res.send(req.params.id)
    // req.params.id is sent as a string
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
})

module.exports = router