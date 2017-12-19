const mongoose = require('mongoose');
const config = require('../config/database');

const AppointmentSchema = mongoose.Schema({
	date: {
		type: String
	},
	patientid: {
		type: String
	},
	doctorid: {
		type: String
	}
})

const Appointment = module.exports = mongoose.model('Appointment', AppointmentSchema);

module.exports.getAppointments = callback => {
	Appointment.find('', callback);
}

module.exports.addAppointment = (newAppointment, callback) => {
	newAppointment.save(callback);
}