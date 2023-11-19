"use client";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { SyntheticEvent, useState } from "react";
import { ChangeEvent } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";
import { Calendar } from "primereact/calendar";
import { FormEvent } from "primereact/ts-helpers";

export function SerieForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState(new Date());
  const [pg, setPg] = useState("");
  const [rate, setRate] = useState(0);
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [directedBy, setDirectedBy] = useState("");

  function handleOnChangeUrl(e: ChangeEvent<HTMLInputElement>) {
    setImageUrl(e.target.value);
  }

  function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleOnChangeYear(
    event: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) {
    if (event.value) {
      setYear(event.value);
    }
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
  function handleOnChangeGenre(e: ChangeEvent<HTMLInputElement>) {
    setGenre(e.target.value);
  }
  function handleOnChangeDirector(e: ChangeEvent<HTMLInputElement>) {
    setDirector(e.target.value);
  }
  function handleOnChangeDirectedBy(e: ChangeEvent<HTMLInputElement>) {
    setDirectedBy(e.target.value);
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
        <Calendar
          value={year}
          onChange={handleOnChangeYear}
          view="year"
          dateFormat="yy"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2 gap-2">
        <InputText value={pg} onChange={handleOnChangePg} placeholder="PG" />
        <Rating value={rate} onChange={handleOnChangeRate} cancel={false} />
      </div>
      <h3>Production</h3>
      <div className="flex flex-row flex-wrap">
        <InputText
          value={genre}
          onChange={handleOnChangeGenre}
          placeholder="Genre"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2">
        <InputText
          value={director}
          onChange={handleOnChangeDirector}
          placeholder="Director"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2">
        <InputText
          value={directedBy}
          onChange={handleOnChangeDirectedBy}
          placeholder="Directed By"
        />
      </div>
    </div>
  );
}
