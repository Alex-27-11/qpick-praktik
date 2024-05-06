import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { qpickActions } from "../store/qpick/qpick.slice";

const actions = {
  ...qpickActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
