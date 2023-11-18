"use client";
import { Image } from "primereact/image";
import { SerieForm } from "@/lib/components/SeriesForm";
import { About } from "@/lib/components/About";
import { TabMenu } from "primereact/tabmenu";
import { Button } from "primereact/button";

export default function Page() {
  const items = [
    { label: "About", icon: "pi pi-fw pi-home", url: "/series" },
    { label: "Seasons", icon: "pi pi-fw pi-calendar" },
    { label: "Cast", icon: "pi pi-fw pi-pencil" },
    { label: "Awards", icon: "pi pi-fw pi-file" },
  ];
  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <div className="flex align-items-start justify-content-center gap-4">
        <Image
          src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
          alt="Image"
          width="700"
          preview
        />
        <SerieForm />
      </div>
      <div>
        <div className="flex flex-row justify-content-center">
          <div className="card">
            <TabMenu model={items} />
          </div>
        </div>
        <div>
          <About />
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-content-end p-6">
        <Button label="Save" icon="pi pi-check" size="large"></Button>
        <Button label="Cancel" icon="pi pi-times" size="large"></Button>
      </div>
    </div>
  );
}

//
/** Create Page Components
 * upload image
 * form
 * ========================
 * news cards
 * ========================
 * series cards
 * ========================
 * actor cards
 * ========================
 * datatable awards
 */
