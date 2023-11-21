//Import Package
const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./routes/moviesRoutes');


let app = express();


const logger = function (req, res, next) {
    console.log('Custom MiddleWare Called!');
    next();
}
app.use(express.json());
app.use(morgan('dev'));
app.use(logger);
app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next();
});
app.use('/api/v1/movies/', moviesRouter);
module.exports = app;

// app.get('/api/v1/movies', getMovie);
// app.get('/api/v1/movies/:id', getAllMovies);
// app.post('/api/v1/movies', postMovie);
// app.patch('/api/v1/movies/:id', patchMovie);
// app.delete('/api/v1/movies/:id', deleteMovie);







// //ROUTE = HTTP METHOD + URL
// app.get('/', (req, res) => {
//     //res.status(200).send('<h4>Hello from Express Server</h4>')
//     res.status(200).json({message:'Hello world',status: 200})
// });


