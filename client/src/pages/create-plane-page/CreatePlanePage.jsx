import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import { createPlane } from "../../store/plane/planeSlice";
import { paths } from "../../path/path";

const CreatePlanePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.plane);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [planeImage, setPlaneImage] = useState(null);

  const handlerCreatePlane = useCallback(() => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("capacity", capacity);
    formData.append("planeImage", planeImage);
    dispatch(createPlane(formData)).then((res) => {
      if (!res.error) {
        navigate(`${paths.plane}/${res.payload._id}`, { replace: true });
      }
    });
  }, [name, price, description, capacity, planeImage, dispatch, navigate]);
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
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}></Input>
        <Input
          name='price'
          placeholder='Цена самолета'
          error={errors && errors.price && errors.price.message}
          onChange={(e) => setPrice(e.target.value)}></Input>
        <Input
          name='description'
          placeholder='Описание самолета'
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDescription(e.target.value)}></Input>
        <Input
          name='capacity'
          placeholder='Вместимость самолета'
          error={errors && errors.capacity && errors.capacity.message}
          onChange={(e) => setCapacity(e.target.value)}></Input>
        <Input
          name='planeImage'
          type='file'
          error={errors && errors.planeImage && errors.planeImage.message}
          onChange={(e) => setPlaneImage(e.target.files[0])}></Input>
        <Button
          containerClassName={styles.buttonContainer}
          onClick={handlerCreatePlane}>
          Создать
        </Button>
      </form>
    </ContentWrapper>
  );
};

export default CreatePlanePage;
