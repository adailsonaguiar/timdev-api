const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}!` })
})

routes.post('/', (req, res) => {

    console.log(req.body)

    return res.json({ ok: `true` })
})

module.exports = routes