import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "./data/data";

const animatedComponents = makeAnimated();

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: "50px",
    textAlign: "right",
    padding: "6px",
  }),
  multiValue: (provided: any) => ({
    ...provided,
    color: "#fff",
    borderRadius: "50px",
    padding: "2px 5px",
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: "#fff",
    borderRadius: "20px",
  }),
};

export default function AnimatedMulti({
  onChange,
}: {
  onChange: (value: any) => void;
}) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      // defaultValue={[colourOptions[0]]}
      isMulti
      options={colourOptions}
      placeholder={`انتخاب سرویس ...`}
      styles={customStyles}
      onChange={onChange}
    />
  );
}
