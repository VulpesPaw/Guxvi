/* --------------------------------- Imports -------------------------------- */
/* -------------------------------------------------------------------------- */

const mysql = require('mysql');

/* ------------------------------- Connection ------------------------------- */
/* -------------------------------------------------------------------------- */

const con = mysql.createConnection({
    host: 'bnr7nasrzfhj9dtg3yoa-mysql.services.clever-cloud.com',
    user: 'uxbdu5h63plaivld',
    password: 'oN5XHrXMWuBwK6AZMPYt',
    database: 'bnr7nasrzfhj9dtg3yoa',
});

/* --------------------------------- Exports -------------------------------- */
/* -------------------------------------------------------------------------- */

module.exports = { con, mysql };
