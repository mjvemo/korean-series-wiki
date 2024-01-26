"use client";

import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { selectByEntityIdNews, useDispatch, useSelector } from "@/lib/redux";
import { Footer } from "@/lib/components/Footer";
import { IfNotNil } from "@/lib/components/utils/IfNotNil";
import {
  getNewsByIdAsync,
  selectActiveNews,
  selectNews,
} from "@/lib/redux/slices/news";
import { NewsDTO } from "@/lib/models/news.model";
import Link from "next/link";
import NewsHero from "@/lib/components/NewsHero";

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

  return (
    <div className="flex flex-column justify-content-center flex-wrap row-gap-6">
      <NewsHero id={id} />
    </div>
  );
}
