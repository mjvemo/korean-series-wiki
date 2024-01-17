"use client";

import React, { useEffect } from "react";
import { Button } from "primereact/button";

import {
  useDispatch,
  getActorByIdAsync,
  useSelector,
  selectActiveActor,
  getActorsBySerieIdAsync,
  selectActors,
  selectSeries,
  getSeriesByActorIdAsync,
  getAwardByIdAsync,
  selectActiveAward,
} from "@/lib/redux";
import { TabPanel, TabView } from "primereact/tabview";
import NewsListSelector from "@/lib/components/NewsListFormSelector";
import { Award } from "@/lib/components/Award";
import { Series } from "@/lib/components/Series";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import SeriesList from "@/lib/components/SeriesList";
import Link from "next/link";
import AwardsHero from "@/lib/components/AwardHero";

export interface ComponentProps {
  params: { id: string };
}

export default function (props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAwardByIdAsync(id));
  }, []);

  const activeAward = useSelector(selectActiveAward);
  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <AwardsHero id={id} />

      <div className="flex flex-row gap-4 justify-content-end m-4">
        <Link href={`/awards/${id}/edit`}>
          <Button label="Edit" icon="pi pi-plus" size="small" outlined></Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
