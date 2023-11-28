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
  const [rate, setRate] = useState(0);
  const [education, setEducation] = useState("");
  const [agency, setAgency] = useState("");
  const [yearActive, setYearActive] = useState(new Date());

  function handleOnChangeUrl(e: ChangeEvent<HTMLInputElement>) {
    setImageUrl(e.target.value);
  }

  function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
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
  function handleOnChangeYearActive(
    event: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) {
    if (event.value) {
      setYearActive(event.value);
    }
  }

  return (
    <div className="flex align-items-center">
      <div className="flex flex-row gap-3 align-items-center">
        <div className="flex flex-column">
          <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
            <label>Image Url</label>
            <InputText
              value={imageUrl}
              onChange={handleOnChangeUrl}
              placeholder="image url"
              className="w-full"
            />
          </div>
          <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3 w-full">
            <label>Name</label>
            <InputText
              value={name}
              onChange={handleOnChangeName}
              placeholder="name"
              className="w-full"
            />
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <label>Age</label>
              <InputNumber
                value={age}
                onChange={handleOnChangeAge}
                placeholder="age"
              />
            </div>
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <label>Education</label>
              <InputText
                value={education}
                onChange={handleOnChangeEducation}
                placeholder="education"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <label>Agency</label>
              <InputText
                value={agency}
                onChange={handleOnChangeDirectedBy}
                placeholder="agency"
              />
            </div>

            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <label>Active Since</label>
              <Calendar
                value={yearActive}
                onChange={handleOnChangeYearActive}
                view="year"
                dateFormat="yy"
                placeholder="active since"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
