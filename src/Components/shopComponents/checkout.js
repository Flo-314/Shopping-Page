import CheckoutCard from "./checkoutCard";


const Checkout = ({cart}) =>  {
   
        


    return <div className="checkoutContainer">
      <h1>Checkout: </h1>
      <div className="productsToPay">
    {cart.map((product) => {
        return(
            <CheckoutCard product={product}/>
        )

})


}</div>
<div className="checkout"></div>
</div>;
};

export default Checkout;