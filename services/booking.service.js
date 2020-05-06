import BookingModel from "../models/booking.js";
import { generateRandId } from "../utils.js";

export default class BookingService {
  async getAll() {
    const foundBookings = await BookingModel.findAll({
      order: [["id", "DESC"]],
    });

    return foundBookings;
  }

  async create(booking) {
    const newBooking = {
      id: generateRandId(),
      ...booking,
    };

    const bookingRecord = await BookingModel.create(newBooking);

    return bookingRecord;
  }

  async update(bookingId, newValues) {
    const updatedBooking = await BookingModel.update(newValues, {
      where: { id: bookingId },
    });

    return updatedBooking;
  }

  async delete(bookingId) {
    await BookingModel.destroy({
      where: { id: bookingId },
    });
  }
}
