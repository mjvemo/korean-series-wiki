import { Image } from "primereact/image";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { FormEvent } from "primereact/ts-helpers";

export function CreateAwardForm() {
  const [year, setYear] = useState(new Date());
  const [category, setCategory] = useState("");
  const [award, setAward] = useState("");
  const [result, setResult] = useState("");

  function handleOnChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }
  function handleOnChangeResult(e: ChangeEvent<HTMLInputElement>) {
    setResult(e.target.value);
  }
  function handleOnChangeAward(e: ChangeEvent<HTMLInputElement>) {
    setAward(e.target.value);
  }
  function handleOnChangeYear(
    event: FormEvent<Date, SyntheticEvent<Element, Event>>
  ) {
    if (event.value) {
      setYear(event.value);
    }
  }

  return (
    <div className="flex align-items-center">
      <div className="flex flex-row gap-4 align-items-center">
        <div className="flex flex-column">
          <div className="flex flex-row gap-4">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
              <label>Year</label>
              <Calendar
                value={year}
                onChange={handleOnChangeYear}
                view="year"
                dateFormat="yy"
              />
            </div>
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
              <label>Category</label>
              <InputText
                value={category}
                onChange={handleOnChangeCategory}
              ></InputText>
            </div>
          </div>
          <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
            <label>Award Name</label>
            <InputText value={award} onChange={handleOnChangeAward}></InputText>
          </div>{" "}
          <div className="flex flex-column gap-2 align-items-start justify-content-start pt-4 py-4">
            <label>Result</label>
            <InputText
              value={result}
              onChange={handleOnChangeResult}
            ></InputText>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
