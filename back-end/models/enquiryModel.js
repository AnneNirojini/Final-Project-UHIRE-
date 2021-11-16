const mongoose = require('mongoose')


const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    eMail: {
        type: String,
        required: true
    },
    nicNumber: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    vehicleType: {
        type: [String],
        required: true
    },
    serviceType: {
        type: [String],
        required: true
    },
    numberOfPassengers: {
        type: Number,
        required: true
    },
    pickupLocation: {
        type: String,
        required: true
    },
    pickupTime: {
        type: String,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    message: {
        type: Date
    },
}, {
   timestamps: true 
})


module.exports = mongoose.model("Enquiry", enquirySchema)