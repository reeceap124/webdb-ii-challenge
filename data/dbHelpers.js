const db = require('./dbConfig.js');
const knex = require('knex');

module.exports = {
    getAll,
    getById,
    create
}



function getAll() {
   return db('cars')
}

function getById(carId) {
    return db('cars').where({id: carId})
}


function create(car) {
    return db('cars').insert(car)
}