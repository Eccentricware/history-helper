import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { prismaticRouter } from './routes/prismatic-router';

dotenv.config();

const helpingServer = express();
const port = 8000;

helpingServer.use(cors());
helpingServer.use(bodyParser.json({ limit: '5mb' }));

helpingServer.use('/prismatic', prismaticRouter);

helpingServer.get('/check-status', (request, response) => {
  response.send({
    status: 'Healthy as a horse! A horse that is healthy, that is. Not a sick horse.'
    + 'That would be bad. But this horse is healthy. So it is good. Healthy. Healthy horse. Healthy'});
});

helpingServer.listen(port, () => {
  console.log(`Helping Server (${process.env.npm_package_version}) is running on port ${port}`);
});