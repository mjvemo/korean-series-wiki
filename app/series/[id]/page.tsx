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
  selectAwards,
  getNewsByActorIdAsync,
  getNewsBySerieIdAsync,
  getAwardsBySerieIdAsync,
  selectByEntityIdAwards,
  selectByEntityIdNews,
  selectByEntityIdActors,
} from "@/lib/redux";
import { TabPanel, TabView } from "primereact/tabview";
import NewsListSelector from "@/lib/components/NewsListFormSelector";
import { Award } from "@/lib/components/Award";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import ActorsList from "@/lib/components/ActorsList";
import { getSeasonsBySerieId } from "@/lib/redux/slices/seasons";
import { SerieCard } from "@/lib/components/SerieCard";

import SeasonsList from "@/lib/components/SeasonsList";
import AwardsList from "@/lib/components/AwardsList";
import NewsList from "@/lib/components/NewsList";
import { selectNews } from "@/lib/redux/slices/news";
import Link from "next/link";
import { Button } from "primereact/button";
import SeriesHero from "@/lib/components/SeriesHero";

export interface ComponentProps {
  params: { id: string; url: string };
}

export default function SeriesList(props: ComponentProps) {
  const { id } = props.params;
  const { url } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSerieByIdAsync(id));
    dispatch(getActorsBySerieIdAsync(id));
    dispatch(getNewsBySerieIdAsync(id));
    dispatch(getAwardsBySerieIdAsync(id));
  }, []);

  const actors = useSelector(selectByEntityIdActors);
  const activeSerie = useSelector(selectActiveSerie);
  const awards = useSelector(selectByEntityIdAwards);
  const news = useSelector(selectByEntityIdNews);

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <SeriesHero id={id} />
      <div className="flex flex-row justify-content-start">
        <IfNotNil data={activeSerie}>
          {({ data: serie }) => (
            <TabView>
              <TabPanel header="About" className="m-0">
                <div className="">
                  <h1>Description</h1>
                  <div>
                    <div>{serie.description}</div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Seasons" className="m-0">
                <SeasonsList serieId={serie.id} />
              </TabPanel>
              <TabPanel header="News" className="m-0">
                <NewsList data={news} />
              </TabPanel>
              <TabPanel header="Cast" className="m-0">
                <ActorsList data={actors} />
              </TabPanel>
              <TabPanel header="Awards" className="m-0">
                <AwardsList data={awards} />
              </TabPanel>
            </TabView>
          )}
        </IfNotNil>
      </div>
    </div>
  );
}
