class BookingService {
    constructor(repository) {
        this.repository = repository;
    }
    findAllBooking() {
        return this.repository.findAll();
    }
    createBooking({ roomID, guestName, checkInDate, checkOutDate }) {
        const newBooking = new Booking(
            roomID,
            guestName,
            checkInDate,
            checkOutDate
        );

        const overlappingBooking = this.repository.findAll().find((booking)=>{
          return (

            booking.roomID === newBooking.roomID && 
            booking.checkInDate< newBooking.checkOutDate && 
            booking.checkOutDate>newBooking.checkInDate
          )
        })
        if (overlappingBooking){
            throw new Error("Ooops! This rooom is already booked for the selected dates...")
        }
        this.repository.create(newBooking);
        return newBooking;
    }
}

module.exports = BookingService;
