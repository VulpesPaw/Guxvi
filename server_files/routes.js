/* --------------------------------- Imports -------------------------------- */
/* -------------------------------------------------------------------------- */

const express = require('express');
const app = express();

const crud_router = express.Router();
const auth_router = express.Router();

/* --------------------------- Controller Imports --------------------------- */
/* -------------------------------------------------------------------------- */

const { login, register, logout, store, index, show, update, destroy } = require('./controllers');

/* --------------------------------- Routes --------------------------------- */
/* -------------------------------------------------------------------------- */

crud_router.get('/item', index);
crud_router.get('/item:id', show);
crud_router.post('/item', store);
crud_router.put('/item/:id', update);
crud_router.delete('/item/:id', destroy);

auth_router.post('/login', login);
auth_router.post('/register', register);
auth_router.post('/logout', logout);

/* --------------------------------- Exports -------------------------------- */
/* -------------------------------------------------------------------------- */

//* must be keept at bottom, otherwise they are exported before get stuffed
module.exports = { crud_router, auth_router };
