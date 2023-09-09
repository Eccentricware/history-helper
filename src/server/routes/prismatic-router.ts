import express from "express";
import { PrismaticService } from "../services/prismatic-service";
import { error } from "console";

export const prismaticRouter = express.Router();
const prismaticService = new PrismaticService();

prismaticRouter.get('/standings/:league', (request, response) => {
  const league = Number(request.params.league);

  prismaticService.getStandings(league)
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
      response.send({
        success: false,
        error: error.message
      });
    });
});

prismaticRouter.post('/scores/16', (request, response) => {
  const { scores } = request.body;
  prismaticService.reportScores16(scores)
    .then(() => {
      response.send({ success: true });
    })
    .catch((error: Error) => {
      response.send({
        success: false,
        error: `Report scores error: ${error.message}`
      });
    })
});