const mongoose = require('mongoose')


const vehicleSchema = new mongoose.Schema({
    vehicle_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    vehicleType:{
        type: Array,
        required: true
    },
    ServiceType:{
        type: Array,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        // required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    eMail:{
        type: String,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    booked:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Vehicles", vehicleSchema)