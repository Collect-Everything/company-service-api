import express from "express";

export const router = express.Router();

router.post("/create", async (request, response) => {
  if (request.body) {
    console.log(request.body);
    response.status(200).json('creation reçue');
  } else response.status(500).json("creation error");
});
