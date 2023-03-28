import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormHeader from "../../components/FormHeader/FormHeader";
import classes from "./Registration.page.module.scss";
import axios, { AxiosError } from "axios";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import { setToken } from "../../store/slices/token.slice";

interface Form {
  email: string,
  login: string,
  password: string,
}

const initialForm: Form = {
  email: "",
  login: "",
  password: ""
};

const baseURL: string = "http://localhost:5000";

const RegistrationPage: React.FC = (): JSX.Element => {
  const [form, setForm] = useState<Form>(initialForm);
  const dispatch = useAppDispatch();

  const changeHandler: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevState => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const registrationHandler: React.MouseEventHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (form.login === "" || form.email === "" || form.password === "") {
      return alert("Ведіть дані у форму");
    }
    try {
      const response = await axios.post(`${baseURL}/auth/registration`, form);
      // dispatch(setToken(response.data.token));
      alert("Користувач стоврений");
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
          <FormHeader title={"Реєстрація в Insperal"} />
          <Form className={""}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Пошта</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={changeHandler}
                placeholder="Приклад: vladick@gmail.com"
              />
              <Form.Text className="text-muted">
                Пошта має містити *@*.*.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Логін</Form.Label>
              <Form.Control
                type="text"
                name="login"
                value={form.login}
                onChange={changeHandler}
                placeholder="Приклад: vladick"
              />
              <Form.Text className="text-muted">
                Логін має містити мінімум 3 і максимум 16 символів.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={changeHandler}
                placeholder="Приклад: ОА8.sD12fsd562S@#"
              />
              <Form.Text className="text-muted">
                Пароль має містити мінімум 6 і максимум 16 символів.
              </Form.Text>
            </Form.Group>
            <div className={"d-flex justify-content-between"}>
              <Button variant="primary" onClick={registrationHandler}>
                Зареєструватись
              </Button>
              <div>
                <span>Маєте акаунт?</span>
                <Link className="m-2" to={"/login"}>Логін</Link>
              </div>
            </div>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;