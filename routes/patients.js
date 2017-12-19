const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Patient = require('../models/patient');

router.post('/newpatient', (req, res, next) => {
	let newPatient = new Patient({
		name: req.body.name,
		birthdate: req.body.birthdate,
		insurance: req.body.insurance,
	});

	Patient.addPatient(newPatient, (err, patient) => {
		if(err) {
			res.json({success: false, msg: 'Failed to add Patient'});
		} else {
			res.json({success: true, msg: 'Doctor added'});
		}
	})

	console.log(newPatient);
});

router.get('/getpatients', (req, res, next) => {
	Patient.getPatients((err, patients) => {
		if(err) throw err;
		if(!(patients)) {
			return res.json({success: false, msg: "Patients not found"});
		}

		res.json({
			success: true,
			patients: patients
		})
	})
})

module.exports = router;