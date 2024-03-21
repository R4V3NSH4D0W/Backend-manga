const express =require("express");
const morgan = require('morgan');
const debug = require('debug')('app:startup');

const search=require('./src/routes/search');
const mangainfo=require('./src/routes/mangaInfo');
const chapterspages=require('./src/routes/chapterPages');

const animeInfo =require('./src/animeRoutes/animeInfo');
const searchAnime =require('./src/animeRoutes/searchAnime');
const animeSource =require('./src/animeRoutes/animeSource');
const randomAnime =require('./src/animeRoutes/randomAnime');
const popularAnime =require('./src/animeRoutes/popularAnime');
const trendingAnime =require('./src/animeRoutes/trendingAnime');
const episodeSource =require('./src/animeRoutes/episodeSource');


const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{setTimeout(next,1000)});

app.use('/api/search',search);
app.use('/api/mangaInfo',mangainfo);
app.use('/api/chapterPages',chapterspages);

app.use('/api/animeInfo',animeInfo);
app.use('/api/searchAnime',searchAnime);
app.use('/api/episodeInfo',episodeInfo);
app.use('/api/animeSource',animeSource);
app.use('/api/randomAnime',randomAnime);
app.use('/api/popularAnime',popularAnime);
app.use('/api/trendingAnime',trendingAnime);

if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));