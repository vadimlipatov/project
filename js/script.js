"use strict";

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : true,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фотльмов вы уе посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фотльмов вы уе посмотрели?", "");
        }
    },
    rememberMyFilms: function() {  
        for (let i = 0; i < 2; i++) {
            const q = prompt("один из просоирелнных последниз фильмов?", ""),
                  a = prompt("на сколько оцените его?", "");
            if ( q != "" && q.length < 50 && q != null && a != "" && a != null ) {
                personalMovieDB.movies[q] = a;
                console.log('ok');
            } else {
                console.log('err');
                i--;
            }    
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Too small');
        } else if ( (personalMovieDB.count >= 10) && (personalMovieDB.count < 30) ) {
            alert('Cool');      
        }  else if ((personalMovieDB.count > 30)) {
            alert('Kinoman');   
        } else {
            alert('Error');
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимвй юанр под номером ${i+1}`);
            while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
                personalMovieDB.genres[i] = prompt(`Ваш любимвй юанр под номером ${i+1}`);
            }
        }
        personalMovieDB.genres.forEach(function (val, i) {
            console.log(`любимый жпнр ${i+1} - эьл ${val.toLowerCase()}`);
        });
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = personalMovieDB.privat ? false : true;
    },
};
