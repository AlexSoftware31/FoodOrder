import { useContext } from "react";
import imglogo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/cartContext";
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={imglogo} alt="A Restaurant" />
        <h1>Forno Restaurant</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly={true}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
