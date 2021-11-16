const Enquiry = require('../models/enquiryModel')

const enquiryCtrl = {
createEnquiry: async (req, res) =>{
    try {
        const {name, address, eMail, nicNumber, phone, vehicleType, serviceType, pickupLocation, pickupDate, returnDate, message, numberOfPassengers, pickupTime} = req.body;

        const newEnquiry = new Enquiry({
            name, address, eMail, nicNumber, phone, vehicleType, serviceType, pickupLocation, pickupDate, returnDate, message, numberOfPassengers, pickupTime
        })

        await newEnquiry.save()
            res.json({msg: "Created new enquiry"})

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

getEnquiry: async(req, res) =>{
    try {
        const enquiry = await Enquiry.find()

        res.json(enquiry)
    } catch (err) {
       return res.status(500).json({msg: err.message}) 
    }
}

}

module.exports = enquiryCtrl