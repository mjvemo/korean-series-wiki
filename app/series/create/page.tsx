import { Image } from "primereact/image";
import { SerieForm } from "@/lib/components/SeriesForm";
export default function Page() {
  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <div className="flex align-items-start justify-content-center gap-4">
        <Image
          src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
          alt="Image"
          width="700"
          preview
        />
        <SerieForm />
      </div>
    </div>
  );
}

//
/** Create Page Components
 * upload image
 * form
 * ========================
 * news cards
 * ========================
 * series cards
 * ========================
 * actor cards
 * ========================
 * datatable awards
 */
