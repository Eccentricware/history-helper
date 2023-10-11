import express from 'express';
import { UltimateService } from '../services/ultimate-service';

export const ultimateRouter = express.Router();
const ultimateService = new UltimateService();

ultimateRouter.post('/select-fighters', (request, response) => {
  const fighterCount = request.body.fighterCount;

  ultimateService.selectFighters(fighterCount)
    .then((response: any) => {
      response.send({ success: true});
    })
    .catch((error: Error) => {
      response.send({ success: false, error: `Error selecting fighters: ${error.message}`});
    })
});