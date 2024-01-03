import { NewsDTO } from "@/lib/api/dtos/news.dto";
import { NewsListFormEdit } from "@/lib/components/NewsListFormEdit";
export interface ComponentProps {
  data: NewsDTO[];
}

export default function Page(props: ComponentProps) {
  return (
    <div>
      <NewsListFormEdit data={props.data} />
    </div>
  );
}
