import { NewsDTO } from "@/lib/api/dtos/news.dto";
import { NewsListFormEdit } from "@/lib/components/NewsListFormEdit";
export interface ComponentProps {
  params: {
    id: string;
  };
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <NewsListFormEdit newsId={props.params.id} />
    </div>
  );
}
