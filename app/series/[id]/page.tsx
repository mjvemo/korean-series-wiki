"use client";

import React, { useEffect } from "react";
import {
  useDispatch,
  getSerieByIdAsync,
  useSelector,
  selectActiveSerie,
  selectActors,
  getActorsBySerieIdAsync,
  selectSeasons,
} from "@/lib/redux";
import { TabPanel, TabView } from "primereact/tabview";
import NewsListSelector from "@/lib/components/NewsListFormSelector";
import { Award } from "@/lib/components/Award";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import ActorsList from "@/lib/components/ActorsList";
import { getSeasonsBySerieId } from "@/lib/redux/slices/seasons";
import { SerieCard } from "@/lib/components/SerieCard";
import { serie } from "@/lib/models/serie.model";
import SeasonsList from "@/lib/components/SeasonsList";

export interface ComponentProps {
  params: { id: string };
}

export default function SeriesList(props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSerieByIdAsync(id));
    dispatch(getActorsBySerieIdAsync(id));
    dispatch(getSeasonsBySerieId(id));
  }, []);

  const actors = useSelector(selectActors);
  const activeSerie = useSelector(selectActiveSerie);
  const seasons = useSelector(selectSeasons);

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <div className="flex flex-row justify-content-start">
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
          <TabPanel header="Seasons" className="m-0">
            <SeasonsList data={seasons} />
          </TabPanel>
          <TabPanel header="News" className="m-0">
            <NewsListSelector />
          </TabPanel>
          <TabPanel header="Cast" className="m-0">
            <ActorsList data={actors} />
          </TabPanel>
          <TabPanel header="Awards" className="m-0">
            <Award />
          </TabPanel>
        </TabView>
      </div>

      <Footer />
    </div>
  );
}
