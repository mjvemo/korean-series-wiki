import SeriesListSelected from "../SeriesListSelected";
import SeriesListSelector from "../SeriesListSelector";

export default function SeriesListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="card justify-content-center p-4">
        <SeriesListSelector />
        <SeriesListSelected />
      </div>
    </div>
  );
}
