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

  const footer = (
    <div className="flex flex-row justify-content-center">
      <Button icon="pi pi-pencil" text></Button>
      <Button icon="pi pi-trash" text></Button>
    </div>
  );

  return (
    <div className="flex flex-row justify-content-start m-4 ">
      <Card
        title={props.data.name}
        subTitle={props.data.releaseAt}
        header={header}
        footer={footer}
        className=" flex flex-row justify-content-center align-items-center gap-4 md:w-25rem"
      >
        {props.data.description}
      </Card>
    </div>
  );
}
