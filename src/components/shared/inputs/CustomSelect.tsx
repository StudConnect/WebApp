import { Key } from "react";
import { SelectProps } from "../../../types/Interface";

export const CustomSelect: React.FC<SelectProps> = ({
  handleChange,
  label,
  options,
  name,
}) => {
  return (
    <>
      <section className="text-white">
        <section className="flex flex-col">
          {label && (
            <label className="text-para text-sm font-semibold mb-2">
              {label}
            </label>
          )}
          <select
            className="rounded-lg outline-none cursor-pointer text-black px-4 py-2 text-sm font-medium leading-normal border-2 border-gray-300 bg-white transition duration-200 ease-in-out shadow-sm"
            name={name}
            onChange={handleChange}
          >
            {options?.map((data: SelectProps["options"], i: Key) => (
              <option
                className="py-2 text-gray-700"
                key={i}
                value={data?.value}
              >
                {data?.label}
              </option>
            ))}
          </select>
        </section>
      </section>
    </>
  );
};
