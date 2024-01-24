import { selectActiveAward, useSelector } from "@/lib/redux";
import Link from "next/link";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";

export interface ComponentProps {
  id: string;
}
export default function AwardsHero(props: ComponentProps) {
  const { id } = props;
  const items = [
    { label: "Awards", url: "/awards" },
    { label: id, url: `/awards/${id}` },
  ];
  const home = { icon: "pi pi-home", url: "/" };
  const award = useSelector(selectActiveAward);

  return (
    <div className="grid grid-nogutter surface-50 text-800 overflow-hidden">
      <div className="col-12 md:col-4 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <div>
            <BreadCrumb model={items} home={home} className="surface-100" />
          </div>
          <div className="text-md mt-4 mb-4">
            Name ~ {award?.name} <br />
            Age ~ {award?.year} <br />
            Agency ~ {award?.category}
          </div>
          <div className="flex flex-row gap-4 justify-content-start mt-6">
            <Link href={`/awards/${award?.id}/edit`}>
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
          src={award?.image}
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
