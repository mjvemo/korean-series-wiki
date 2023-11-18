"use client";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";
import { Nullable } from "primereact/ts-helpers";

export function SerieForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);
  const [pg, setPg] = useState("");
  const [rate, setRate] = useState(0);

  function handleOnChangeUrl(e: ChangeEvent<HTMLInputElement>) {
    setImageUrl(e.target.value);
  }

  function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleOnChangeYear(e: InputNumberChangeEvent) {
    const num = Number(e.value);
    setYear(num);
  }
  function handleOnChangePg(e: ChangeEvent<HTMLInputElement>) {
    setPg(e.target.value);
  }

  function handleOnChangeRate(e: RatingChangeEvent) {
    if (typeof e.value === "number") {
      setRate(e.value);
    } else {
      setRate(0);
    }
  }
  return (
    <div>
      <div className="">
        <InputText
          value={imageUrl}
          onChange={handleOnChangeUrl}
          placeholder="Image Url"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2 gap-2">
        <InputText
          value={name}
          onChange={handleOnChangeName}
          placeholder="Name"
        />
        <InputNumber
          value={year}
          onChange={handleOnChangeYear}
          placeholder="Year"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2 gap-2">
        <InputText value={pg} onChange={handleOnChangePg} placeholder="PG" />
        <Rating value={rate} onChange={handleOnChangeRate} cancel={false} />
      </div>
      <h3>Production</h3>
      <div className="flex flex-row flex-wrap">
        <InputText
          value={imageUrl}
          onChange={handleOnChangeUrl}
          placeholder="Genre"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2">
        <InputText
          value={imageUrl}
          onChange={handleOnChangeUrl}
          placeholder="Director"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2">
        <InputText
          value={imageUrl}
          onChange={handleOnChangeUrl}
          placeholder="Directed By"
        />
      </div>
    </div>
  );
}
