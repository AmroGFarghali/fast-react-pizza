import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button onClick={handleDeleteItem} type="small">
      Delete
    </Button>
  );
};

export default DeleteItem;
