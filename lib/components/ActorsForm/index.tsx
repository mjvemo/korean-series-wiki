"use client";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { SyntheticEvent, useState } from "react";
import { ChangeEvent } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";
import { Calendar } from "primereact/calendar";
import { FormEvent } from "primereact/ts-helpers";

export function ActorsForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [pg, setPg] = useState("");
  const [rate, setRate] = useState(0);
  const [education, setEducation] = useState("");
  const [agency, setAgency] = useState("");
  const [active, setActive] = useState("");
  const [year, setYear] = useState(new Date());

  function handleOnChangeUrl(e: ChangeEvent<HTMLInputElement>) {
    setImageUrl(e.target.value);
  }

  function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
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

  function handleOnChangeAge(event: InputNumberChangeEvent) {
    setAge(Number(event.value));
  }

  function handleOnChangeEducation(e: ChangeEvent<HTMLInputElement>) {
    setEducation(e.target.value);
  }
  function handleOnChangeDirectedBy(e: ChangeEvent<HTMLInputElement>) {
    setAgency(e.target.value);
  }
  function handleOnChangeYear(
    event: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) {
    if (event.value) {
      setYear(event.value);
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
      </div>
      <div className="flex flex-row flex-wrap pt-2 gap-2">
        <InputNumber
          value={age}
          onChange={handleOnChangeAge}
          placeholder="Age"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2 gap-2">
        <InputText value={pg} onChange={handleOnChangePg} placeholder="PG" />
        <Rating value={rate} onChange={handleOnChangeRate} cancel={false} />
      </div>
      <h3>Production</h3>
      <div className="flex flex-row flex-wrap pt-2">
        <InputText
          value={education}
          onChange={handleOnChangeEducation}
          placeholder="Education"
        />
      </div>
      <div className="flex flex-row flex-wrap pt-2">
        <InputText
          value={agency}
          onChange={handleOnChangeDirectedBy}
          placeholder="Agency"
        />
      </div>

      <div className="flex flex-row flex-wrap pt-2">
        <Calendar
          value={year}
          onChange={handleOnChangeYear}
          view="year"
          dateFormat="yy"
          placeholder="active years"
        />
      </div>
    </div>
  );
}
