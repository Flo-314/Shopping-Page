import { Link } from "react-router-dom";

const   Header = ({cart}) =>  {
    return (  
        <header>
            
            <div id="title">
                <h1>NK8 Shop</h1>
            </div>
            <li >
          <Link to="shop/checkout">
         <img src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1639964878~hmac=574b2707796c817adf8061ef287a72c1" alt="shopping cart"></img>
              Checkout({cart.length})</Link>
          
        </li>
        </header>
    );
}

export default  Header;