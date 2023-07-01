import { sequelize } from "../src/index";
import { DataTypes } from "sequelize";

// Définition d'un modèle Sequelize exemple
export const Company = sequelize.define("Company", {
  name: DataTypes.STRING,
  phone: DataTypes.NUMBER,
  email: DataTypes.STRING,
  address: DataTypes.JSON,
  colors: DataTypes.JSON,
  logo: DataTypes.STRING,
  key_phrases: DataTypes.JSON,
  products_type: DataTypes.JSON,
  siret: DataTypes.STRING,
  phone_contact: DataTypes.NUMBER,
  email_contact: DataTypes.STRING,
  links: DataTypes.JSON,
  external_url: DataTypes.JSON,
});
