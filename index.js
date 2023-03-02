const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('pino-http')()

dotenv.config();

(() => {
    const app = express();
    const port = process.env.PORT || 9090;

    app.use(bodyParser.json());
    app.use(cors());
    app.use(logger);

	  require('./application/modules')(app);

    app.listen(port, () => {
      console.log(`[SERVER] Listening on port ${port}.`);
    });
})()
