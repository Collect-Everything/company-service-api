import { sequelize } from "../index";
import { DataTypes } from "sequelize";

export const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.NUMBER, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.JSON, allowNull: false },
  colors: DataTypes.JSON,
  logo: DataTypes.STRING,
  key_phrases: DataTypes.JSON,
  products_type: DataTypes.JSON,
  siret: DataTypes.STRING,
  phone_contact: DataTypes.NUMBER,
  email_contact: { type: DataTypes.STRING, allowNull: false },
  links: DataTypes.JSON,
  external_url: DataTypes.JSON,
});
