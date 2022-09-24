/* VARS */
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

/* ROUTERS */
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

// SETTINGS
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

/* MIDDLEWARE */
app.use(express.static(path.resolve(__dirname, '../public')));
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

/* ROUTES */
app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);

/* SERVIDOR ON */
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
