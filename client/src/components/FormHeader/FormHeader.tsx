import React from "react";
import logo from "../../assets/box-fill-black.svg";

interface FormHeaderProps {
  title: string,
}

const FormHeader: React.FC<FormHeaderProps> = ({title}): JSX.Element => {
  return (
    <h1 className={"d-flex align-items-center justify-content-center"}>
      <span className={"m-3"}>{title}</span>
      <img src={logo} alt="лого" />
    </h1>
  );
};

export default FormHeader;