const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all user input data stored in the feedback table 
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback";';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error GETting feedback table data '/feedback' ${queryText}`, error);
        res.sendStatus(500);
    });
});

module.exports = router; 
