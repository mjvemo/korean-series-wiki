import SeriesListSelected from "../SeriesListSelected";
import SeriesListSelector from "../SeriesListSelector";

export default function SeriesListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="flex flex-row justify-content-center">
        <SeriesListSelector />
        <SeriesListSelected />
      </div>
    </div>
  );
}
