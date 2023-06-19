import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/planes/planesSlice";
// import styles from "./styles.module.css";
import Spinner from "../spinner/Spinner";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <ContentWrapper>
        {planes && planes.map((plane) => plane.name)}
      </ContentWrapper>
    </div>
  );
};

export default Planes;
