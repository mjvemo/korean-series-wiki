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
import { NewsDTO } from "@/lib/models/news.model";
import Link from "next/link";

export interface ComponentProps {
  data: NewsDTO[];
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
      <div className="flex flex-row gap-4 justify-content-end m-4">
        <Link href={`/news/${id}/edit`}>
          <Button label="Edit" icon="pi pi-plus" size="small" outlined></Button>
        </Link>
      </div>
      <div className="flex flex-row justify-content-center">
        <div className="card justify-content-center"></div>
        <IfNotNil data={activeNews}>
          {({ data: news }) => {
            return (
              <>
                <div className="card justify-content-center">
                  <div>{news.name}</div>
                  <div>{news.publishedAt}</div>
                  <div>{news.description}</div>
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
