import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import styles from "./styles.module.css";

const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет в ближайшее время</h1>
      <Button onClick={() => navigate("/")} containerClassName={styles.button}>
        На главную
      </Button>
    </ContentWrapper>
  );
};

export default OrderPage;
