import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="imageContainer">
       <Link to={`/shop/${product.id}`}>  <img alt="product" src={product.image}></img></Link>
      </div>

      <div className="infoContainer">
     
      

       <Link to={`/shop/${product.id}`}> <h3 className="title">{product.title}</h3></Link>
        <h4 className="price">Price: {product.price}$</h4>
        <button className="addBtn">Add to the Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
