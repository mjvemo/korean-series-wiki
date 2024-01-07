"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "primereact/button";

import {
  useDispatch,
  useSelector,
  selectNews,
  getNewsAsync,
} from "@/lib/redux";
import NewsList from "@/lib/components/NewsList";

export default function News() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsAsync());
  }, []);

  const news = useSelector(selectNews);

  return (
    <div>
      <div className="flex flex-row justify-content-between size-xl  gap-4 m-4">
        <h1>News</h1>
        <Link href="news/create">
          <Button label="Add News" icon="pi pi-plus" outlined></Button>
        </Link>
      </div>
      <div className="card justify-content-center p-4">
        <NewsList data={news} />
      </div>
    </div>
  );
}
