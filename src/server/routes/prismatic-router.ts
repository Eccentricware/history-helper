import express from "express";
import { PrismaticService } from "../services/prismatic-service";

export const prismaticRouter = express.Router();
const prismaticService = new PrismaticService();

prismaticRouter.get('/decks', (request, response) => {
  prismaticService.getFullStandings()
    .then((deckResults: any) => {
      response.send({decks: deckResults });
    })
    .catch((error: Error) => {
      response.send({error: error.message});
    })
});