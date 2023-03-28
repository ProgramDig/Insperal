import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormHeader from "../../components/FormHeader/FormHeader";
import axios, { AxiosError } from "axios";
import classes from "../Registration/Registration.page.module.scss";
import { AuthContext } from "../../context/auth.context";

interface Form {
  inputValue: string,
  password: string,
}

const initialForm: Form = {
  inputValue: "",
  password: ""
};

const baseURL: string = "http://localhost:5000";

const LoginPage: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState<Form>(initialForm);
  const navigate = useNavigate();

  const changeHandler: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const loginHandler: React.MouseEventHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (form.inputValue === "" || form.password === "") {
      return alert("Ведіть дані у форму");
    }
    try {
      const data = {
        email: form.inputValue.indexOf("@") !== -1 ? form.inputValue : null,
        login: form.inputValue.indexOf("@") !== -1 ? null : form.inputValue,
        password: form.password
      };
      const response = await axios.post(`${baseURL}/auth/login`, data);
      // @ts-ignore
      auth.login(response.data.token, response.data.role)
      navigate("/home");
    } catch (e: AxiosError | any) {
      const { data } = e.response;
      console.log(data);
      alert(data.message);
    }
  };


  return (
    <div className={classes.page}>

      <div className={`container d-flex align-items-center justify-content-center ${classes.div}`}>
        <div className={classes.form}>
          <FormHeader title={"Вхід в Insperal"} />

          <Form className={""}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Пошту або логін</Form.Label>
              <Form.Control
                type="text"
                name="inputValue"
                value={form.inputValue}
                onChange={changeHandler}
                placeholder="Приклад: vladick@gmail.com або vladick"
              />
              <Form.Text className="text-muted">
                Точно правильно вписав дані?.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Приклад: 123456"
                value={form.password}
                onChange={changeHandler}
              />
              <Form.Text className="text-muted">
                Правильний пароль?
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Запам'ятати дані?" />
            </Form.Group>

            <div className={"d-flex justify-content-between"}>
              <Button variant="primary" onClick={loginHandler}>
                Вхід
              </Button>
              <div>
                <span>Немає акаунта?</span>
                <Link className="m-2" to={"/registration"}>Зареєструватись</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;