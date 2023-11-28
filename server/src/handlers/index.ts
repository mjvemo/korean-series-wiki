import {Application} from 'express';
import { Resource } from '../enums';

import getSeries from './series/get-series';
import createSerie from './series/create-serie';
import deleteSerie from './series/delete-serie';
import getSerie from './series/get-serie';
import updateSerie from './series/update-serie';

import getActors from './actors/get-actors';
import createActor from './actors/create-actor';
import deleteActor from './actors/delete-actor';
import getActor from './actors/get-actor';
import updateActor from './actors/update-actor';

export function register(app: Application) {
  // series
  app.get(Resource.series, getSeries);
  app.post(Resource.series, createSerie);
  app.get(Resource.serie, getSerie);
  app.patch(Resource.serie, updateSerie);
  app.delete(Resource.serie, deleteSerie);

  // actors
  app.get(Resource.actors, getActors);
  app.post(Resource.actors, createActor);
  app.get(Resource.actor, getActor);
  app.patch(Resource.actor, updateActor);
  app.delete(Resource.actor, deleteActor);
}
