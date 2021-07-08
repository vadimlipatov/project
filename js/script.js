"use strict";

let numberOfFilms = +prompt("Сколько фотльмов вы уе посмотрели?", "");
const movies = {};
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : {},
    privat : false,
};

let q1 = prompt("один из просоирелнных последниз фильмов?", "");
let a1 = prompt("на сколько оцените его?", "");
movies[q1] = a1;
let q2 = prompt("один из просоирелнных последниз фильмов?", "");
let a2 = prompt("на сколько оцените его?", "");
movies[q2] = a2;
personalMovieDB.movies = movies;

// console.log(movies);
console.log(personalMovieDB);