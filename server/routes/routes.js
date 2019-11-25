const express = require('express')

const router = express.Router()

const db = require('../db/db')

router.get('/campList', (req, res) => {
  db.getCampList()
    .then(displayCampList)
    .catch(err => res.status(500).send(err.message))

  function displayCampList (categories) {
    res.json(categories)
  }
})

module.exports = router