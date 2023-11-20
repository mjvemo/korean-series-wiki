"use client";
import { Actor } from "@/lib/models/actor.model";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { ChangeEvent, useState } from "react";

export interface CardProps {
  actor: Actor;
}
export function CreateActorCard() {
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
            width="400"
            src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t39.30808-6/243207902_201749515389043_7708432277521196265_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bM0JFwpDTjIAX8lB1LR&_nc_ht=scontent.fsjo14-1.fna&oh=00_AfCg3FluqmrtVmc2j3lSYKBER8XVVBjqNf3f_G4YTKNKxw&oe=655FC3E4"
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
              <label>Actor Age</label>
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
