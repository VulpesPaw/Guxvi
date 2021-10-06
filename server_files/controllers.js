/* --------------------------------- Exports -------------------------------- */
/* -------------------------------------------------------------------------- */

module.exports = { home, login, register, logout, store, index, show, update, destroy };

/* --------------------------------- Imports -------------------------------- */
/* -------------------------------------------------------------------------- */

const { con, mysql } = require('./sql.js');

/* ------------------------------- Controllers ------------------------------ */
/* -------------------------------------------------------------------------- */

function home(req, res) {
    res.send(index(req, res));
}

/* ---------------------------------- CRUD ---------------------------------- */
// Show multiple entries from SQL DB
async function index(req, res) {
    // just a trail, restor to og branch
    try {
        res.send(await get_all_items().toString());
    } catch (error) {
        res.send(error);
    }
}
function show(req, res) {
    // shows id
}

// async function to gett all items
function get_all_items() {
    const promise = new Promise((resolve, reject) => {
        let query = 'SELECT * FROM quotes ORDER BY id ASC LIMIT 20';

        con.query(query, (err, result) => {
            if (err) return reject({ error: err.message });
            console.log(result);
            resolve(result);
        });
    });
    return promise;
}
// Saves quote to Clever Cloud mySQL DB
function store(req, res) {
    let { quote, author } = req.body;

    // Escaping SQL injections
    let query = `
    INSERT INTO quotes (quote, author) VALUES(?,?);
    `;

    // Sends query to SQL DB
    con.query(query, [quote, author], (err) => {
        if (err) {
            // Failed attempt
            console.log(err);
            return res.status(400).send(err.message);
        }

        // Success
        res.statusCode = 201;
        res.send(`Your quote '${quote}' has been added to the database'`);
    });
}
// updates entry
function update(req, res) {
    let query = { ...req.body };

    let arr = [];

    //! IMPORT ESCAPE
    // if(mysql.)
}
function destroy(req, res) {
    // deletes
}

/* ----------------------------- Authoritzation ----------------------------- */
function login(req, res) {}
function register(req, res) {
    const { email, password } = req.body;
}
function logout(req, res) {}
