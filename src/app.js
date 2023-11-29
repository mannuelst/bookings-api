const fastify = require("fastify");
const BookingRepository = require("./bookings/BookingRepository");
const BookingService = require("./bookings/BookingService");


const app = fastify({ logger: true });

const bookingRepository = new BookingRepository();
const bookingService = new BookingService(bookingRepository);
app.get("/booking", (request, reply) => {
  reply.send({ message: "BOOKING api" });
});

app.post("/api/bookings", (request, reply) => {
  const { roomID, guestName, checkInDate, checkOutDate } = request.body;
  const booking = bookingService.createBooking({
    roomID,
    guestName,
    checkInDate,
    checkOutDate,
  });

  reply.code(201).send({ message: "Booking created!", booking });
});
module.exports = app;
