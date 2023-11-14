import { Actor } from "./actor.model";

export interface Serie {
  id: string;
  name: string;
  releaseDate: number;
  description: string;
}

export const serie: Serie = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b90",
  name: "Bussines Proposal",
  releaseDate: 2021,
  description:
    "Ha-ri acepta presentarse en una cita a ciegas en lugar de una amiga para asustar al pretendiente.",
};

export const serie1: Serie = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b91",
  name: "Crash Landing on You",
  releaseDate: 2020,
  description:
    "Una heredera surcoreana sufre un accidente en parapente en Corea del Norte y un oficial del ejército decide ayudarla a esconderse.",
};

export const serie2: Serie = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b92",
  name: "Reply 1988",
  releaseDate: 2016,
  description:
    "Una mirada nostálgica al año 1988. La vida de cinco familias que viven en la misma calle en un barrio de Seúl.",
};
