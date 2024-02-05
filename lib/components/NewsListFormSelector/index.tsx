import NewsListSelected from "@/lib/components/NewsListSelected";
import NewslistSelector from "@/lib/components/NewsListSelector";

export default function NewsListFormSelector() {
  return (
    <div className="flex flex-row justify-content-start">
      <div className="flex flex-row justify-content-center">
        <NewslistSelector />
        <NewsListSelected />
      </div>
    </div>
  );
}
