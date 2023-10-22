import express from 'express';
import { UltimateService } from '../services/ultimate-service';

export const ultimateRouter = express.Router();
const ultimateService = new UltimateService();

ultimateRouter.post('/select-fighters', (request, response) => {
  const { playerId, poolSize } = request.body;

  ultimateService.selectFighters(playerId, poolSize)
    .then((response: any) => {
      response.send({ success: true});
    })
    .catch((error: Error) => {
      response.send({ success: false, error: `Error selecting fighters: ${error.message}`});
    })
});