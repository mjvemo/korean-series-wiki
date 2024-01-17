import { selectActiveNews, useSelector } from "@/lib/redux";
import Link from "next/link";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";

export interface ComponentProps {
  params: { id: string };
}
export default function NewsHero(props: ComponentProps) {
  const { id } = props.params;
  const items = [
    { label: "News", url: "/news" },
    { label: id, url: `/news/${id}` },
  ];
  const home = { icon: "pi pi-home", url: "/" };
  const news = useSelector(selectActiveNews);

  return (
    <div className="grid grid-nogutter surface-50 text-800 overflow-hidden">
      <div className="col-12 md:col-4 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <div>
            <BreadCrumb model={items} home={home} className="surface-100" />
          </div>
          <div className="text-md mt-4 mb-4">
            Name ~ {news?.name} <br />
            Age ~ {news?.publishedAt} <br />
            Agency ~ {news?.description}
          </div>
          <div className="flex flex-row gap-4 justify-content-start mt-6">
            <Link href={`/news/${news?.id}/edit`}>
              <Button label="Edit" icon="pi pi-plus" outlined></Button>
            </Link>
            <Button
              icon={"pi pi-trash"}
              label="Delete"
              type="button"
              className="p-button-outlined"
            />
          </div>
        </section>
      </div>
      <div className="col-12 md:col-8 overflow-hidden">
        <img
          src={news?.thumbnail}
          alt="hero-1"
          className="sm:ml-auto block max-w-full"
          style={{
            clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
            maxWidth: "100",
          }}
        />
      </div>
    </div>
  );
}
