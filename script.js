
const numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


const firstMovie = prompt("Один из просмотренных фильмов", ''),
    firstMovieRate = prompt("На сколько оцените его?", ''),
    secondMovie = prompt("Один из просмотренных фильмов", ''),
    secondMovieRate = prompt("На сколько оцените его?", '');

personalMovieDB.movies[firstMovie] = firstMovieRate;
personalMovieDB.movies[secondMovie] = secondMovieRate;

console.log(personalMovieDB.movies);

