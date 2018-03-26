Server side of my feedback application. 

This repository uses Node with Express to route.

## In order to get this server-side app to work, you will need to create a config folder with a keys.js file that houses your Google oAuth keys. See below for why: 

const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,