"use strict";

let numberOfFilms = +prompt("Сколько фотльмов вы уе посмотрели?", "");
const movies = {};
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};
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

console.log(personalMovieDB);