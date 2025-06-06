
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы просмотрели?", '');

        while(personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы просмотрели?", '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const movie = prompt("Один из просмотренных фильмов", ''),
                movieRate = prompt("На сколько оцените его?", '');
            if (movie != null && movieRate != null && movie !== '' && movieRate !== '' && movei.length < 50) {
                personalMovieDB.movies[movie] = movieRate;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (numberOfFilms < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
            console.log('Вы классический зритель');
        } else if (numberOfFilms >= 30) {
            console.log ('Вы киноман');
        } else {
            console.log ('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB === false;
        }
        else {
            personalMovieDB === true;
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            while(genre === '' || genre === null) {
                genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            }
            personalMovieDB.genres[i - 1] = genre;
        }
        personalMovieDB.genres.forEach((elem, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${elem}`);
        });
    },
}

personalMovieDB.writeYourGenres();

