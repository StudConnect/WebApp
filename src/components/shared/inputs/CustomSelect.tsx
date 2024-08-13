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
      <section>
        <section className="flex flex-col">
          {label && (
            <label className="text-para text-sm font-semibold mb-2">
              {label}
            </label>
          )}
          <select
            className="rounded-lg outline-none cursor-pointer text-swhite2 px-4 py-2 text-sm font-medium leading-normal border-2 border-para bg-bgray transition duration-200 ease-in-out shadow-sm"
            name={name}
            onChange={handleChange}
          >
            {options?.map((data: SelectProps["options"], i: Key) => (
              <option
                className="py-2 text-swhite2"
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
