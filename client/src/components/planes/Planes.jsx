import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanes } from "../../store/planes/planesSlice";
import styles from "./styles.module.css";

const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);
  return <>Planes</>;
};

export default Planes;
