const fs = require('fs');
let movies = JSON.parse(fs.readFileSync('./data/movies.json'));


exports.deleteMovie = (req, res) => {
    const id = req.params.id * 1;
    const movieToDelete = movies.find(el => el.id === id);
    const index = movies.indexOf(movieToDelete);
    if (!movieToDelete)
        return res.status(404).send("Movie Not Found with id: " + id);

    movies.splice(index, 1);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(204).json();
    });


}
exports. patchMovie = (req, res) => {
    let id = req.params.id * 1;
    let movieToUpdate = movies.find(el => el.id === id);
    let movieIndex = movies.indexOf(movieToUpdate);

    if (!movieToUpdate) {
        return res.status(404).send("404 Movie Not Found");
    }

    Object.assign(movieToUpdate, req.body);
    movies[movieIndex] = movieToUpdate;
    console.log(req.body);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: "success",
            updatedMovie: movieToUpdate
        });
    });
}
exports. postMovie = (req, res) => {
    const newId = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({ id: newId }, req.body);
    movies.push(newMovie);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        });
    })
    console.log(newMovie);
    //res.send('Created');
}
exports. getMovie = (req, res) => {
    let movie = movies.find(el => el.id === req.params.id * 1)
    if (movie)
        res.status(200).json(movie);
    else res.status(404).send("movie not found");
}
exports. getAllMovies = (req, res) => {
    res.status(200).json({
        status: "success",
        requestedAt: req.requestedAt,
        count: movies.length,
        data: {
            movies: movies
        }
    })
}