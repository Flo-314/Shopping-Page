const CheckoutCard = (props) => {
 
  return (
    <div className="checkoutProduct">
      <h4 className="title">{props.product.title}</h4>
      <h4 className="price">{props.product.price}$</h4>
      <div className="quantity">
        <button className="-btn" onClick={ () => props.substractProduct(props.product)}>-</button>
        <h4>{props.product.quantity}</h4>
        <button className="+btn" onClick={ () => props.addProduct(props.product)}>+</button>
      </div>
    <button onClick={() => props.deleteProduct(props.product)}>Eliminate product</button>
    </div>
  );
};

export default CheckoutCard;
