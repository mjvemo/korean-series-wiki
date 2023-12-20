import SeriesListFormSelector from "../SeriesListFormSelector";
import SeriesListSelected from "../SeriesListSelected";

export function Series() {
  return (
    <div className="flex flex-row align-items-start justify-content-start mt-6">
      <SeriesListFormSelector />
      <SeriesListSelected />
    </div>
  );
}
