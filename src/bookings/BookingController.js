
class BookingController{
  constructor(service){
    this.service = service
  }
  index(request){
    const bookings = this.service.findAllBooking()
    return {
      code: 200,
      body: {
        bookings
      }
    }
  }

  save(request){
    const { roomID, guestName, checkInDate, checkOutDate } = request.body;
    //verificando se há campos null
    if(!roomID || ! guestName || !checkInDate || !checkOutDate){
      return{
        code: 400,
        body: {
          message: "All fields are required."
        }
      }
    }
    const booking = this.service.createBooking({
      roomID,
      guestName, 
      checkInDate,
      checkOutDate,
    });
    return {
      code: 201,
      body: { message: "Booking created! ", booking }
    }
  }
}
module.exports=BookingController