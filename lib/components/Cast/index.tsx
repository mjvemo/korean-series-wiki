import ActorsListSelected from "../ActorsList";
import ActorsListFormSelector from "../ActorsListFormSelector";

export function Cast() {
  return (
    <div className="flex flex-row justify-content-start">
      <ActorsListFormSelector />
      <ActorsListSelected />
      <div className="p-4"></div>
    </div>
  );
}
