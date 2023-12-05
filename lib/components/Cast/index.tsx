import ActorsList from "../ActorsList";

export function Cast() {
  return (
    <div className="flex flex-row justify-content-start">
      <ActorsList />
      <div className="p-4"></div>
    </div>
  );
}
