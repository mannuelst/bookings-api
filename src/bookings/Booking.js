const { v4: uuidBooking}= require("uuid")

class Booking {
    constructor(roomID, guestName, checkInDate, checkOutDate){
        this.id = uuidBooking()
        this.roomID= roomID
        this.guestName= guestName
        this.checkInDate= checkInDate
        this.checkOutDate=checkOutDate      
    }
}
module.exports = Booking