import { ButtonProps } from "../../../types/Interface";

export const ButtonBg: React.FC<ButtonProps> = ({ children, disabled, onClick, className, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${disabled ? "" : ""
          } rounded-2xl items-center cursor-pointer justify-center inline-flex text-center text-white linear-gradient text-sm font-medium leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export const ButtonOutline: React.FC<ButtonProps> = ({ children, disabled, onClick, className, ...rest }) => {
  return (
    <>
      <button
        className={`w-full ${disabled ? "" : ""
          } rounded-2xl items-center cursor-pointer justify-center inline-flex text-center text-white lborder border-bc text-sm font-medium leading-normal ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
