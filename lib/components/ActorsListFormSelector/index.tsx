import ActorsListSelected from "../ActorsListSelected";
import ActorsListSelector from "../ActorsListSelector";

export default function ActorsListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="card justify-content-center p-4">
        <ActorsListSelector />
        <ActorsListSelected />
      </div>
    </div>
  );
}
