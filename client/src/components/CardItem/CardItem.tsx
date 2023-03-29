import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { WomenAccount } from "../../interfaces/WomenAccount";
import useAppSelector from "../../hooks/useAppSelector.hook";
import classes from "../ModalItem/ModalItem.module.scss";

const CardItem = () => {
  const items: WomenAccount[] = useAppSelector(state => state.items.list);

  return (
    <Row xs={1} md={2} className="g-4">
      {items?.map((item, index) => (
        <Col key={index}>
          <Card>
            <Card.Body>
              <Card.Title>{item.id}. {item.secondName} {item.firstName} {item.thirdName}</Card.Title>
              <Card.Text>
                <div className={classes.info}>
                  <div className={classes.item}>
                    <div><b>Картотека:</b> {item?.indexСard}</div>
                    <div><b>Команда:</b> {item?.team}</div>
                    <div><b>Звання:</b> {item?.rank}</div>
                  </div>
                  <div className={classes.item}>
                    <div><b>Прізвище:</b> {item?.secondName}</div>
                    <div><b>Ім'я:</b> {item?.firstName}</div>
                    <div><b>По батькові:</b> {item?.thirdName}</div>
                  </div>
                  <div className={classes.item}>
                    <div><b>Дата народження:</b> {item?.dateOfBirth.toString().split("T")[0]}</div>
                    <div><b>Стать:</b> {item?.sex}</div>
                    <div><b>Ідентифікатор в базі:</b> {item?.id}</div>
                  </div>
                </div>

                <div className={`${classes.info} mt-4`}>
                  <div className={classes.item}>
                    <div><b>ВОС:</b> {item?.vos}</div>
                    <div><b>КОД:</b> {item?.code}</div>
                    <div><b>Група обліку:</b> {item?.accountGroup}</div>
                  </div>
                  <div className={classes.item}>
                    <div><b>Населений пункт:</b> {item?.locality}</div>
                    <div><b>Повна адреса:</b> {item?.fullAddress}</div>
                    <div><b>Номер телефону:</b> {item?.phone}</div>
                  </div>
                  <div className={classes.item}>
                    <div><b>Місце роботи:</b> {item?.workplace}</div>
                    <div><b>Результат ВЛК:</b> {item?.vlkResult}</div>
                    <div><b>Дата ВЛК:</b> {item?.vlkDate.toString().split("T")[0]}</div>
                  </div>
                </div>
                <div className={`${classes.info} mt-2`}>
                  <div><b>Примітки:</b> {item?.description}</div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardItem;