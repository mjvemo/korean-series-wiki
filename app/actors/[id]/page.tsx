"use client";

import React, { useEffect } from "react";

import {
  useDispatch,
  getActorByIdAsync,
  useSelector,
  selectActiveActor,
  selectSeries,
  getSeriesByActorIdAsync,
  selectAwards,
  getAwardsByActorIdAsync,
  getNewsByActorIdAsync,
  selectByEntityIdNews,
} from "@/lib/redux";
import { TabPanel, TabView } from "primereact/tabview";
import NewsListSelector from "@/lib/components/NewsListFormSelector";
import { Award } from "@/lib/components/Award";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import SeriesList from "@/lib/components/SeriesList";
import AwardsList from "@/lib/components/AwardsList";
import NewsListFormSelector from "@/lib/components/NewsListFormSelector";
import NewsList from "@/lib/components/NewsList";
import { selectNews } from "@/lib/redux/slices/news";
import { Button } from "primereact/button";
import Link from "next/link";
import { serie } from "@/lib/models/serie.model";

export interface ComponentProps {
  params: { id: string };
}

export default function ActorsList(props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorByIdAsync(id));
    dispatch(getSeriesByActorIdAsync(id));
    dispatch(getAwardsByActorIdAsync(id));
    dispatch(getNewsByActorIdAsync(id));
  }, []);

  const series = useSelector(selectSeries);
  const activeActor = useSelector(selectActiveActor);
  const awards = useSelector(selectAwards);
  const news = useSelector(selectByEntityIdNews);
  const actor = useSelector(selectActiveActor);

  //TODO: Fixed Link href to id/edit page
  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <div className="flex flex-row gap-4 justify-content-end m-4">
        <Link href={`/actors/${id}/edit`}>
          <Button label="Edit" icon="pi pi-plus" size="small" outlined></Button>
        </Link>
      </div>
      <div className="flex flex-row justify-content-center">
        <div className="card justify-content-center"></div>
        <div className="card justify-content-center">
          <TabView>
            <TabPanel header="About" className="m-0">
              <div className="">
                <h1>Biography</h1>
                <IfNotNil data={activeActor}>
                  {({ data: actor }) => (
                    <div>
                      <div>{actor.biography}</div>
                    </div>
                  )}
                </IfNotNil>
              </div>
            </TabPanel>
            <TabPanel header="News" className="m-0">
              <NewsList data={news} />
            </TabPanel>
            <TabPanel header="Series" className="m-0">
              <SeriesList data={series} />
            </TabPanel>
            <TabPanel header="Awards" className="m-0">
              <AwardsList data={awards} />
            </TabPanel>
          </TabView>
        </div>
        <div className="card justify-content-center"></div>
      </div>
      <Footer />
    </div>
  );
}
