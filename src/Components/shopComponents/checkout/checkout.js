import CheckoutCard from "./checkoutCard";
import uniqid from "uniqid";
const Checkout = (props) => {
  const getTotalCost = () => {
    let finalPrice = 0;
    props.cart.forEach((product) => {
      finalPrice += product.price;
    });
    return finalPrice;
  };

  return (
    <main className="checkoutContainer">
      <div >
        <h1>Checkout: </h1>
        <div className="productsToPay">
          {props.cart.map((product) => {
            return <CheckoutCard product={product} substractProduct={props.substractProduct} deleteProduct={props.deleteProduct} addProduct={props.addProduct} key={uniqid()} />;
          })}
        </div>
        <div className="checkout">
          <h3>Total: {getTotalCost()}$</h3>
          <button>Payout</button>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
