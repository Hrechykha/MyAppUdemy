

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", '');

    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFils() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt("Один из просмотренных фильмов", ''),
            movieRate = prompt("На сколько оцените его?", '');
        if (movie != null && movieRate != null && movie !== '' && movieRate !== '' && movei.length < 50) {
            personalMovieDB.movies[movie] = movieRate;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms >= 30) {
        console.log ('Вы киноман');
    } else {
        console.log ('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}



function writeYourGenres(arr) {
    for (let i = 1; i <= 3; i++) {
        arr[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres(personalMovieDB.genres);

showMyDB(personalMovieDB.privat);

