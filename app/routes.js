// External dependencies
const express = require('express');
const router = express.Router();


// Add your routes here - above the module.exports line

//Prescriptions and nominated pharmacy


router.post('/prescriptions/nominated-pharmacy/choose-type', function (req, res) {
  let answer = req.body.chooseType;
  if (answer === 'highStreet') {
    res.redirect('/prescriptions/nominated-pharmacy/high-street')
  } else {
    res.redirect('/prescriptions/nominated-pharmacy/online-only')
  }
});



router.post('/prescriptions/save', function (req, res) {

  req.session.data.prescriptionConfirmed = "True";
  res.redirect('/prescriptions/order-confirmed')

});

module.exports = router;
