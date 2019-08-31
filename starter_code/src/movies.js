// /* eslint no-restricted-globals: 'off' */
// let movies = [
//     {
//         title: 'The Shawshank Redemption',
//         year: '1994',
//         director: 'Frank Darabont',
//         duration: '2h 22min',
//         genre: ['Crime', 'Drama'],
//         rate: '8.4'
//     },
//     {
//         title: 'Ahe Godfather','
//         year: '1972',
//         director: 'Francis Ford Coppola',
//         duration: '2h 22min',
//         genre: ['Crime', 'Drama'],
//         rate: '8.9'
//     }];

// console.log(ratesAverage(movies));

function ratesAverage(arrayMovies) {
    let total;
    let rateArray = arrayMovies.reduce((rateArray, movies) => {
        return rateArray + Number(movies.rate);
    }, 0)


    total = Number((rateArray / arrayMovies.length).toFixed(2));

    if (isNaN(total)) {
        return 0;
    }

    return total;

}

function dramaMoviesRate(moviesArray) {
    let dramaMovies = moviesArray.filter(function (item) {
        return item.genre.includes("Drama");
    });

    let total = ratesAverage(dramaMovies);

    return total;
}

function orderByDuration(moviesArray) {

    return newOrder = moviesArray.sort(function (a, b) {
        if (a.duration < b.duration) {
            return -1;
        }
        if (a.duration > b.duration) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

   return newOrder; 
}

console.log(orderByDuration(movies));




// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
