class BookingRepository{
    constructor(){
        this.bookings = []
    }
    findAll(){
        return this.bookings
    }
    create(booking){
        this.bookings.push(bookings)
    }
}
module.exports = BookingRepository