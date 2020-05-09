import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const Booking = sequelize.define("booking", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  fk_airbnb_user_id: { type: DataTypes.INTEGER },
  booking_start_date: { type: DataTypes.DATE },
  booking_end_date: { type: DataTypes.DATE },
  days_booked: { type: DataTypes.STRING },
  price_for_days: { type: DataTypes.FLOAT },
});

export default Booking;
