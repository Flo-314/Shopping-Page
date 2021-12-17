const CheckoutCard = ({ product }) => {
  return <div className="checkoutProduct">
      <h4 className="title">{product.title}</h4>
      <h4 className="price">{product.price}$</h4>
      
     </div>;
};

export default CheckoutCard;
