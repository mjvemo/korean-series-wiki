"use client";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { ChangeEvent, useState } from "react";
export function ActorCard() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [yearActive, setYearActive] = useState(0);

  function handleOnChangeImage(e: ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }
  function handleOnChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleOnChangeAge(e: InputNumberChangeEvent) {
    setAge(Number(e.value));
  }

  function handleOnChangeYearsActive(e: InputNumberChangeEvent) {
    setYearActive(Number(e.value));
  }

  return (
    <div className="flex align-items-center justify-content-center">
      <Card>
        <div className="flex flex-row gap-4 align-items-center">
          <Image
            width="450"
            src="https://ih1.redbubble.net/image.3432848696.7248/ur,pin_large_front,square,600x600.jpg"
            preview
          ></Image>
          <div className="flex flex-column">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
              <label>Image Url</label>
              <InputText
                value={image}
                onChange={handleOnChangeImage}
              ></InputText>
            </div>
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
              <label>Actor name</label>
              <InputText value={name} onChange={handleOnChangeName}></InputText>
            </div>
            <div className="flex flex-column gap-2">
              <label>Actor's Age</label>
              <InputNumber
                value={age}
                onChange={handleOnChangeAge}
                useGrouping={false}
              ></InputNumber>
            </div>
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
              <label>Years Active</label>
              <InputNumber
                value={yearActive}
                onChange={handleOnChangeYearsActive}
              ></InputNumber>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
