import React from "react";
import styles from "./styles.module.css";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";

const CreatePlanePage = () => {
  const navigate = useNavigate();
  return (
    <ContentWrapper className={styles.createName}>
      <Button
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}>
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолет</h1>
        <Input
          name='name'
          placeholder='Название самолета'
          onChange={() => null}></Input>
        <Input
          name='price'
          placeholder='Цена самолета'
          onChange={() => null}></Input>
        <Input
          name='description'
          placeholder='Описание самолета'
          onChange={() => null}></Input>
        <Input
          name='capacity'
          placeholder='Вместимость самолета'
          onChange={() => null}></Input>
        <Input
          name='planeImage'
          type='file'
          placeholder='Вместимость самолета'
          onChange={() => null}></Input>
        <Button
          containerClassName={styles.buttonContainer}
          onClick={() => null}>
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};

export default CreatePlanePage;
