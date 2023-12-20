import { SeasonDTO } from "@/lib/api/dtos/season.dto";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export interface ComponentProps {
  data: SeasonDTO[];
}
export function SeasonsChapters() {
  const header = (
    <img
      className="m-4"
      alt="Card"
      src="https://m.media-amazon.com/images/I/61rxebTF-YL._UC256,256_CACC,256,256_.jpg"
    />
  );

  return (
    <div className="flex flex-row justify-content-start m-4 ">
      <Card
        title="Hello world"
        subTitle="2020"
        header={header}
        className=" flex flex-row justify-content-center gap-4 md:w-25rem"
      >
        <p>skdvjksmvajksmvajsdnvmajsdnva</p>
      </Card>
    </div>
  );
}
