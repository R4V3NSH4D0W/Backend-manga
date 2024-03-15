const express = require('express');
const router = express.Router();
const { MANGA } = require("@consumet/extensions");

router.get('/:id', (req, res) => {
   const { id } = req.params; 
   
   
   const mangadex = new MANGA.MangaDex();
   mangadex.fetchMangaInfo(id)
      .then(data => {
         res.json(data); 
      })
      .catch(error => {
         console.error('Error:', error); 
         res.status(500).send('Internal Server Error'); 
      });
});

module.exports = router;
