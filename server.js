/* -------------------------------------------------------------------------- */
/*                 Auth, Cookies & Sessions - connected to SQL                */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- To Do --------------------------------- */
/* -------------------------------------------------------------------------- */

/* 
TODO § ----- §
+ Create authentication; registration and login
+ Keep with Session
+ Bcrypt and hash securtly
+ Store password in a SQL
+ Store storage componets in SQL list
+ Env for Server / Port config
* Postman is you UI untill futher
? Front end framework?

*/

/* --------------------------------- Imports -------------------------------- */
/* -------------------------------------------------------------------------- */

const express = require('express');
const app = express();

const logger = require('morgan');

require('dotenv').config();

// Gets Port
const PORT = process.env.PORT;

/* --------------------------- Controller Imports --------------------------- */
/* -------------------------------------------------------------------------- */

// These import is knows as destructuring
const { home, index } = require('./server_files/controllers.js');
const { crud_router, auth_router } = require('./server_files/routes.js');

/* ------------------------------- Middlewares ------------------------------ */
/* -------------------------------------------------------------------------- */

// Allows form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Allows JSON-body
app.use(express.json());

// Dev Access logs
app.use(logger('dev'));
/* --------------------------------- Routes --------------------------------- */
/* -------------------------------------------------------------------------- */

// !! WARNING: RESCEVING [OBJECT PROMISE]
// app.get('/', home);
app.get('/', index);

// Imports crud-routes
app.use('/crud', crud_router);

app.use('/auth', auth_router);

/* ---------------------------- Start Application --------------------------- */
/* -------------------------------------------------------------------------- */

app.listen(PORT);
