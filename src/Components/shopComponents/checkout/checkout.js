import CheckoutCard from "./checkoutCard";
import uniqid from "uniqid";
const Checkout = ({ cart }) => {
  const getTotalCost = () => {
    let finalPrice = 0;
    cart.forEach((product) => {
      finalPrice += product.price;
    });
    return finalPrice;
  };

  return (
    <main className="checkoutContainer">
      <div >
        <h1>Checkout: </h1>
        <div className="productsToPay">
          {cart.map((product) => {
            return <CheckoutCard product={product} key={uniqid()} />;
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
