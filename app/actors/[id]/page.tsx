"use client";

import React, { useEffect } from "react";

import {
  useDispatch,
  getActorByIdAsync,
  useSelector,
  selectActiveActor,
  selectSeries,
  getSeriesByActorId,
} from "@/lib/redux";
import { TabPanel, TabView } from "primereact/tabview";
import NewsListSelector from "@/lib/components/NewsListFormSelector";
import { Award } from "@/lib/components/Award";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import SeriesList from "@/lib/components/SeriesList";

export interface ComponentProps {
  params: { id: string };
}

export default function ActorsList(props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorByIdAsync(id));
    dispatch(getSeriesByActorId(id));
  }, []);

  const series = useSelector(selectSeries);
  const activeActor = useSelector(selectActiveActor);

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
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
              <NewsListSelector />
            </TabPanel>
            <TabPanel header="Series" className="m-0">
              <SeriesList data={series} />
            </TabPanel>
            <TabPanel header="Awards" className="m-0">
              <Award />
            </TabPanel>
          </TabView>
        </div>
        <div className="card justify-content-center"></div>
      </div>
      <Footer />
    </div>
  );
}
