import Nav from "./Nav";
const   Header = ({cart}) =>  {
    return (  
        <header>
            
            <div id="title">
                <h1>NK8 Shop</h1>
            </div>
            <Nav cart={cart}/>
        </header>
    );
}

export default  Header;