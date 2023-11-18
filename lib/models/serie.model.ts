import { Actor } from "./actor.model";
import { Image } from "primereact/image";

export interface Serie {
  id: string;
  name: string;
  releaseDate: number;
  description: string;
  url: string;
}

export const serie: Serie = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b90",
  name: "Bussines Proposal",
  releaseDate: 2021,
  description:
    "Ha-ri acepta presentarse en una cita a ciegas en lugar de una amiga para asustar al pretendiente.",
  url: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp",
};

export const serie1: Serie = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b91",
  name: "Crash Landing on You",
  releaseDate: 2020,
  description:
    "Una heredera surcoreana sufre un accidente en parapente en Corea del Norte y un oficial del ejército decide ayudarla a esconderse.",
  url: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABW3oIWd3vnP9mnHv_h9ROizp14u5xSfPEyGnjQnXc4yQnvKr_jjX4lHyPTI1MffkfC2wRS_FTYp3GIAocc3Z-IXabeFDbiLfIIj_.jpg?r=f02",
};

export const serie2: Serie = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b92",
  name: "Reply 1988",
  releaseDate: 2016,
  description:
    "Una mirada nostálgica al año 1988. La vida de cinco familias que viven en la misma calle en un barrio de Seúl.",
  url: "https://1.vikiplatform.com/c/26576c/Reply-1988_1560x872_modified_1.jpg?x=b",
};

export const serie3: Serie = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b93",
  name: "Reply 1988",
  releaseDate: 2016,
  description:
    "Una mirada nostálgica al año 1988. La vida de cinco familias que viven en la misma calle en un barrio de Seúl.",
  url: "https://1.vikiplatform.com/c/26576c/Reply-1988_1560x872_modified_1.jpg?x=b",
};
