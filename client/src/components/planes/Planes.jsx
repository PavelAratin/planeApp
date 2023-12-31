import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/planes/planesSlice";
import styles from "./styles.module.css";
import Spinner from "../spinner/Spinner";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import PlaneItem from "../planeItem/PlaneItem";
import { paths } from "../../path/path";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { useSortPlanes } from "../../hooks/useSortPlanes";

const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  const { isDescSort, setIsDescSort, sortedPlanes } = useSortPlanes(
    planes || []
  );
  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className={styles.sort}>
        <ContentWrapper className={styles.planesHeader}>
          <Button
            className={styles.sortBtn}
            onClick={() => setIsDescSort(!isDescSort)}>
            Сортировать по цене {`${isDescSort ? "+" : "-"}`}
          </Button>
          <Link to={paths.createPlane} className={styles.createPlaneBtn}>
            Добавить самолет
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.planesGrid}>
        {sortedPlanes &&
          sortedPlanes.map((plane) => (
            <PlaneItem key={plane._id} {...plane}></PlaneItem>
          ))}
      </ContentWrapper>
    </div>
  );
};

export default Planes;
