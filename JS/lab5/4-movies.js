function moviesCommands(commands) {
    const movies = [];
    function addMovie(movieName) {
        movies.push({ name: movieName });
    }
    function setDirector(movieName, directorName) {
        const movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            movie.director = directorName;
        }
    }
    function setDate(movieName, date) {
        const movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            movie.date = date;
        }
    }
    for (const command of commands) {
        const input = command.split(' ');
        const action = input.includes('addMovie') ? 'addMovie' : input.includes('directedBy') ? 'setDirector' : 'setDate';

        switch (action) {
            case 'addMovie':
                addMovie(input.slice(1).join(' '));
                break;
            case 'setDirector':
                setDirector(input.slice(0, input.indexOf('directedBy')).join(' '), input.slice(input.indexOf('directedBy') + 1).join(' '));
                break;
            case 'setDate':
                setDate(input.slice(0, input.indexOf('onDate')).join(' '), input.slice(input.indexOf('onDate') + 1).join(' '));
                break;
        }

    }
    const completeMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    for (const movie of completeMovies) {
        console.log(JSON.stringify(movie));
    }
}
const commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];
moviesCommands(commands);
