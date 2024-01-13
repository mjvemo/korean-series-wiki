import { ChapterDTO } from "@/lib/api/dtos/chapter.dto";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export interface ComponentProps {
  data: ChapterDTO;
}
export function SeasonsChapters(props: ComponentProps) {
  const header = (
    <Avatar
      label={props.data.name}
      size="xlarge"
      className="m-4 justify-content-center"
      style={{ fontSize: "1rem", textAlign: "center", padding: "50px" }}
    />
  );

  return (
    <div className="flex flex-row justify-content-start m-6 ">
      <Card
        title={props.data.name}
        subTitle={props.data.releasedAt}
        header={header}
        className=" flex flex-row justify-content-center align-items-center gap-4 md:w-25rem"
      >
        {props.data.description}
      </Card>
    </div>
  );
}
