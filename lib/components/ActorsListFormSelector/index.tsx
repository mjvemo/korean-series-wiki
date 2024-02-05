import ActorsListSelected from "../ActorsListSelected";
import ActorsListSelector from "../ActorsListSelector";

export default function ActorsListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="flex flex row justify-content-center">
        <ActorsListSelector />
      </div>
    </div>
  );
}
