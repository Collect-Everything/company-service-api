import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import { router } from "../src/routes";
import cors from 'cors';
import { validateCustomHeader } from '../utils/validateCustomHeader';

dotenv.config({ path: "./.env" });

// Configuration d'Express
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json(), router, cors(), validateCustomHeader);

// Configuration de Sequelize
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_PATH || "database.sqlite",
});

// Exemple de route avec Axios
// app.get('/users', async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
