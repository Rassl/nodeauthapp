const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const DoctorSchema = mongoose.Schema({
    name: {
        type: String
    },
    specialization: {
        type: String
    },
    facility: {
        type: String
    },
    cabinet: {
        type: Number
    },
    start: {
        type: String
    },
    finish: {
        type: String
    },
    step: {
        type: Number
    },
    quotes: [{
        quotetime: {
            type: String
        },
        quotetype: {
            type: String
        }
    }]
});

const Doctor = module.exports = mongoose.model('Doctor', DoctorSchema);

module.exports.getDoctorById = function(id, callback){
    const query = {id: id};
    // forEach(query)
    console.log(query);
    Doctor.find('', callback);
}

module.exports.getDoctors = function(callback){

    Doctor.find('', callback);
}


module.exports.addDoctor = function(newDoctor, callback){
    newDoctor.save(callback);
}



