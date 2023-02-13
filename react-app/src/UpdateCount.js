import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDecrement } from "./action";

const UpdateCount = () => {
  const count = useSelector((state) => state.count); //similar to mapStateToProps
  const dispatch = useDispatch(); //similar mapDispatchToProps

  const handleDec = () => {
    dispatch(onDecrement(1));
  };

  return (
    <div>
      {count}
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default UpdateCount;
