const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Doctor = require('../models/doctor');

//Add
router.post('/newdoctor', (req, res, next) => {
    let newDoctor = new Doctor({
        name: req.body.name,
        specialization: req.body.specialization,
        facility: req.body.facility,
        cabinet: req.body.cabinet,
        start: req.body.start,
        finish: req.body.finish,
        step: req.body.step,
        quotes: []
    });

    for (let i=0; i < req.body.quotes.length; i++) {
        console.log(i);
        newDoctor.quotes.push({
            quotetime: req.body.quotes[i].quotetime,
            quotetype: req.body.quotes[i].quotetype
        });
    }



    Doctor.addDoctor(newDoctor, (err, doctor) => {
        if(err){
            res.json({success: false, msg:'Failed to add doctor'});
        } else {
            res.json({success: true, msg:'Doctor added'});
        }
    });




    console.log(newDoctor);
});

//getDoctors
router.post('/getdoctors', (req, res, next) => {
    const doctorId = req.body.id;
    console.log(doctorId);

    Doctor.getDoctors((err, doctor) => {
        if(err) throw err;
        if(!doctor) {
            return res.json({success: false, msg: 'Doctor not found'});
        }

        res.json({
            success: true,
            doctor: doctor
        })


    })

    // res.send('works');
})

module.exports = router;
