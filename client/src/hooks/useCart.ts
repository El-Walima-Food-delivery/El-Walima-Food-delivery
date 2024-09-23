import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getCartItems } from "../redux/features/cartSlice";

export const useCart = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return { items };
};
