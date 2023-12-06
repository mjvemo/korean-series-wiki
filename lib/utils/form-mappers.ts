import { ActorsFormPayload } from "@/lib/models/actor.model";
import { CreateActorRequestDTO } from "@/lib/api/dtos/create-actor-request.dto";

export function actorFormToCreateActorRequest(
  values: ActorsFormPayload
): CreateActorRequestDTO {
  return {
    imageUrl: values.imageUrl,
    name: values.name,
    age: values.age || 0,
    education: values.education,
    agency: values.agency,
    yearsActive: values.yearsActive || "",
    series: values.series,
    news: values.news,
    awards: values.awards,
    nominations: values.nominations,
  };
}
