import { Link } from "react-router-dom";

const   Header = ({cart}) =>  {
    return (  
        <header>
            
            <div id="title">
                <h1>NK8 Shop</h1>
            </div>
            <li >
          <Link to="shop/checkout">Checkout({cart.length})</Link>
          
        </li>
        </header>
    );
}

export default  Header;