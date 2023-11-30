import SeriesPicker from "../SeriesPicker";
import { SerieForm } from "../SeriesForm";
import { Image } from "primereact/image";

export function Series() {
  return (
    <div className="flex flex-row align-items-start justify-content-start mt-6">
      <SeriesPicker />
      <div className="gap-6">
        <Image
          width="520"
          src="https://6.soompi.io/wp-content/uploads/image/e742c985be3548939200ae2dcde1d21d/dummy.jpeg?s=900x600&e=t"
          preview
          className="pt-4 pb-4"
        />
        <SerieForm />
      </div>
    </div>
  );
}
