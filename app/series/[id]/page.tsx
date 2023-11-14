import { Card } from "primereact/card";
import { Serie, serie } from "@/lib/models/serie.model";

export interface ComponentProps {
  params: { id: string };
}

export default function (props: ComponentProps) {
  const { id } = props.params;

  return (
    <Card title={serie.name}>
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </Card>
  );
}
