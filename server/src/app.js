// Library Imports
const express = require('express')
const app = express();
const cors = require('cors')

// local Imports
const hospAuthRouter = require('./routes/hospAuth/hospAuth.route')
const appointRouter = require('./routes/appointment/appoint.route')

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/hospAuth/', hospAuthRouter)
app.use('/api/appoint/', appointRouter)


module.exports = app