const mongoose = require('mongoose');
const config = require('../config/database');

const PatientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    insurance: {
        type: String,
        required: true
    }
});

const Patient = module.exports = mongoose.model('Patient', PatientSchema);

module.exports.getPatients = (callback) => {
    Patient.find('', callback);
}

module.exports.addPatient = (newPatient, callback) => {
	newPatient.save(callback);
}
