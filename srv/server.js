const cds = require('@sap/cds');
const cors = require('cors');

cds.on('bootstrap', (app) => {
    app.use(cors({
        origin: 'https://isprints.vercel.app',
        methods: 'GET,POST,PUT,PATCH,DELETE',
        allowedHeaders: 'Content-Type,Authorization'
    }));
});

module.exports = cds.server;