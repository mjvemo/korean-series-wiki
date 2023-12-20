import { SeasonsForm } from "@/lib/components/SeasonsForm";

interface ComponentProps {
  params: {
    id: string;
  };
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <SeasonsForm id={props.params.id} />
    </div>
  );
}
