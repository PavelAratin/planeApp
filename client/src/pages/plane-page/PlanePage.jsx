import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlane } from "../../store/plane/planeSlice";
import Spinner from "../../components/spinner/Spinner";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Button from "../../components/button/Button";

const PlanePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { plane, isLoading } = useSelector((state) => state.plane);

  useEffect(() => {
    dispatch(getPlane(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    plane && (
      <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)} isBackButton={true}>
            Назад
          </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}$</div>
          <Button
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate("/order")}>
            Оформить заказ
          </Button>
          <p className={styles.desc}>{plane.description}</p>
        </div>
        <div className={styles.imageContent}>
          <img className={styles.image} src={plane.planeImage} alt='' />
        </div>
      </ContentWrapper>
    )
  );
};

export default PlanePage;
