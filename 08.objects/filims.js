const movies = [
    {
      title: "Drishyam",
      year: 2013,
      runtime: 160,
      genre: ["Drama", "Thriller"],
      rating: 8.4
    },
    {
      title: "Premam",
      year: 2015,
      runtime: 156,
      genre: ["Romance", "Comedy"],
      rating: 8.3
    },
    {
      title: "Bangalore Days",
      year: 2014,
      runtime: 171,
      genre: ["Romance", "Drama", "Comedy"],
      rating: 8.3
    },
    {
      title: "Kumbalangi Nights",
      year: 2019,
      runtime: 135,
      genre: ["Drama", "Comedy"],
      rating: 8.6
    },
    {
      title: "Uyare",
      year: 2019,
      runtime: 125,
      genre: ["Drama", "Thriller"],
      rating: 8.1
    },
    {
      title: "Maheshinte Prathikaaram",
      year: 2016,
      runtime: 120,
      genre: ["Comedy", "Drama"],
      rating: 8.3
    },
    {
      title: "Take Off",
      year: 2017,
      runtime: 139,
      genre: ["Drama", "Thriller"],
      rating: 8.3
    },
    {
      title: "Eeda",
      year: 2018,
      runtime: 152,
      genre: ["Romance", "Drama"],
      rating: 7.7
    },
    {
      title: "Thondimuthalum Driksakshiyum",
      year: 2017,
      runtime: 135,
      genre: ["Drama", "Crime"],
      rating: 8.2
    },
    {
      title: "Angamaly Diaries",
      year: 2017,
      runtime: 132,
      genre: ["Action", "Drama"],
      rating: 8.1
    }
  ];



// q1 total number of movies

console.log(movies.length)

// q2 drama movies

var dramaMovies = movies.filter(m => m.genre.includes("Drama"))
// dramaMovies.forEach(m => console.log(m.title))

// q3 top rated movies

var topRatedMovie = movies.reduce((m1, m2) => m1.rating > m2.rating ? m1 : m2);
var topRatedMovies = movies.filter(m => m.rating == topRatedMovie.rating);
// console.log(topRatedMovies);

// q4 movie with longest runtime
var longestRuntimeMovie = movies.reduce((m1, m2) => m1.runtime > m2.runtime ? m1 : m2);
console.log(longestRuntimeMovie);

// q5 sort movies wrt year
var sortedMoviesByYear = movies.slice().sort((a, b) => a.year - b.year);
console.log(sortedMoviesByYear);

// q6 year movie with name Angamaly Diaries
var angamalyDiariesYear = movies.find(m => m.title === "Angamaly Diaries").year;
console.log(angamalyDiariesYear);

// q7 group movies wrt year {2017:2,2018:1,}
var moviesGroupedByYear = {}
movies.forEach((m) => m.year in moviesGroupedByYear ? moviesGroupedByYear[m.year] += 1 : moviesGroupedByYear[m.year] = 1);
console.log(moviesGroupedByYear);

// q8 movies with genre Action or Crime
var actionOrCrimeMovies = movies.filter(m => m.genre.includes("Action") || m.genre.includes("Crime"));
console.log(actionOrCrimeMovies);

// q9 in which year most number of movies released
var mostMoviesYear = Object.keys(moviesGroupedByYear).reduce((a, b) => moviesGroupedByYear[a] > moviesGroupedByYear[b] ? a : b);
// console.log(Object.keys(moviesGroupedByYear));
// console.log(Object.values(moviesGroupedByYear));
console.log(mostMoviesYear);
