const router = require('express').Router()
const vehicleCtrl = require('../controllers/vehicleCtrl')
// const vehicles = require('../controllers/vehicleCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/vehicles')
    .get(vehicleCtrl.getVehicles)
    .post(vehicleCtrl.createVehicle)

router.route('/vehicles/:id')
    .delete(vehicleCtrl.deleteVehicle)
    .put(vehicleCtrl.updateVehicle)

module.exports = router