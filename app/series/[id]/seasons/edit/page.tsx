"use client";
import SeasonsListFormEdit from "@/lib/components/SeasonsListFormEdit";

export interface ComponentProps {
  params: {
    id: string;
  };
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <SeasonsListFormEdit seasonId={props.params.id} />
    </div>
  );
}
