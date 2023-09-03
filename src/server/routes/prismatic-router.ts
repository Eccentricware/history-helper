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
    });
});

prismaticRouter.get('/decks/:deckCount', (request, response) => {
  const deckCount = Number(request.params.deckCount);
  prismaticService.getDecksForTournament(deckCount)
    .then((deckResults: any) => {
      response.send({decks: deckResults });
    })
    .catch((error: Error) => {
      response.send({error: error.message});
    });
});

prismaticRouter.post('/tournaments', (request, response) => {
  const { name, deckCount } = request.body;
  prismaticService.createTournament(name, deckCount)
    .then(() => {
      response.send({success: true});
    })
    .catch((error: Error) => {
      response.send({error: error.message});
    });
});