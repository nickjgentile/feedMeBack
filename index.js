const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
passport.use(new GoogleStrategy());

//Port to listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Up and running on ${PORT}`)
});