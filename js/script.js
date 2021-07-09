"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фотльмов вы уе посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фотльмов вы уе посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

function rememberMyFilms() {    
    //1
    for (let i = 0; i < 2; i++) {        
        //2
        const q = prompt("один из просоирелнных последниз фильмов?", ""); 
        const a = prompt("на сколько оцените его?", "");
        if ( q != "" && q.length < 50 && q != null && a != "" && a != null ) {
            personalMovieDB.movies[q] = a;
            console.log('ok');
        } else {
            console.log('err');
            i--;
        }    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    //3
    if (personalMovieDB.count < 10) {
        alert('Too small');
    } else if ( (personalMovieDB.count >= 10) && (personalMovieDB.count < 30) ) {
        alert('Cool');      
    }  else if ((personalMovieDB.count > 30)) {
        alert('Kinoman');   
    } else {
        alert('Error');
    }
}

detectPersonalLevel();

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const answer = prompt(`Ваш любимвй юанр под номером ${i+1}`);
        personalMovieDB.genres[i] = answer;
    }
}
writeYourGenres();

console.log(personalMovieDB);