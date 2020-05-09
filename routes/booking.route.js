import express from "express";
import typedi from "typedi";
import BookingService from "../services/booking.service.js";

const router = express.Router();
const { Container } = typedi;

router.get("/", async (req, res, next) => {
  try {
    const bookingService = Container.get(BookingService);

    const bookings = await bookingService.getAll();

    return res.json(bookings);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const bookingService = Container.get(BookingService);

    const booking = req.body;

    await bookingService.create(booking);

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const bookingService = Container.get(BookingService);

    const id = req.params.id;

    const updateValues = req.body;

    await bookingService.update(id, updateValues);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const bookingService = Container.get(BookingService);

    const bookingId = req.params.id;

    await bookingService.delete(bookingId);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

export default router;
