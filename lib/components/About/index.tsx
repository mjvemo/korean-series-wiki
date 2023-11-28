import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
import { SyntheticEvent, use, useState } from "react";
import { serie } from "@/lib/models/serie.model";
import { InputTextarea } from "primereact/inputtextarea";
import { ChangeEvent } from "react";
import { Calendar } from "primereact/calendar";
import { FormEvent } from "primereact/ts-helpers";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

export function About() {
  const [description, setDescription] = useState("");
  const [textarea, setTextarea] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState(new Date());
  const [tittle, setTittle] = useState("");

  function handleOnChangeDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleOnChangeTextarea(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextarea(e.target.value);
  }

  function handleOnChangeImage(e: ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }
  function handleOnChangeYear(
    event: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) {
    if (event.value) {
      setYear(event.value);
    }
  }
  function handleOnChangeTittle(event: ChangeEvent<HTMLInputElement>) {
    setTittle(event.target.value);
  }

  return (
    <div className="flex flex-row justify-content-center gap-6">
      <div className="flex flex-column align-items-center justify-content-center pt-2">
        <h1>Synopsis</h1>
        <span className="p-float-label">
          <InputTextarea
            value={description}
            onChange={handleOnChangeDescription}
            autoResize
            rows={16}
            cols={50}
          ></InputTextarea>
        </span>
      </div>
      <Divider layout="vertical" />
      <div className="flex flex-column">
        <div className="flex align-items-center ">
          <div className="flex flex-row gap-4 align-items-center">
            <div className="flex flex-column justify-content-center">
              <h1>News</h1>
              <Image
                width="520"
                src="https://6.soompi.io/wp-content/uploads/image/e742c985be3548939200ae2dcde1d21d/dummy.jpeg?s=900x600&e=t"
                preview
              ></Image>
            </div>
            <div className="flex flex-column gap-3 align-items-start pt-6 px-4">
              <label>Image Url</label>
              <InputText
                value={image}
                onChange={handleOnChangeImage}
                className="w-full"
                placeholder="image url"
              ></InputText>
              <label>Tittle</label>
              <InputText
                value={tittle}
                onChange={handleOnChangeTittle}
                className="w-full"
                placeholder="tittle"
              ></InputText>
              <label>Year</label>
              <Calendar
                value={year}
                onChange={handleOnChangeYear}
                view="year"
                dateFormat="yy"
                placeholder="year"
              />
              <label>Description</label>
              <InputTextarea
                value={textarea}
                onChange={handleOnChangeTextarea}
                autoResize
                rows={8}
                cols={30}
                className="w-full"
              ></InputTextarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
