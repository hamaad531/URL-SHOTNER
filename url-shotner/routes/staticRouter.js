const express = require("express");
const router = express.Router();
const URL = require('../models/url')

router.get('/', async (req, res) => {
    const allurls = await URL.find({});
    return res.render("home.ejs", {
        urls: allurls
    });
});


router.get('/signup', (req, res) => {
    // Fetch the URLs data from the database
    //const urls = await URL.find({});
    return res.render("signup.ejs");
});

module.exports = router; 