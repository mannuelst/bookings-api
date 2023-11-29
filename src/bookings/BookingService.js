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
        this.repository.create(newBooking);
        return newBooking;
    }
}

module.exports = BookingService;
