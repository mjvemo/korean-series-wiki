"use client";
import { Image } from "primereact/image";
import { SerieForm } from "@/lib/components/SeriesForm";
import { About } from "@/lib/components/About";
import { Season } from "@/lib/components/Season";
import { Cast } from "@/lib/components/Cast";
import { Award } from "@/lib/components/Award";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { Series } from "@/lib/components/Series";
import { ActorsForm } from "@/lib/components/ActorsForm";

export default function Page() {
  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6 p-5">
      <div>
        <h1>Add New Actor</h1>
      </div>
      <div className="flex flex-row align-items-center justify-content-center gap-6">
        <Image
          src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/03/16/6231339ee2a8f37ae025032e.webp"
          alt="Image"
          width="650"
          preview
        />
        <ActorsForm />
      </div>
      <div>
        <div className="card justify-content-center">
          <TabView>
            <TabPanel header="About" className="m-0">
              <About />
            </TabPanel>
            <TabPanel header="Series" className="m-0">
              <Series />
            </TabPanel>
            <TabPanel header="Awards" className="m-0">
              <Award />
            </TabPanel>
          </TabView>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-content-end p-6">
        <Button label="Save" icon="pi pi-check" size="large"></Button>
        <Button label="Cancel" icon="pi pi-times" size="large"></Button>
      </div>
    </div>
  );
}
