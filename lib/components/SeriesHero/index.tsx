import { selectActiveSerie, useSelector } from "@/lib/redux";
import Link from "next/link";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";

export interface ComponentProps {
  params: { id: string };
}
export default function SeriesHero(props: ComponentProps) {
  const { id } = props.params;
  const items = [
    { label: "Series", url: "/series" },
    { label: id, url: `/series/${id}` },
  ];
  const home = { icon: "pi pi-home", url: "/" };
  const serie = useSelector(selectActiveSerie);

  return (
    <div className="grid grid-nogutter surface-50 text-800 overflow-hidden">
      <div className="col-12 md:col-4 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <div>
            <BreadCrumb model={items} home={home} className="surface-100" />
          </div>
          <div className="text-md mt-4 mb-4">
            <span className="block text-4xl font-bold mb-4 mt-6">
              {serie?.name} <br /> Rate: {serie?.rating}
            </span>
            <div>
              {serie?.createdAt} <br />
              {serie?.pg} <br />
              Genre: {serie?.genre} <br />
              Director: {serie?.directedBy} <br />
              Studio: {serie?.studio}
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-content-start mt-6">
            <Link href={`/series/${serie?.id}/edit`}>
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
          src={serie?.image}
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
