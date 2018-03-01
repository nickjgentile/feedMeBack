const express = require('express');
const app = express();
app.use(express.static(__dirname));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Up and running on ${PORT}`)
});

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});