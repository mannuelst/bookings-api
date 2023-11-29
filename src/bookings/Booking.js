const { v4: uuidv4}= require("uuid")

class Booking {
    constructor(roomID, guestName, checkInDate, checkOutDate){
        this.id = uuidv4()
        this.roomID= roomID
        this.guestName= guestName
        this.checkInDate= checkInDate
        this.checkOutDate=checkOutDate      
    }
}
module.exports = Booking