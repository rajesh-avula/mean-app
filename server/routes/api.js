const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
var API = 'https://jsonplaceholder.typicode.com';
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://rajesh.a:rajesh2210@ds121906.mlab.com:21906/foodapp';
/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});
MongoClient.connect(MONGO_URL,(err,db) =>{
    if(err){
        return console.log(err);
    }
    db.collection('notes').insertOne(
    {
        title:'Hello MongoDB',
        text:'Hopefully this works!'
    },
    function(err,res){
        if(err){
            db.close();
            return console.log("Creating error"+err);
        }
        db.close();
    }
)
});
// Get all posts
router.get('/posts', (req, res) => {
    res.sendFile(path.join(__dirname +'/users.json'));
    // res.send('Post works');
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    // axios.get(`${API}/posts`)
    //     .then(posts => {
    //         res.status(200).json(posts.data);
    //     }).catch(error => {
    //         res.status(500).send(error)
    // });
});

module.exports = router;