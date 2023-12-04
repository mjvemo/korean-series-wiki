"use client";
import { Image } from "primereact/image";
import { SerieForm } from "@/lib/components/SeriesForm";
import { About } from "@/lib/components/About";
import { Season } from "@/lib/components/Season";
import { Cast } from "@/lib/components/Cast";
import { Award } from "@/lib/components/Award";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";

export default function Page() {
  return <SerieForm />;
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
