"use client";

import React, { useEffect } from "react";
import {
  useDispatch,
  getSerieByIdAsync,
  useSelector,
  getActorsByIdAsync,
  selectActiveSerie,
  selectSeries,
} from "@/lib/redux";
import { TabPanel, TabView } from "primereact/tabview";
import NewsListSelector from "@/lib/components/NewsListFormSelector";
import { Award } from "@/lib/components/Award";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import ActorsList from "@/lib/components/ActorsList";

export interface ComponentProps {
  params: { id: string };
}

export default function SeriesList(props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSerieByIdAsync(id));
    dispatch(getActorsByIdAsync(id));
  }, []);

  const series = useSelector(selectSeries);
  const activeSerie = useSelector(selectActiveSerie);

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <div className="flex flex-row justify-content-center">
        <div className="card justify-content-center"></div>
        <div className="card justify-content-center">
          <TabView>
            <TabPanel header="About" className="m-0">
              <div className="">
                <h1>Description</h1>
                <IfNotNil data={activeSerie}>
                  {({ data: serie }) => (
                    <div>
                      <div>{serie.description}</div>
                    </div>
                  )}
                </IfNotNil>
              </div>
            </TabPanel>
            <TabPanel header="News" className="m-0">
              <NewsListSelector />
            </TabPanel>
            <TabPanel header="Cast" className="m-0">
              <ActorsList data={[]} />
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
