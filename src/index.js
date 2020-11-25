const express = require("express");

const PORT = process.env.PORT || 3001;
let app = express();

app.use(express.json());

app.use('/multiplica', require('./routes/multi'));

app.listen(PORT);
console.log(`Express server listening on port ${PORT}`);

module.exports = app