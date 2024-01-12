import ActorsListFormSelector from "../ActorsListFormSelector";

export function Cast() {
  return (
    <div className="flex flex-row justify-content-start">
      <ActorsListFormSelector />
      <div className="p-4"></div>
    </div>
  );
}
