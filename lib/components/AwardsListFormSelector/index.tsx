import AwardsListSelected from "../AwardsListSelected";
import AwardslistSelector from "../AwardsListSelector";

export default function AwardsListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="card justify-content-center p-4">
        <AwardslistSelector />
        <AwardsListSelected />
      </div>
    </div>
  );
}
