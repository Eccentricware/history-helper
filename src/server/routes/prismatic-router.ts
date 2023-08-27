import express from "express";

export const prismaticRouter = express.Router();
// const prismaticService = new PrismaticService();

prismaticRouter.get('/decks', (request, response) => {
  response.send({decks: [] });
});