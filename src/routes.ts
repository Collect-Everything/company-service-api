import express from "express";
import { sequelize } from ".";
import { Company } from "./utils/types";

export const router = express.Router();

router.post("/create", async (request, response) => {
  if (request.body) {
    console.log('create',request.body);
    response.status(200).json(request.body);
    try {
      await sequelize.authenticate();
      
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  } else response.status(500).json({'erreur':"creation error"});
});
