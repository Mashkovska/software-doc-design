import Sequelize from "sequelize";
import { sequelize } from "../config/db.js";

const { DataTypes } = Sequelize;

const airbnbUser = sequelize.define("airbnbUser", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  user_password: { type: DataTypes.STRING },
  phone_number: { type: DataTypes.STRING },
  email_address: { type: DataTypes.STRING },
  
  
},

{ tableName: "airbnbUser" });

export default airbnbUser;
