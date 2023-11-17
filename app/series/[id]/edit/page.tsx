"use client";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { useState } from "react";
export interface ComponentProps {
  params: { id: string };
}

export default function Props(props: ComponentProps) {
  const { id } = props.params;

  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [genre, setGenre] = useState("");

  function handleNameOnChange(e: any) {
    setName(e.target.value);
  }

  function handleRateOnChange(e: any) {
    setRate(e.target.value);
  }

  function handleGenreOnChange(e: any) {
    setGenre(e.target.value);
  }

  return (
    <div className="flex flex-columns gap-2">
      {/* This is a page to edit {id} */}
      <form className="flex flex-row gap-2">
        <div className="flex flex-column gap-2">
          <label>Kdrama name</label>
          <span className="p-input-icon-left">
            <InputText
              value={name}
              onChange={handleNameOnChange}
              placeholder="name"
            ></InputText>
          </span>
        </div>
        <div className="flex flex-column gap-2">
          <label>Rate</label>
          <span className="p-input-icon-left">
            <InputNumber
              value={rate}
              onChange={handleRateOnChange}
              placeholder="rate"
            ></InputNumber>
          </span>
        </div>
        <div className="flex flex-column gap-2">
          <label>Genre</label>
          <span className="p-input-icon-left">
            <InputText
              value={genre}
              onChange={handleGenreOnChange}
              placeholder="genre"
            ></InputText>
          </span>
        </div>
      </form>
      <div className="flex flex-column md:flex-row gaps">
        <div className="flex align-items-center justify-content-center gap-2">
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
