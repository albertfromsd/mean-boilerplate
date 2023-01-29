function getRandomInt ( min=1, max=100 ) {
    return Math.floor( (Math.random()*(max-min) + min) );  
} 

module.exports = {
    getRandomInt
};