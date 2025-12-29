const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('CD Demo v1.0 - ' + new Date()));
app.listen(3000, () => console.log('Running on 3000'));
