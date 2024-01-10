import { AwardsListFormEdit } from "@/lib/components/AwardsListFormEdit";
export interface ComponentProps {
  params: {
    id: string;
  };
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <AwardsListFormEdit awardId={props.params.id} />
    </div>
  );
}
