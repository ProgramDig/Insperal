import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/box-fill-black.svg"

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className={"container"}>
      <h1 className="d-flex justify-content-center mt-5 mb-3">
        <span className={"m-3"}>Вхід в Insperal</span>
        <img src={logo} alt="лого" />
      </h1>
      <div className={"d-flex justify-content-center "}>
        <Form className={" col col-lg-5"}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Введіть пошту або логін</Form.Label>
            <Form.Control type="email" placeholder="Приклад: vladick@gmail.com" />
            <Form.Text className="text-muted">
              Точно правильно вписав дані?.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Введіть пароль</Form.Label>
            <Form.Control type="password" placeholder="Приклад: 123456" />
            <Form.Text className="text-muted">
              Правильний пароль?.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запам'ятати дані?" />
          </Form.Group>
          <div className={"d-flex justify-content-between"}>
            <Button variant="primary" type="submit">
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
  );
};

export default LoginPage;