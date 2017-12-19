const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Appointment = require('../models/appointment');

router.post('/newappointment', (req, res, next) => {

	let newAppoitment = new Appointment ({
		date: req.body.date,
		patientid: req.body.patientid,
		doctorid: req.body.doctorid
	})

	Appointment.addAppointment(newAppoitment, (err, appointment) => {
		if(err) {
			res.json({success: false, msg: 'Failed to add Appointmetn'})
		} else {
			res.json({success: true, msg: 'Appointment added'})
		}
	})

});

router.get('/getappointments', (req, res, next) => {
	Appointment.getAppointments((err, appointmetns) => {
		if(err) throw err;
		if(!(appointmetns)) {
			return res.json({success: false, msg: "Appointments not dound"});
		}

		res.json({
			success: true,
			appointmetns: appointmetns
		})
	})
})

module.exports = router;