import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormHeader from "../../components/FormHeader/FormHeader";
import classes from "../Registration/Registration.page.module.scss";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className={classes.page}>

      <div className={`container d-flex align-items-center justify-content-center ${classes.div}`}>
        <div className={classes.form}>
          <FormHeader title={"Вхід в Insperal"}/>

          <Form className={""}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Пошту або логін</Form.Label>
              <Form.Control type="email" placeholder="Приклад: vladick@gmail.com" />
              <Form.Text className="text-muted">
                Точно правильно вписав дані?.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
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
    </div>
  );
};

export default LoginPage;