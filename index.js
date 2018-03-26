const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//Port to listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Up and running on ${PORT}`)
});