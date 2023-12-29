"use client";

import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "@/lib/redux";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import {
  getNewsByIdAsync,
  selectActiveNews,
  selectNews,
} from "@/lib/redux/slices/news";

export interface ComponentProps {
  params: { id: string };
}

export default function NewsList(props: ComponentProps) {
  const { id } = props.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsByIdAsync(id));
  }, []);
  const news = useSelector(selectNews);
  const activeNews = useSelector(selectActiveNews);
  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <div className="flex flex-row justify-content-center">
        <div className="card justify-content-center"></div>
        <IfNotNil data={activeNews}>
          {({ data: news }) => {
            return (
              <>
                <div className="card justify-content-center">
                  <div>{news.name}</div>
                </div>
              </>
            );
          }}
        </IfNotNil>
      </div>
      <Footer />
    </div>
  );
}
