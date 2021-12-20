import { Link } from "react-router-dom";

const   Header = ({cart}) =>  {
    return (  
        <header>
            
            <div id="title">
                <h1>NK8 Shop</h1>
            </div>
            <li >
          <Link to="shop/checkout">
         <img src="https://previews.123rf.com/images/vectorlightstudio/vectorlightstudio2001/vectorlightstudio200100102/144161554-shopping-cart-icon.jpg" alt="shopping cart"></img>
              Checkout({cart.length})</Link>
          
        </li>
        </header>
    );
}

export default  Header;