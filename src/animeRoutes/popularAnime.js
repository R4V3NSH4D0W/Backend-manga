const express = require('express');
const router = express.Router();
const {  META } = require("@consumet/extensions");


const anilist = new META.Anilist();

router.get('/', (req, res) => {
    anilist.fetchPopularAnime()
        .then(data => {
            res.json(data); 
        })
        .catch(error => {
            console.error('Error:', error); 
            res.status(500).send('Internal Server Error'); 
        });
});

module.exports = router;
