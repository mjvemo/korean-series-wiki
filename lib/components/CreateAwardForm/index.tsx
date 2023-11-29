import { Image } from "primereact/image";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { FormEvent } from "primereact/ts-helpers";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

export function CreateAwardForm() {
  const [year, setYear] = useState(new Date());
  const [category, setCategory] = useState("");
  const [award, setAward] = useState("");
  const [selectedCity, setSelectedResult] = useState(null);
  const results = [
    { name: "Nominated", code: "N" },
    { name: "Winner", code: "W" },
  ];

  function handleOnChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }
  function handleOnChangeResult(event: DropdownChangeEvent) {
    setSelectedResult(event.value);
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
          <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
            <label>Prize Name</label>
            <InputText
              value={award}
              onChange={handleOnChangeAward}
              placeholder="prize name"
              className="w-full "
            ></InputText>
          </div>{" "}
          <div className="flex flex-row gap-4">
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <label>Year</label>
              <Calendar
                value={year}
                onChange={handleOnChangeYear}
                view="year"
                dateFormat="yy"
              />
            </div>
            <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
              <label>Category</label>
              <InputText
                value={category}
                onChange={handleOnChangeCategory}
              ></InputText>
            </div>
          </div>
          <div className="flex flex-column gap-2 align-items-start justify-content-start pt-3 py-3">
            <label htmlFor="award-result">Select a Result</label>
            <Dropdown
              value={selectedCity}
              onChange={handleOnChangeResult}
              options={results}
              optionLabel="name"
              placeholder="result"
              className="w-full md:w-12rem"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
