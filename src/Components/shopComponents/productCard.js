import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="card">
      <div className="imageContainer">
        <Link to={`/shop/${props.product.id}`}>
          <img alt="product" src={props.product.image}></img>
        </Link>
      </div>

      <div className="infoContainer">
        <Link to={`/shop/${props.product.id}`}>
          <h3 className="title">{props.product.title}</h3>
        </Link>
        <h4 className="price">Price: {props.product.price}$</h4>
        <button className="addBtn" onClick={() => props.ProductHandler(props.product)}>Add to the Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
