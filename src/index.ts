import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { router } from "../src/routes";
import { validateCustomHeader } from './utils/validateCustomHeader';

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json(),validateCustomHeader, router);

// Configuration de Sequelize
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_PATH || "database.sqlite",
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
