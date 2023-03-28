import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormHeader from "../../components/FormHeader/FormHeader";
import classes from "./Registration.page.module.scss";

const RegistrationPage = () => {

  return (
    <div className={classes.page}>
      <div className={`container d-flex align-items-center justify-content-center ${classes.div}`}>
        <div className={classes.form}>
          <FormHeader title={"Реєстрація в Insperal"}/>
          <Form className={""}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Пошта</Form.Label>
              <Form.Control type="email" placeholder="Приклад: vladick@gmail.com" />
              <Form.Text className="text-muted">
                Пошта має містити *@*.*.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Логін</Form.Label>
              <Form.Control type="text" placeholder="Приклад: vladick" />
              <Form.Text className="text-muted">
                Логін має містити мінімум 3 і максимум 16 символів.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Приклад: ОА8.sD12fsd562S@#" />
              <Form.Text className="text-muted">
                Пароль має містити мінімум 6 і максимум 16 символів.
              </Form.Text>
            </Form.Group>
            <div className={"d-flex justify-content-between"}>
              <Button variant="primary" type="submit">
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