const express = require('express')

const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getCampList()
    .then(campList => {
      res.json(campList)
    })
    .catch(err => res.status(500).send(err.message))  
})

module.exports = router