const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all user input data stored in the feedback table 
router.get('/', (req, res) => {
  let queryText = `
    SELECT * FROM feedback;
  `;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(`Error GETting feedback table data '/feedback' ${queryText}`, error);
      res.sendStatus(500);
    });
});

// POST new feedback from a user
router.post('/', (req, res) => {
  const { feeling, understanding, support, comments } = req.body;
  const queryText = `
    INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4);
  `;
  pool.query(queryText, [feeling, understanding, support, comments])
    .then(() => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(`Error POSTing feedback ${queryText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
