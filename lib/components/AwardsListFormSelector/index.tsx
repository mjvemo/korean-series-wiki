import AwardsListSelected from "../AwardsListSelected";
import AwardslistSelector from "../AwardsListSelector";

export default function AwardsListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="flex flex-row justify-content-center">
        <AwardslistSelector />
        <AwardsListSelected />
      </div>
    </div>
  );
}
