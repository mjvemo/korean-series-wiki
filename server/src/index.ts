import express from 'express';
import bodyParser from 'body-parser';
import { register } from './handlers';
import database from './lib/mongoose-client';
import cors from 'cors';

// import mongoose schemas
import './domain';

export async function main() {
  await database.init();

  const app = express();

  // parse application/json
  app.use(bodyParser.json())
  app.use(cors());

  register(app);

  app.listen(3002, () => {
    console.log("listening on port 3002");
  });
}

main();
